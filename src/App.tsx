import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HomePage } from './pages/HomePage';
import { StoryViewPage } from './pages/StoryViewPage';
import { ImageViewPage } from './pages/ImageViewPage';
import { AuthPage } from './pages/AuthPage';
import { PricingPage } from './pages/PricingPage';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

export function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story-view" element={<StoryViewPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/story/final" element={<ImageViewPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;