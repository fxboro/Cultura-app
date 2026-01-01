import { Link } from "react-router-dom";
import { Calendar, Ticket, User } from "lucide-react";

const Header = () => {
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
            <Link to="/tickets" className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
              <Ticket className="w-5 h-5 mr-2" />
              My Tickets
            </Link>
            <Link to="/profile" className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-300">
              <User className="w-5 h-5 mr-2" />
              Profile
            </Link>
          </nav>
          <button className="md:hidden text-gray-600 hover:text-purple-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;