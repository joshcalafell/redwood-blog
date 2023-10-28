// import { useState } from 'react'

import Header from 'src/components/Header/Header'

import './BlogLayout.css'

const BlogLayout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="p-4"> {children}</main>
    </div>
  )
}

export default BlogLayout
