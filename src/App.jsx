import { useState, useRef, useEffect } from 'react'
import './App.css'
import LogInView from './components/LogInView.jsx'
import GalleryView from './components/GalleryView.jsx'
import ArtistView from './components/ArtistView.jsx'
import PaintingView from './components/PaintingView.jsx'
import GenreView from './components/GenreView.jsx'
import AboutView from './components/AboutView.jsx'
import PaintingPopup from "./components/PaintingPopup.jsx"

import { DataProvider } from './components/DataContext.jsx'
import { Navigate, Routes, Route } from 'react-router'
import { FavoritesProvider } from './components/FavoritesContext.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => { // This alongside handleLogin makes it so once a "login" is performed it persists for at least 30 minutes
    const storedLogin = JSON.parse(localStorage.getItem('loginState'));
    if (storedLogin && storedLogin.isLoggedIn) {
      const loginTime = new Date(storedLogin.timestamp);
      const currentTime = new Date();
      const timeDiff = (currentTime - loginTime) / (1000 * 60); // the difference of time in mins
      if (timeDiff < 30) { // 30 minutes
        setLoggedIn(true);
      } else {
        localStorage.removeItem('loginState');
      }
    }
  }, []);

  const handleLogin = (which) => {
    if (which) {
      // stores login state with login timestamp
      const loginData = {
        isLoggedIn: true,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('loginState', JSON.stringify(loginData));
      setLoggedIn(true);
    }
  };

  const dialogRef = useRef(null);
  const [selectedPainting, setSelectedPainting] = useState(null);

  function toggleDialog(painting) {
      if (!dialogRef.current) {
          return
      }
      if (dialogRef.current.hasAttribute("open")) {
          dialogRef.current.close()
          setSelectedPainting(null);
      }
      else {
          dialogRef.current.showModal();
          setSelectedPainting(painting);
      }
  }

  if (!loggedIn){ // should be (!loggedIn) but use (false) is its getting in the way
    return(
    <DataProvider>
      <LogInView handler={handleLogin} />
    </DataProvider>)
  }   
  // add the title and credits for the picture here at some point
  else {
      return (
        <DataProvider>
          <FavoritesProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/galleries" replace />} />
              <Route 
                path="/galleries" 
                element={<GalleryView toggleDialog={toggleDialog}/>}/>
              <Route 
                path="/paintings" 
                element={<PaintingView toggleDialog={toggleDialog}/>}/>
              <Route 
                path="/artists" 
                element={<ArtistView toggleDialog={toggleDialog}/>}/>
              <Route 
                path="/genres" 
                element={<GenreView toggleDialog={toggleDialog}/>}/>
              <Route 
                path="/about" 
                element={<AboutView toggleDialog={toggleDialog}/>}/>
            </Routes>
            <PaintingPopup toggleDialog={toggleDialog} ref={dialogRef} painting={selectedPainting}/>
          </FavoritesProvider>
        </DataProvider>
        
      )
  }
}

export default App
