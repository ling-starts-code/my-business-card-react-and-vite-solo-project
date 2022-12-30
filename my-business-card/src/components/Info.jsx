import React from 'react'
import myImage from '../images/my-image.jpeg'
import Email from '../images/mail.png'
import LinkedIn from '../images/linkedIn.png'

export default function Info() {
  return (
    <>
      <div className="info-container my-image">
        <img src={myImage} className="my-photo" />
      </div>

      <div>
        <div className="info-container container ">
          <h1> Ling Zhang </h1>
          <h4> Full Stack Developer</h4>
          <h5> ling's profolio website</h5>
          <div className="button-container">
            <address>
              <a href="mailto:lingzhangmyself@gmail.com">
                <button className="email-button button">
                  <img className="button-img" src={Email} />{' '}
                  <span className="email-button-text"> Email </span>{' '}
                </button>
              </a>
            </address>
            <a href="https://www.linkedin.com/in/ling-zhang-3bab52179/">
              <button className="linkedIn-button button">
                <img className="button-img" src={LinkedIn} />{' '}
                <span className="linkedIn-button-text"> LinkedIn </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
