import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import  Menu from '@mui/icons-material/MenuRounded'

function Navbar({toggle, handleScroll, ref2, ref1, ref3}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    console.log('Current window.onscroll:', window.onscroll);
    window.onscroll = () => {
      console.log('Scrolling');
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
  }, []);

  return (
    <div className='navbar' style={isScrolled ? {background: "rgb(255, 136, 0)", transition: "0.9s ease"} : {}}>
        <h2>
            <Link to='/' className='link logo'>HappyHomes</Link>
        </h2>

        <div className='menu_container'>
          <Menu className='menu' onClick={toggle}/>
        </div>

        <div className='navLink'>
            <button onClick={() => handleScroll(ref1)} className=' navLinks'>Home</button>
            <button onClick={() => handleScroll(ref2)} className=' navLinks'>About</button>
            <button onClick={() => handleScroll(ref3)} className=' navLinks'>Contact Us</button>
            <Link  to='/view-homes' className='navLinks link' style={{fontSize: '22px' }}>View Homes</Link>
        </div>

        <div className='btn'>
          <Link to='/mortgage' className='link btn_link'>
            Mortgage Calculator
          </Link>
        </div>

    </div>
  )
}

export default Navbar