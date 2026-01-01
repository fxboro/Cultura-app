import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share2, Calendar, MapPin, Ticket, Edit3 } from 'lucide-react';

// Formatting utility (kept internal for simplicity, or move to src/lib/utils.js)
const formatEventDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
};

const EventCard = ({ 
  event, 
  role = 'visitor', // 'visitor' | 'organizer'
  isLiked, 
  onToggleLike, 
  onShare, 
}) => {
  const { id, name, date, category, venue, price, image, inventory } = event;
  const isSoldOut = inventory <= 0;
  
  // Date Logic
  const eventDate = new Date(date);
  const now = new Date();
  const isPast = eventDate < now;

  return (
    <Link to={`/events/${id}`} className={`group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full relative ${isPast ? 'opacity-80' : ''}`}>
      <div className="relative h-60 overflow-hidden">
        <img src={image} alt={name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isPast ? 'grayscale' : ''}`} />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-[#358597] tracking-widest shadow-sm">
            {category}
          </span>
          {isPast && <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Past Event</span>}
        </div>

        {/* Visitor Actions */}
        {role === 'visitor' && !isPast && (
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); onToggleLike(); }}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg ${isLiked ? 'bg-[#EA7963] text-white' : 'bg-white/80 text-[#626262] hover:bg-white'}`}
            >
              <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onShare(); }}
              className="p-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#626262] hover:bg-white transition-all shadow-lg"
            >
              <Share2 size={16} />
            </button>
          </div>
        )}

        {/* Organizer Stats Overlay */}
        {role === 'organizer' && (
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-[9px] font-bold text-gray-400 uppercase">Inventory</span>
            <span className={`text-lg font-bold ${inventory < 10 ? 'text-[#EA7963]' : 'text-[#358597]'}`}>{inventory}</span>
          </div>
        )}

        {/* Sold Out Overlay */}
        {isSoldOut && !isPast && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="px-6 py-2 bg-white text-[#626262] font-bold rounded-full text-xs uppercase tracking-widest shadow-xl">Sold Out</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-[#8A8A8A] flex items-center">
            <Calendar size={14} className="mr-1.5 text-[#358597]" /> {formatEventDate(date).split(',')[0]}
          </span>
          {role === 'visitor' && (
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${inventory < 10 ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`}></span>
              <span className="text-[10px] font-bold text-[#8A8A8A] uppercase">{inventory} Left</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-[#626262] leading-tight mb-2 group-hover:text-[#358597] transition-colors line-clamp-2">{name}</h3>
        <p className="text-xs text-[#8A8A8A] flex items-center mb-6 truncate"><MapPin size={14} className="mr-1.5 shrink-0" /> {venue}</p>

        {/* Dynamic Buttons based on Role/State */}
        {role === 'organizer' ? (
          <button className="mt-auto w-full py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#626262] font-bold text-xs flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
            <Edit3 size={14} /> Manage Event
          </button>
        ) : (
          <div 
            disabled={isSoldOut || isPast}
            className={`mt-auto w-full py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${isSoldOut || isPast ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-2 border-[#358597] text-[#358597] hover:bg-[#358597] hover:text-white shadow-sm hover:shadow-lg'}`}
          >
            {isPast ? 'Event Ended' : isSoldOut ? 'Event Full' : <><Ticket size={16} /> Get Tickets • ${price}</>}
          </div>
        )}
      </div>
    </Link>
  );
};

export default EventCard;