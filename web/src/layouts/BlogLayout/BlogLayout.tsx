import React, { useState } from 'react'

import { Link } from '@redwoodjs/router'
import { routes } from '@redwoodjs/router'

import Toggle from 'src/components/Toggle/Toggle'
import './BlogLayout.css'

const BlogLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = (value) => {
    setIsLoggedIn(value)
  }

  return (
    <div className="layout--blog-container">
      <header>
        <div className="header--blog">
          <h1>
            <Link to={routes.home()}>REDWOOD BLOG</Link>
          </h1>

          <nav>
            <ul>
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
              <li>
                <Link to={routes.contact()}>Contact</Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link to={routes.posts()}>Admin</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <Toggle isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default BlogLayout
