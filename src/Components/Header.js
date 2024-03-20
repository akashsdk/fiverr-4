import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='Header-Body'>
      <div>
        <Link to='/'><p style={{fontSize:'30px'}}>Shop Name</p></Link>
      </div>

      <div>
        ho ho ho ho ho ho ho ho ho ho ho ho
      </div>
    </div>
  )
}
