import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, limit, startAfter } from "firebase/firestore";
import { db } from '../../lib/firebase';
import EventCard from './EventCard';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allEventsLoaded, setAllEventsLoaded] = useState(false);

  const fetchEvents = async () => {
    try {
      const eventsQuery = query(collection(db, "events"), limit(6));
      const documentSnapshots = await getDocs(eventsQuery);
      const lastVisibleDoc = documentSnapshots.docs[documentSnapshots.docs.length-1];
      setLastVisible(lastVisibleDoc);
      const eventList = documentSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventList);
      if (documentSnapshots.docs.length < 6) {
        setAllEventsLoaded(true);
      }
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchMoreEvents = async () => {
    if (!lastVisible || loadingMore) return;

    setLoadingMore(true);
    try {
      const nextQuery = query(collection(db, "events"), startAfter(lastVisible), limit(6));
      const documentSnapshots = await getDocs(nextQuery);
      const lastVisibleDoc = documentSnapshots.docs[documentSnapshots.docs.length-1];
      setLastVisible(lastVisibleDoc);
      const newEvents = documentSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(prevEvents => [...prevEvents, ...newEvents]);
      if (documentSnapshots.docs.length < 6) {
        setAllEventsLoaded(true);
      }
    } catch (err) {
      console.error("Error fetching more events:", err);
      setError("Failed to load more events. Please try again later.");
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Events</h1>
      {loading ? (
        <div className="text-center">
          <p>Loading events...</p>
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          {!allEventsLoaded && (
            <div className="text-center mt-8">
              <button 
                onClick={fetchMoreEvents} 
                disabled={loadingMore}
                className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 disabled:bg-gray-400"
              >
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Events;
