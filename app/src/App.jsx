import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage.jsx';
import BlogPage from './pages/BlogPage/BlogPage.jsx';
function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/blog' element={<BlogPage/>}></Route>
     </Routes>
    </>
  )
}

export default App
