import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    id: 1,
    name: 'Jazz Night',
    date: '2024-08-15',
    category: 'Music',
    venue: 'The Blue Note',
    price: '25',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inventory: 100,
  },
  {
    id: 2,
    name: 'Art Exhibition: The Modernists',
    date: '2024-09-01',
    category: 'Art',
    venue: 'City Art Gallery',
    price: '15',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed711b931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inventory: 50,
  },
  {
    id: 3,
    name: "Shakespeare in the Park: A Midsummer Night's Dream",
    date: '2024-08-20',
    category: 'Theater',
    venue: 'Central Park',
    price: '0',
    image: 'https://images.unsplash.com/photo-1569863451093-47f3933e3895?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    inventory: 200,
  },
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
