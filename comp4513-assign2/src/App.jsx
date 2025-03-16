import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogInView from './components/LogInView.jsx'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (which) => { setLoggedIn(which) }

  if (!loggedIn) return <LogInView handler={handleLogin} />
  else {
      return (
          <article>
              Hooray successful login
          </article>
      )
  }

}

export default App
