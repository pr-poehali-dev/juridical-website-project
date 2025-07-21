import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/source-sans-pro/400.css'
import '@fontsource/source-sans-pro/600.css'

createRoot(document.getElementById("root")!).render(<App />);