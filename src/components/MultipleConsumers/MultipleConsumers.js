import React from 'react'
import Basic from '../Card/CSVDrop/Basic';
import './MultipleConsumers.css'
import { useState } from 'react'

export default function MultipleConsumers() {

    async function uploadMultipleConsumers(){
        var file = document.getElementById('file').files[0];
        var formData = new FormData();
        formData.append('file', file);
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        console.log(data);
    }
    function scrollToSingle(){
        var single = document.querySelector("#single");
        single.scrollIntoView(); 
    }
  return (
    <div id="multiple">
        <h1>Predict for a single customer</h1>
        <h4 onClick={()=>scrollToSingle()}>Predict for multiple customers instead?</h4>
        <div className="w-75 mx-auto my-3">
            <Basic></Basic>
        </div>
        <button className="submit" onClick={()=>{console.log("clicked")}}>Calculate</button>
    </div>
  )
}
