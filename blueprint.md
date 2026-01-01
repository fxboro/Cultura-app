# Cultura - Blueprint

## Overview

Cultura is a modern and beautiful web application designed to help users discover and book tickets for cultural events. The application provides a seamless and intuitive user experience, with a focus on a clean, visually balanced design and mobile responsiveness.

## Design & Style

- **Aesthetics**: The application follows a modern design language, incorporating a vibrant color palette, expressive typography, and high-quality imagery.
- **Layout**: The layout is clean and well-spaced, with a focus on readability and intuitive navigation.
- **Styling**: The application is styled using Tailwind CSS, a utility-first CSS framework that allows for rapid and consistent styling.
- **Iconography**: The application uses the `lucide-react` icon library for a sharp and modern feel.

## Features Implemented

- **Routing**: The application uses `react-router-dom` for client-side routing.
- **Layout**: A consistent layout is provided by the `App.jsx` component, which includes a `Header` and a `Footer`.
- **Header**: The `Header` component features the application's name and navigation links to the main sections of the app.
- **Footer**: The `Footer` component includes quick links, social media icons, and copyright information.
- **Home Page**: The landing page of the application, featuring a hero section with a search bar and a section for upcoming events.
- **Events Page**: A page that displays a list of all available events.
- **Event Details Page**: A page that displays the details of a single event.

## Current Plan: My Tickets and Profile Stubs

- **Create "My Tickets" and "Profile" Page Components:** Create new page components for "My Tickets" and "Profile".
- **Add Routes for the New Pages:** Add new routes to our application to make the "My Tickets" and "Profile" pages accessible.
- **Update the Header:** Ensure the links in the header for "My Tickets" and "Profile" are working correctly.

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
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
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── blueprint.md
```
