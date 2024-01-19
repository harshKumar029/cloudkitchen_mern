import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} FastFood. All rights reserved.</p>
        <p>Contact us: contact@fastfood.com</p>
      </div>
    </footer>
  )
}

export default Footer