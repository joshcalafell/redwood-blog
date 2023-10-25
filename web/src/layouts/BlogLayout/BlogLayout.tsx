import { Link, routes } from '@redwoodjs/router'

import './BlogLayout.css'
import Toggle from 'src/components/Toggle/Toggle'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
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
              <li>
                <Link to={routes.posts()}>Admin</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Toggle />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default BlogLayout
