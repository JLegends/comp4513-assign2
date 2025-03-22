import { useState, useRef, useEffect } from 'react'
import './App.css'
import LogInView from './components/LogInView.jsx'
import GalleryView from './components/GalleryView.jsx'
import { DataProvider } from './components/DataContext.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (which) => { setLoggedIn(which) }
  const dialogRef = useRef(null);

  const popUpHandler = () => {
      if (dialogRef.current) {
          dialogRef.current.showModal();  
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
            <GalleryView/>
        </DataProvider>
      )
  }
}

export default App
