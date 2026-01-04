import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center"><p>Loading profile...</p></div>;
  }

  if (!user) {
    return <div className="text-center"><p>Please log in to view your profile.</p></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Profile</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
        <div className="flex flex-col items-center">
          <img src={user.photoURL} alt={user.displayName} className="w-32 h-32 rounded-full mb-4" />
          <h2 className="text-2xl font-bold mb-2">{user.displayName}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-800 transition-colors duration-300">
            Edit Profile
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">My Bookings</h3>
          {/* Placeholder for booked events */}
          <p className="text-gray-600">You have no booked events yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
