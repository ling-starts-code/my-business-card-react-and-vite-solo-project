import React from "react";
import Facebook from "../images/facebook-icon.png"
import Github from "../images/github-icon.png"
import Instagram from "../images/instagram-icon.png"
import Twitter from "../images/twitter-icon.png"


export default function Footer() {
  return (
    <div className="footer">
      <img src={Facebook} />
      <img src={Github} />
      <img src={Instagram} />
      <img src={Twitter} />
    </div> 
  ) 
}