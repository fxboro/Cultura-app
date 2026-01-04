import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Ticket, User, LogIn, LogOut } from "lucide-react";
import { auth, provider, signInWithPopup } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold text-purple-700 tracking-wider">
            Cultura
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/events" className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              Events
            </Link>
            {user && (
              <>
                <Link to="/tickets" className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
                  <Ticket className="w-5 h-5 mr-2" />
                  My Tickets
                </Link>
                <Link to="/profile" className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </Link>
              </>
            )}
          </nav>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                <button onClick={handleSignOut} className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
                  <LogOut className="w-5 h-5 mr-2" />
                  Sign Out
                </button>
              </div>
            ) : (
              <button onClick={handleSignIn} className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
                <LogIn className="w-5 h-5 mr-2" />
                Login with Google
              </button>
            )}
            <button className="md:hidden text-gray-600 hover:text-purple-700 ml-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
