import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/Mainlayout'
import Home from './pages/home/Home'


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
