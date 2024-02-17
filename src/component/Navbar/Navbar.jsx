import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="nav-main">
        <div className="nav-left">
            <h1 className='nav-name-left'>Rut Rupala</h1>
        </div>

        <div className="nav-right">
          <nav>
            <ul className="nav-ul-right">
                <Link to='/' className="nav-li">Home</Link>
                <Link to='/about' className="nav-li"> About</Link>
                <Link to='/contact' className="nav-li">Contact</Link>
                <Link to='/projects' className="nav-li">Project</Link>               
             
            </ul>
            </nav>
        </div>
    </nav>
    </>
  )
}

export default Navbar