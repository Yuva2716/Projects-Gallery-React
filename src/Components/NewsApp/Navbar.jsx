import './Navbar.css'
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";

const Navbar = ( {setCategory} ) => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <h1 className="navbar-brand"><Link className="fw-bold fs-2 text-light" to={'/Home'}><MdHome /></Link></h1>
    <div className="container-fluid">    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <div className="nav-link text-light fw-bold" onClick={()=>setCategory('Technology')} >Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-light fw-bold" onClick={()=>setCategory('Business')}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-light fw-bold" onClick={()=>setCategory('Health')}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-light fw-bold" onClick={()=>setCategory('Sports')}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link text-light fw-bold" onClick={()=>setCategory('Entertainment')}>Entertainment</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>    
    </>
  )
}

export default Navbar