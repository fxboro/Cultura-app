import React from 'react';

const MyTickets = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Tickets</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p>This is where the user's booked tickets will be displayed. Each ticket could be a component with details about the event, date, and a QR code for entry.</p>
      </div>
    </div>
  );
};

export default MyTickets;
