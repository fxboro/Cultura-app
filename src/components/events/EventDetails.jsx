import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../lib/firebase';
import { useAuth } from '../../hooks/useAuth';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [message, setMessage] = useState(null);

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

  const handleBookTicket = async () => {
    if (!user) {
        navigate('/login'); // Assuming you have a login route, or handle auth request
        return;
    }

    setBookingLoading(true);
    setMessage(null);

    try {
        await addDoc(collection(db, "tickets"), {
            eventId: event.id,
            eventName: event.name, // Denormalize for easier display
            eventDate: event.date, // Denormalize
            userId: user.uid,
            purchaseDate: serverTimestamp(),
            status: 'valid'
        });
        setMessage({ type: 'success', text: 'Ticket booked successfully! Check "My Tickets".' });
    } catch (error) {
        console.error("Error booking ticket: ", error);
        setMessage({ type: 'error', text: 'Failed to book ticket. Please try again.' });
    } finally {
        setBookingLoading(false);
    }
  };

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
          
          {message && (
             <div className={`p-4 mb-4 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                 {message.text}
             </div>
          )}

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-purple-700">Price: ${event.price}</p>
            <button 
                onClick={handleBookTicket} 
                disabled={bookingLoading}
                className={`px-6 py-3 rounded-lg font-bold text-white transition-colors duration-300 ${bookingLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-700 hover:bg-purple-800'}`}
            >
                {bookingLoading ? 'Booking...' : 'Book Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
