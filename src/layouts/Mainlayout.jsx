import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  )
}
