
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const events = [
  {
    title: "Community Potluck",
    date: "2024-08-15",
    time: "18:00",
    location: "Central Park",
    image: "https://images.unsplash.com/photo-1579224328484-7b5379a52865?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Join us for a community potluck in Central Park. Bring a dish to share and get to know your neighbors. There will be live music, games, and fun for the whole family.",
    organizer: "City of New York",
    category: "Community",
    attendees: [],
  },
  {
    title: "Summer Music Festival",
    date: "2024-08-20",
    time: "14:00",
    location: "Randall's Island Park",
    image: "https://images.unsplash.com/photo-1504746324qoA-Go-stock-photography-500x500.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The annual Summer Music Festival is back! Featuring a lineup of top artists from around the world, this is an event you won't want to miss. Get your tickets now!",
    organizer: "Live Nation",
    category: "Music",
    attendees: [],
  },
  {
    title: "Artisan Market",
    date: "2024-09-01",
    time: "10:00",
    location: "Brooklyn Flea",
    image: "https://images.unsplash.com/photo-1596710421715-13a5894f7b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Discover unique handmade goods from local artisans at our monthly market. From jewelry to home decor, you'll find something special for yourself or a loved one.",
    organizer: "Brooklyn Flea",
    category: "Shopping",
    attendees: [],
  },
  {
    title: "Outdoor Movie Night: The Goonies",
    date: "2024-09-07",
    time: "20:00",
    location: "Prospect Park",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Hey you guuuys! Join us for a free screening of the classic 80s movie, The Goonies. Bring a blanket, some snacks, and get ready for an adventure.",
    organizer: "Prospect Park Alliance",
    category: "Film",
    attendees: [],
  },
];

export const seedDatabase = async () => {
  try {
    for (const event of events) {
      await addDoc(collection(db, "events"), event);
    }
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};
