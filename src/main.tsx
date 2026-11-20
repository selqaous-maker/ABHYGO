import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { getInitialLanguage, LanguageProvider } from './context/LanguageContext.tsx';
import './index.css';

const initialLanguage = getInitialLanguage();
document.documentElement.lang = initialLanguage;
document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
