import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { VscClose } from 'react-icons/vsc'
import { ImHome3 } from 'react-icons/im'
import './index.css'
const Header = () => {

  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
    <nav className={toggle?'navbar expanded':'navbar'}>
    <div className="header-1">
      <h2 className='logo'><ImHome3 className='ions' size={25}/>Elite Rentals</h2>
        <ul className= 'links'>
        <Link to="/" className="button-link">
          <li className="li-style">Home</li>
        </Link>
        <Link to="/about" className="button-link">
          <li className="li-style">About</li>
        </Link>
        <Link to="/contactUs" className="button-link">
          <li className="li-style">Contact</li>
        </Link>
        </ul>
    </div>

        <div className='toggle-icon' onClick={handleToggle}>
         {toggle?<VscClose size={28}/>:<FiMenu size={28}/>}
        </div>

        <div className="button_section">
            <button type="button" className="button_Login">Login</button>
            <button type="button" className="button">sing Up</button>
        </div>
    </nav>
  )
}
export default Header
