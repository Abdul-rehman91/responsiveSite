import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
    return (
        <div className='nav'>
        <ul >
                <li><Link to='/home' style={{color:'white'}}>Home</Link></li>
                <li><Link to='/user' style={{color:'white'}}>User</Link></li>
                <li><Link to='/about' style={{color:'white'}}>About</Link></li>
                <li><Link to='/login' style={{color:'white'}}>Login Page</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
