import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import thumnImage from '../assets/Newsapp.jpg'
import thumnImage1 from '../assets/Weather.jpg'
import thumnImage2 from '../assets/Todo.png'
import auth from '../../Config'
import { signOut } from 'firebase/auth'
import { MdLogout } from "react-icons/md";
import './LandingPage.css'

const LandingPage = () => {
  const navigate =  useNavigate();

  const handleLogout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/'); // Redirect to login page
    }).catch((error) => {
      // An error happened.
      console.error("Error signing out: ", error);
    });
  }
  return (
    <>
         <nav className='navbar navbar-expand-lg navbar-dark'> 
          <h3 className='landing-title'>React Projects Gallery</h3>
          <button className='btn text-light fs-5 lgo-btn' onClick={handleLogout} ><MdLogout /></button>
        </nav>
        <div className="project-cards">
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{maxWidth:"345px"}}>
            <img src={thumnImage2} style={{height:"200px",width:"343px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Todo-List App</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p  className="btn btn-primary"><Link className='text-light project-btn' to={'/TodoApp'}>View Project</Link></p>
          </div>
      </div>
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{maxWidth:"345px"}}>
            <img src={thumnImage} style={{height:"200px",width:"343px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">NEWS App</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="btn btn-primary"><Link className='text-light project-btn' to={'/NewsApp'}>View Project</Link></p>
          </div>
      </div>
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{maxWidth:"345px"}}>
            <img src={thumnImage1} style={{height:"200px",width:"343px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">Weather App</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p  className="btn btn-primary"><Link className='text-light project-btn' to={'/WeatherApp'}>View Project</Link></p>
          </div>
      </div>      
        </div>
      
    </>

    
  )
}

export default LandingPage