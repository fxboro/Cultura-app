# Cultura - Blueprint

## Overview

Cultura is a modern and beautiful web application designed to help users discover and book tickets for cultural events. The application provides a seamless and intuitive user experience, with a focus on a clean, visually balanced design and mobile responsiveness. It is integrated with Firebase for data storage and user authentication.

## Design & Style

- **Aesthetics**: The application follows a modern design language, incorporating a vibrant color palette, expressive typography, and high-quality imagery.
- **Layout**: The layout is clean and well-spaced, with a focus on readability and intuitive navigation.
- **Styling**: The application is styled using Tailwind CSS, a utility-first CSS framework that allows for rapid and consistent styling.
- **Iconography**: The application uses the `lucide-react` icon library for a sharp and modern feel.

## Features Implemented

- **Firebase Integration**:
    - **Firestore**: Used as the database for storing and retrieving event data.
    - **Authentication**: Integrated Firebase Authentication to allow users to sign in with their Google accounts.
- **Routing**: The application uses `react-router-dom` for client-side routing.
- **Layout**: A consistent layout is provided by the `App.jsx` component, which includes a `Header` and a `Footer`.
- **Header**: The `Header` component features the application's name, navigation links, and a dynamic authentication section that shows a "Login with Google" button or the user's profile picture and a "Sign Out" button.
- **Footer**: The `Footer` component includes quick links, social media icons, and copyright information.
- **Home Page**: The landing page of the application, featuring a hero section and a section for upcoming events.
- **Events Page**: Displays a list of all available events fetched dynamically from Firestore, with a loading state.
- **Event Details Page**: Displays the details of a single event fetched dynamically from Firestore, with a loading state.
- **User Authentication**:
    - Users can sign in via a Google popup.
    - The user's authentication state is managed globally using a custom `useAuth` hook.
- **Protected Routes**: The "My Tickets" and "Profile" pages are protected, meaning they are only accessible to authenticated users.
- **Profile Page**: Displays the logged-in user's profile information (picture, name, email).
- **My Tickets Page**: A placeholder page that demonstrates fetching tickets associated with the logged-in user from Firestore, including loading and empty states.

## Next Steps

- **Ticket Booking**: Implement the functionality for users to book tickets for events.
- **Profile Editing**: Allow users to edit their profile information.
- **Real-time Updates**: Use Firestore's real-time capabilities to update event information automatically.
- **UI/UX Enhancements**: Further polish the user interface, add animations, and improve the overall user experience.
- **Search & Filtering**: Implement advanced search and filtering options for events.

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── core/
│   │   ├── events/
│   │   │   ├── EventCard.jsx
│   │   │   ├── EventDetails.jsx
│   │   │   └── Events.jsx
│   │   ├── home/
│   │   │   └── Home.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── profile/
│   │   │   └── Profile.jsx
│   │   └── tickets/
│   │       └── MyTickets.jsx
│   ├── hooks/
│   │   └── useAuth.js
│   ├── lib/
│   │   └── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .firebaserc
├── firebase.json
├── firestore.rules
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── blueprint.md
```
