import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='header-h'>
        <h3>Твоё образование</h3>
        <p>Дополнительное образование и курсы обучения онлайн</p>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/file">File</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/make">Make</Link>
        </li>
      </ul>
      <button>Войти</button>
    </div>
  )
}

export default Header
