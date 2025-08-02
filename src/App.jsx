import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/Mainlayout'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import ServicesList from './pages/services/ServicesList'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'





function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<ServicesList />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
