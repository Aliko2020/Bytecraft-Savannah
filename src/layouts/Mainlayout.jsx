import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <Navbar />
      
      <main className="">
        {children}
      </main>
      
      {/* <Footer /> */}
    </div>
  )
}
