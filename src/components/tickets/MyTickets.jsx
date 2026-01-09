import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../lib/firebase';

const MyTickets = () => {
  const { user } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      if (user) {
        try {
          const ticketsCollection = collection(db, "tickets");
          const q = query(ticketsCollection, where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const ticketsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setTickets(ticketsList);
        } catch (error) {
          console.error("Error fetching tickets: ", error);
        }
      }
      setLoading(false);
    };

    fetchTickets();
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Tickets</h1>
      {loading ? (
        <div className="text-center">
          <p>Loading your tickets...</p>
        </div>
      ) : tickets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-2 text-purple-800">{ticket.eventName}</h2>
              <p className="text-gray-600 mb-2"><strong>Date:</strong> {ticket.eventDate}</p>
              <div className="flex justify-between items-center mt-4 border-t pt-4">
                <span className="text-sm text-gray-500">Booked on: {ticket.purchaseDate ? new Date(ticket.purchaseDate.seconds * 1000).toLocaleDateString() : 'Just now'}</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold uppercase">{ticket.status}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg">You don't have any tickets yet. Browse our events and book your next experience!</p>
        </div>
      )}
    </div>
  );
};

export default MyTickets;
