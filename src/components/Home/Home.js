import React from 'react'
import Herosvg from './Hero_image.svg'
import './Home.css'

export default function Home() {
  function clickHandler(){
    console.log("Get Started button clicked");
    var single = document.querySelector("#single");
    single.scrollIntoView(); 
  }
  return (
    <div className="Home pt-5">
      <div className="Home-bg"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src={Herosvg} className="img-fluid" alt="Hero"/>
          </div>
          <div className="col">
            <div className="d-flex flex-column h-100 justify-content-center">
              <h1>Predict Consumer Behaviour</h1>
              <h3>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</h3>
              <button className="get-started" onClick={()=>clickHandler()}>Get Started!</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
