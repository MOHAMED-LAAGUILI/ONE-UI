/* eslint-disable no-undef */
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import QuantumSpinner from "./Components/Spinner/QuantumSpinner.jsx";
import { ClerkProvider } from '@clerk/clerk-react';

// Lazy load the App component
const App = React.lazy(() => import("./App.jsx"));

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key');
  
}

createRoot(document.getElementById("root")).render(
  <>
    <Suspense
      fallback={
        <div className="flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <QuantumSpinner />
        </div>
      }
    >
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
    </Suspense>
  </>
);
