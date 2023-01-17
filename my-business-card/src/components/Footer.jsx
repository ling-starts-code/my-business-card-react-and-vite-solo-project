import React from 'react'
import Facebook from '../images/facebook-icon.png'
import Github from '../images/github-icon.png'
import Instagram from '../images/instagram-icon.png'
import Twitter from '../images/twitter-icon.png'

export default function Footer() {
  return (
    <div className="footer-container container">
      <img className="footer-image" src={Facebook} />
      <img className="footer-image" src={Github} />
      <img className="footer-image" src={Instagram} />
      <img className="footer-image" src={Twitter} />
    </div>
  )
}
