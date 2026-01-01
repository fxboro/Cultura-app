import React from 'react';
import { useParams } from 'react-router-dom';

const events = [
    {
        id: 1,
        title: 'Jazz Night',
        date: '2024-08-15',
        location: 'The Blue Note',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'An evening of smooth jazz with some of the best musicians in town. Come and enjoy the music, the food, and the atmosphere.',
        organizer: 'The Blue Note',
        price: '25',
    },
    {
        id: 2,
        title: 'Art Exhibition: The Modernists',
        date: '2024-09-01',
        location: 'City Art Gallery',
        image: 'https://images.unsplash.com/photo-1547891654-e66ed711b931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'A journey through the works of the most influential artists of the 20th century. The exhibition features paintings, sculptures, and installations from a variety of artists.',
        organizer: 'City Art Gallery',
        price: '15',
    },
    {
        id: 3,
        title: "Shakespeare in the Park: A Midsummer Night's Dream",
        date: '2024-08-20',
        location: 'Central Park',
        image: 'https://images.unsplash.com/photo-1569863451093-47f3933e3895?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "One of Shakespeare's most beloved comedies, performed in the beautiful surroundings of Central Park. A magical evening for the whole family.",
        organizer: 'The Royal Shakespeare Company',
        price: 'Free',
    },
];

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-96 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <p className="mr-4"><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
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
