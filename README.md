# PropBot

PropBot is a modern, responsive real estate web application designed to help users find, buy, and rent properties with ease. It features a clean user interface, user authentication, property listings, and a smart search functionality. The project is built with React, Vite, and Tailwind CSS, and uses Firebase for user authentication.

## Features

*   **User Authentication**: Secure sign-up, login, and logout functionality powered by Firebase Authentication.
*   **Property Listings**: Browse a comprehensive list of properties fetched from a mock API.
*   **Detailed Property Views**: View detailed information for each property, including price, location, number of bedrooms/bathrooms, and area.
*   **Smart Search**: An intuitive search bar on the hero section to filter properties by location and type (for sale/rent).
*   **Responsive Design**: A mobile-first design that looks great on all devices, from desktops to smartphones.
*   **Static Pages**: Includes "About Us" and "Contact Us" pages.
*   **Modern UI/UX**: Built with Tailwind CSS and custom UI components for a clean and modern user experience.
*   **Client-Side Routing**: Seamless navigation between pages using React Router.

## Tech Stack

*   **Frontend**: [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: Custom components, [lucide-react](https://lucide.dev/guide/packages/lucide-react) for icons
*   **Routing**: [React Router](https://reactrouter.com/)
*   **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth)
*   **State Management**: React Context API
*   **API**: Property data is fetched from a [MockAPI](https://mockapi.io/) endpoint.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (version 18 or later) and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/prashant059/propbot.git
    cd propbot
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the project's root directory. Create the file if it doesn't exist.

```env
VITE_FIREBASE_API_KEY="your_firebase_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_firebase_auth_domain"
VITE_FIREBASE_PROJECT_ID="your_firebase_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_firebase_messaging_sender_id"
VITE_FIREBASE_APP_ID="your_firebase_app_id"
```

You can obtain these keys by creating a new project on the [Firebase Console](https://console.firebase.google.com/).

### Running the Application

Once the dependencies are installed and the environment variables are set, you can run the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the project files using ESLint.
*   `npm run preview`: Serves the production build locally to preview it.

## Deployment

This project is configured for deployment using Firebase Hosting. The `firebase.json` file specifies that the `dist` directory (the output of `npm run build`) should be deployed. Any request to a non-existent file will be rewritten to `/index.html` to support client-side routing.
