import Header from 'src/components/Header/Header'

import './BlogLayout.css'

const BlogLayout = ({ children }) => {
  return (
    <div className="mb-10  pb-8">
      <Header />
      <main className="p-4 pt-8"> {children}</main>
    </div>
  )
}

export default BlogLayout
