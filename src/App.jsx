import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogInView from './components/LogInView.jsx'
import Header from './components/Header.jsx'
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

  if(false) return <LogInView handler={handleLogin} /> // should be (!loggedIn) but use (false) is its getting in the way
  // add the title and credits for the picture here at some point
  else {
      return (
        <DataProvider>
            <article className="bg-secondary h-screen flex flex-col"> {/* clean up Background color EVENTUALLY */}
                <Header/>
                <div className="flex flex-grow p-3 ">
                    <div className="flex items-center justify-center bg-primary h-full w-1/5 rounded-xl">
                        <h2 className=""> List of Galleries </h2>
                    </div>
                    <div className="flex items-center justify-center bg-primary h-full w-2/5 rounded-xl mx-3">
                        <h2 className=""> Gallery Info </h2>
                    </div>
                    <div className="flex items-center justify-center bg-primary h-full w-2/5 rounded-xl">
                        <h2 className=""> Gallery Painting </h2>
                    </div>
                </div>
                {/* <button className="p-3 bg-secondary text-blue-600 rounded-xl" onClick={popUpHandler}>
                    Painting Popup Testing
                </button>
                <PaintingPopup ref={dialogRef}/> */}
            </article>
        </DataProvider>
      )
  }
}

export default App
