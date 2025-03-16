import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogInView from './components/LogInView.jsx'
import Header from './components/Header.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (which) => { setLoggedIn(which) }

  const dialogRef = useRef(null);

  const popUpHandler = () => {
      if (dialogRef.current) {
          dialogRef.current.showModal();  
      }
  }

  if (false) return <LogInView handler={handleLogin} /> // should be (!loggedIn) but use (false) is its getting in the way
  // add the title and credits for the picture here at some point
  else {
      return (
          <article className="bg-[#3324be] h-screen flex flex-col"> {/* clean up Background color EVENTUALLY */}
              <Header/>
              <div className="flex flex-grow p-4 ">
                  <div className="flex items-center justify-center bg-white h-full w-1/5 rounded-xl">
                      <h2 className=""> List of Galleries </h2>
                  </div>
                  <div className="flex items-center justify-center bg-white h-full w-2/5 rounded-xl ml-4 mr-4">
                      <h2 className=""> Gallery Info </h2>
                  </div>
                  <div className="flex items-center justify-center bg-white h-full w-2/5 rounded-xl">
                      <h2 className=""> Gallery Painting </h2>
                  </div>
              </div>
              {/* <button className="p-3 bg-white text-blue-600 rounded-xl" onClick={popUpHandler}>
                  Painting Popup Testing
              </button>
              <PaintingPopup ref={dialogRef}/> */}
          </article>
      )
  }
}

export default App
