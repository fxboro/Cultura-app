import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Cultura</h3>
            <p className="text-gray-400 pr-4">Discover and book tickets for cultural events near you.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cultura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;