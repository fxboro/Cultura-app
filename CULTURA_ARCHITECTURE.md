# Cultura App: Software Architecture & Project Blueprint

This document outlines the software architecture, technical stack, and project structure for the Cultura app. It will serve as the guiding blueprint for development.

### **1. Project Overview & Vision**

Cultura will be a premier online destination for discovering and experiencing cultural events. It will connect event-goers with a diverse range of activities, from local meet-ups to international concerts, while providing organizers with a powerful platform to manage and promote their events. The app will be defined by its modern, intuitive design, catchy copy, and seamless user experience, from discovery to payment.

### **2. Core & "Nice-to-Have" Features**

**Core Features:**
*   Event listing, search, and filtering (by location, category).
*   Free and paid event registration.
*   User and Organizer account creation and management.
*   Event sharing capabilities.
*   Dedicated "A Summer Camp 2026" homepage.
*   Reservation and payment system using Stripe.

**"Nice-to-Have" Features:**
*   **User Reviews & Ratings:** Build social proof and help users make informed decisions.
*   **"My Favorites" Wishlist:** Increase user engagement and return visits.
*   **iCal/.ics Integration:** Allow users to easily add events to their personal calendars.
*   **Interactive Event Maps:** Enhance the user experience for larger, multi-venue events.
*   **AI-Powered Recommendations:** Suggest events based on user activity and preferences.

### **3. Software Architecture & Tech Stack**

A modern, decoupled architecture will be used for simplicity, maintainability, and scalability.

*   **Frontend:**
    *   **Framework:** **React (with Vite)** - For a fast, component-based UI.
    *   **Styling:** **Tailwind CSS** - For a utility-first, highly customizable design system.
    *   **Component Library:** **Shadcn/ui** - A collection of accessible, unstyled components that we can own and customize.
    *   **Routing:** **React Router DOM** - For client-side navigation.
    *   **Typography:** Belfast Grotesk (headers) & Averta (body text).
    *   **Color Palette:**
        *   Primary: `#358597` (Cool Teal), `#EA7963` (Warm Coral)
        *   Text: `#626262` (Dark Gray), `#8A8A8A` (Medium Gray), `#C0C0C0` (Light Gray)

*   **Backend (Backend-as-a-Service):**
    *   **Platform:** **Firebase** - A scalable, serverless backend.
    *   **Database:** **Cloud Firestore** - A flexible NoSQL database for users, events, and reservations.
    *   **Authentication:** **Firebase Authentication** - For secure user and organizer account management.
    *   **Storage:** **Cloud Storage for Firebase** - For hosting event images and media.
    *   **Serverless Logic:** **Firebase Functions** - For secure server-side operations like Stripe integration.

*   **Payment Gateway:**
    *   **Service:** **Stripe** - For secure and reliable payment processing.

### **4. Detailed Project & Code Structure**

```
/
├── public/                 # Static assets (favicon, fonts, etc.)
├── functions/              # Backend serverless functions (e.g., for Stripe)
│   ├── index.js
│   └── package.json
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Base components from shadcn/ui (Button, Card, etc.)
│   │   ├── layout/         # Main layout: Navbar, Footer, Sidebars
│   │   ├── events/         # Event-specific: EventCard, EventList, SearchBar
│   │   ├── home/           # Homepage sections: Hero, FeaturedEvents
│   │   └── core/           # Shared components: Logo, UserAvatar
│   │
│   ├── pages/              # Top-level page components for each route
│   │   ├── Home.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetail.jsx
│   │   ├── SummerCamp2026.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── OrganizerDashboard.jsx
│   │   └── Checkout.jsx
│   │
│   ├── lib/                # Libraries, helpers, and SDK configurations
│   │   ├── firebase.js     # Firebase initialization and config
│   │   ├── stripe.js       # Stripe helper functions
│   │   └── utils.js        # Utility functions (e.g., date formatting)
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useAuth.js      # Hook for authentication state
│   │   └── useEvents.js    # Hook for fetching/managing event data
│   │
│   ├── styles/             # Global styles and assets
│   │   └── global.css      # Main CSS file, includes Tailwind imports
│   │
│   ├── App.jsx             # Main app component with routing
│   └── main.jsx            # Application entry point
│
├── .gitignore
├── index.html
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration for Tailwind
├── vite.config.js          # Vite build tool configuration
└── package.json
```

### **5. Website Copy & Tone**

The brand voice will be **"vibrant, inviting, and effortlessly cool."** Copy will be catchy, clear, and conversion-focused, designed to draw users in and guide them seamlessly from discovery to booking.
