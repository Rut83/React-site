import React from 'react'
import './Body.css'

const Home = () => {
  return (
        <>
        <div className="Home-main">
            <div className="Home-left">
                <img className='image' src="https://askbill.co.uk/wp-content/uploads/DALLEcopy-1600x840-1.jpg" alt="Can't Load" width={600} />
            </div>
            <div className="Home-right">
                <h1 className='Home-h1'>I am Rut Rupala</h1>
                <p className='Home-p'>I live in morbi. <br /> I am a web Developer. <br /> I am a React Developer. <br /> This is my first react site. </p>
            </div>
        </div>
        </>
  )
}

export default Home