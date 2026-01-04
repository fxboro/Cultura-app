import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../lib/firebase';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventDoc = doc(db, "events", id);
        const eventSnapshot = await getDoc(eventDoc);

        if (eventSnapshot.exists()) {
          setEvent({ id: eventSnapshot.id, ...eventSnapshot.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching event: ", error);
      }
      setLoading(false);
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="text-center"><p>Loading event details...</p></div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={event.image} alt={event.name} className="w-full h-96 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{event.name}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <p className="mr-4"><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.venue}</p>
          </div>
          <p className="text-lg mb-6">{event.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-purple-700">Price: ${event.price}</p>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-800 transition-colors duration-300">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
