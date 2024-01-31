import { useState } from 'react';
import './navbar.scss'
import { FaDribbble, FaBehance } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {

  const [classname, setClassname] = useState('navbar')
  const toogleNavbar = () => {
    if (classname === 'navbar') {
      setClassname('navbar responsive')
    } else {
      setClassname('navbar')
    }
  }



  return (
    <nav className={classname}>
      <a href="#" className='link'>Home</a>
      <a href="#" className='link'>Features</a>
      <a href="#" className='link'>Pricing</a>
      <a href="#" className='link'>Blog</a>
      <a href="#" className='link'>
        <FaDribbble />
        <span>Dribble</span>
      </a>
      <a href="#" className='link'>
        <FaBehance />
        <span>Behance</span>
      </a>
      <a onClick={toogleNavbar} href="#"><FiMenu /></a>
    </nav>
  )
}

export default Navbar