import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import './i18n'; // Initialize i18n

import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/ScrollToTop.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <React.Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-white text-rosental-500">Loading...</div>}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </React.Suspense>
    </HelmetProvider>
  </React.StrictMode>,
)
