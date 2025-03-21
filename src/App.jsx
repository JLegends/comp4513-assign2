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

  if (!loggedIn) return <LogInView handler={handleLogin} /> // should be (!loggedIn) but use (false) is its getting in the way
  // add the title and credits for the picture here at some point
  else {
      return (
            <article className="bg-red h-screen flex flex-col w-full"> {/* clean up Background color EVENTUALLY */}
                <Header/>
                <div className="flex flex-grow">
                    <div className="flex items-center justify-center bg-[#E1E2E0] w-1/5 -mt-24 pb-auto">
                        <h2 className=""> List of Galleries </h2>
                    </div>
                    <div className="flex justify-between bg-red-500 w-4/5 p-2">
                        <div className="flex bg-white items-center justify-center w-3/5 rounded-xl m-2">
                            <h2 className=""> Gallery Info </h2>
                        </div>
                        <div className="flex bg-white items-center justify-center w-3/5 rounded-xl m-2">
                            <h2 className=""> Gallery Painting </h2>
                        </div>
                    </div>
                </div>
                {/* <button className="p-3 bg-secondary text-blue-600 rounded-xl" onClick={popUpHandler}>
                    Painting Popup Testing
                </button>
                <PaintingPopup ref={dialogRef}/> */}
            </article>
        )
    }
}

export default App
