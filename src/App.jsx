import About from "./component/About/About"
import Home from "./component/Body/Home"
import Navbar from "./component/Navbar/Navbar"
import Footer from "./component/footer/Footer"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/react-site" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/react-site/about" element={<About/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
