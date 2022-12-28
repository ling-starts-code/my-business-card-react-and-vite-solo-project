import React from "react";
import myImage from "../images/my-image.jpeg"
import Email from "../images/mail.png"
import LinkedIn from "../images/linkedIn.png"

export default function Info() {
  return (
    <>
      <img src={myImage} className="myImage"/>
    <div className="Info">
    <h1> Ling Zhang </h1>
     <h4> Full Stack Developer</h4>
     <h5> ling's profolio website</h5>
     <button className="email-button"><img className="email-img" src={Email}/> <span className="email-button-text"> Email </span> </button>
     <button className="linkedIn-button"><img className="linkedIn-img" src={LinkedIn}/> <span className="linkedIn-button-text"> LinkedIn </span></button>
    </div>  
    </> 
  )
} 