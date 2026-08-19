import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import {useLocation, useNavigate, } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [isMedium, setIsMedium] = useState(window.matchMedia("(min-width: 768px)").matches)
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = useCallback((sectionId) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    } else {
      navigate(`/#${sectionId}`);
    }
  }, [location.pathname, navigate])
  
  useEffect(() => {
    const screen = window.matchMedia("(min-width: 768px)");

    const handleChange = (e) => {
      setIsMedium(e.matches)
      if (e.matches) {
        setOpenMenu(false)
      }
    }

    screen.addEventListener('change', handleChange)
    
    return () => {
      screen.removeEventListener('change', handleChange)
    }
  }, [])

  const value = useMemo(() => ({
    isMedium,
    openMenu, setOpenMenu,
    scrollToSection,
  }), [openMenu, scrollToSection, isMedium])
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}