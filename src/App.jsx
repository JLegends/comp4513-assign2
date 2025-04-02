import { useState, useRef, useEffect } from 'react'
import './App.css'
import LogInView from './components/LogInView.jsx'
import GalleryView from './components/GalleryView.jsx'
import ArtistView from './components/ArtistView.jsx'
import PaintingView from './components/PaintingView.jsx'
import GenreView from './components/GenreView.jsx'
import PaintingPopup from "./components/PaintingPopup.jsx"

import { DataProvider } from './components/DataContext.jsx'
import { Navigate, Routes, Route } from 'react-router'
import { FavoritesProvider } from './components/FavoritesContext.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (which) => { setLoggedIn(which) }

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

  if (false){ // should be (!loggedIn) but use (false) is its getting in the way
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
                element={<GenreView/>}/>
            </Routes>
            <PaintingPopup toggleDialog={toggleDialog} ref={dialogRef} painting={selectedPainting}/>
          </FavoritesProvider>
        </DataProvider>
        
      )
  }
}

export default App
