import { navigate, routes } from '@redwoodjs/router'
// Import your CSS file for styling

function Toggle({ isLoggedIn, toggleLogin }) {
  const handleToggle = () => {
    if (isLoggedIn) {
      navigate(routes.home())
    }
    toggleLogin(!isLoggedIn)
  }

  return (
    <div className="align-center container flex justify-end">
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
