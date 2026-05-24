import { createContext, useContext, useState, useEffect, useRef } from "react";
import {useLocation, useNavigate, useParams} from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);
  const [isMedium, setIsMedium] = useState(window.matchMedia("(min-width: 768px)").matches)
  const [section, setSection] = useState('')

  const animateContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      }
    },
    show2: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    },
    show3: {
      transition: {
        staggerChildren: 0.1,
      }
    },
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    } else {
      navigate(`/#${sectionId}`);
    }

    setTimeout(() => {
      setSection('')
    }, 100)
  }
  
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

  useEffect(() => {
    scrollToSection(section)
  }, [section])

  const value = {
    openMenu, setOpenMenu,
    section, setSection,
    navigate,
    isMedium,
    animateContainer,
    scrollToSection,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}