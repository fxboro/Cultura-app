import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../lib/firebase';

const Profile = () => {
  const { user, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      await updateProfile(user, { displayName });

      // Also update/create user document in Firestore for consistency
      await setDoc(doc(db, "users", user.uid), {
        displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastUpdated: new Date()
      }, { merge: true });

      setIsEditing(false);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      console.error("Error updating profile: ", error);
      setMessage({ type: 'error', text: 'Failed to update profile.' });
    } finally {
      setSaving(false);
    }
  };

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

          {message && (
            <div className={`p-4 mb-4 rounded w-full text-center ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message.text}
            </div>
          )}

          {isEditing ? (
            <div className="w-full mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">{user.displayName}</h2>
              <p className="text-gray-600 mb-4">{user.email}</p>
            </>
          )}

          {isEditing ? (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={() => { setIsEditing(false); setDisplayName(user.displayName); }}
                className="bg-gray-400 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-500 transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => { setIsEditing(true); setDisplayName(user.displayName); }}
              className="bg-purple-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-800 transition-colors duration-300"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
