# SmartQueue

SmartQueue is a queue-management web application for bank branches. It helps customers find a convenient branch, join a service queue remotely, and track their position, while giving branch staff tools to manage counters and serve customers efficiently.

Developed by BT3103 Group 18.

## What it demonstrates

- Customer and staff authentication with Firebase Authentication
- Real-time queue data and profiles stored in Cloud Firestore
- Branch search with location-aware Google Maps integration
- Remote queue joining, ticket tracking, leave-queue, no-show, and serving flows
- Staff setup, counter management, call-next workflows, and queue statistics
- Analytics views for branch and service performance
- Email notifications through a server-side SendGrid API handler
- Responsive Vue 3 interface with reusable components and Pinia state management

## Technology

Vue 3 · Vite · Vue Router · Pinia · Firebase Authentication · Cloud Firestore · Google Maps JavaScript and Geocoding APIs · Chart.js · SendGrid

## Getting started

### Prerequisites

- Node.js 20.19+ (or 22.12+)
- A Firebase project with Email/Password authentication and Cloud Firestore enabled
- A Google Maps API key with the Maps JavaScript API and Geocoding API enabled

The application runs on a Firebase backend, so a Firebase project of your own is required. Without valid Firebase values, the page will not render.

### Install and run

The application lives in the `SmartQueue` folder.

```bash
git clone https://github.com/Fdiannz/SmartQueue-public.git
cd SmartQueue-public/SmartQueue
npm install
cp .env.example .env
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead.

Fill in the values in `.env` (see below), then start the development server:

```bash
npm run dev
```

Create a production build with:

```bash
npm run build
```

The optional seed script creates sample service-statistics documents in Firestore. Its Firebase configuration is defined inside `seed.js`, so replace the placeholder values with your own and make sure your Firestore rules are configured before running it:

```bash
node seed.js
```

## Environment variables

The repository includes `.env.example` as a template, and the real `.env` file is intentionally ignored by Git. Firebase values can be found in the Firebase Console under Project settings > Your apps > Web app.

| Variable | Description |
| --- | --- |
| `VITE_FIREBASE_API_KEY` | Firebase web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase authentication domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps key for the map script and geocoding |
| `VITE_EMAIL_API_URL` | URL of a deployed instance of `api/sendCallNextEmail.js` |
| `SENDGRID_API_KEY` | Server-side only; set where the email API is deployed |
| `FROM_EMAIL` | Server-side only; verified sender address in SendGrid |


## Project structure

```
SmartQueue/
  src/
    components/   Reusable customer, staff, analytics, and layout components
    services/     Firebase, queue, authentication, and email service logic
    stores/       Pinia application state
    views/        Route-level pages
  api/            Server-side email notification handler
  public/         Static public assets
  seed.js         Firestore sample-data seeding script
  .env.example    Template for your own .env
```

## Notes

This repository contains the application source and setup documentation. Credentials, deployment-specific configuration, generated build output, and local editor files are excluded from version control. Firebase and Google Maps keys should be restricted in their respective consoles.
