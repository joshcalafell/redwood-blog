import React, { useState } from 'react'
import './Toggle.css' // Import your CSS file for styling

function Toggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="container">
      <button
        onClick={handleToggle}
        className={`toggle-button button ${isLoggedIn ? 'active' : ''}`}
      >
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  )
}

export default Toggle
