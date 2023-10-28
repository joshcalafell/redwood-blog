// import { useState } from 'react'

import Header from 'src/components/Header/Header'

import './BlogLayout.css'

const BlogLayout = ({ children }) => {
  return (
    <div>
      <Header />

      {/*  <div className="layout--blog-container">
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
      </header> */}
      <main className="">{children}</main>
    </div>
  )
}

export default BlogLayout
