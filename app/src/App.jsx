import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import BlogPage from './pages/BlogPage/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage/BlogPostPage.jsx';
import AboutUs from './pages/AboutUsPage/AboutUs.jsx';
import Contact from './pages/Contact/Contact.jsx';
function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/blog' element={<BlogPage/>}></Route>
        <Route path='/post/:id' element={<BlogPostPage/>}></Route>
        <Route path='/aboutUs' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
    </>
  )
}

export default App
