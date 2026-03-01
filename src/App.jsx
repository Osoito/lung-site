import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Comics from './pages/Comics.jsx'
import Videos from './pages/Videos.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <HashRouter>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
