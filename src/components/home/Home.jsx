import { Search } from "lucide-react";

const Home = () => {
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

      {/* Placeholder for Upcoming Events */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder cards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop" alt="Event" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Indie Music Festival</h3>
              <p className="text-gray-600 mb-4">Sat, Aug 10, 7:00 PM</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">View Details</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop" alt="Event" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Summer Art Fair</h3>
              <p className="text-gray-600 mb-4">Sun, Aug 11, 10:00 AM</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">View Details</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop" alt="Event" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Rockstar Live</h3>
              <p className="text-gray-600 mb-4">Mon, Aug 12, 8:00 PM</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;