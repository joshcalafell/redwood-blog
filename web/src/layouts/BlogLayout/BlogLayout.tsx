import Header from 'src/components/Header/Header'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-2 pt-4"> {children}</main>
    </>
  )
}

export default BlogLayout
