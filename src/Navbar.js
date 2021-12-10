import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
  return (
    <>
      <nav>
        <div className='container navbar-main'>
          <a href='/#'>
            <h1 className='logo'>{title}</h1>
          </a>
          <ul className='navbar'>
            <li>
              <a href='/#'>Home</a>
            </li>
            <li>
              <a href='/#'>About</a>
            </li>
            <li>
              <a href='/#'>Features</a>
            </li>
            <li>
              <a href='/#'>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}
Navbar.defaultProps = {
  title: 'set title here',
}

export default Navbar
