import { useState, useRef, useEffect } from 'react'
import './App.css'
import LogInView from './components/LogInView.jsx'
import GalleryView from './components/GalleryView.jsx'
import { DataProvider } from './components/DataContext.jsx'
import { Routes, Route } from 'react-router'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (which) => { setLoggedIn(which) }
  const dialogRef = useRef(null);

  const popUpHandler = () => {
      if (dialogRef.current) {
          dialogRef.current.showModal();  
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
          <Routes>
            <Route path="/galleries" element={<GalleryView/>}/>
            <Route path="/paintings" element={<h1>painting view</h1>}/>
            <Route path="/artists" element={<h1>artist view</h1>}/>
            <Route path="/genres" element={<h1>genre view</h1>}/>
          </Routes>
        </DataProvider>
      )
  }
}

export default App
