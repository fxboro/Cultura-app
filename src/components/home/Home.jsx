import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import EventCard from "../events/EventCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedEvents, setLikedEvents] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, "events");
        const eventSnapshot = await getDocs(eventsCollection);
        const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventList);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleToggleLike = (eventId) => {
    setLikedEvents(prev => ({ ...prev, [eventId]: !prev[eventId] }));
  };

  const handleShare = () => {
    // Placeholder for share functionality
    alert("Share functionality to be implemented!");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative rounded-lg overflow-hidden mb-12" style={{ height: '50vh' }}>
        <img src="https://images.unsplash.com/photo-1519700392325-df8b310469b6?q=80&w=2070&auto=format&fit=crop" alt="Concert" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Find Your Next Experience</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">Book tickets for concerts, festivals, and cultural events happening near you.</p>
          <div className="w-full max-w-md">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for events..." 
                className="w-full py-3 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="absolute right-0 top-0 h-full px-6 text-white bg-purple-600 hover:bg-purple-700 rounded-full flex items-center">
                <Search size={20}/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        {loading ? (
          <p>Loading events...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isLiked={!!likedEvents[event.id]}
                onToggleLike={() => handleToggleLike(event.id)}
                onShare={handleShare}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
