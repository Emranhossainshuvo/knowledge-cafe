import './App.css'
import Blog from './components/Blog/Blog'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmark/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs></Blogs>
      <Blog></Blog>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
