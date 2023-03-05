import React from 'react'
import Basic from '../Card/CSVDrop/Basic';
import './MultipleConsumers.css'
import { useState } from 'react'
import Card from '../Card/Card';

export default function MultipleConsumers() {

    const [file, setFile] = useState()
    const [graphData, setGraphData] = useState({
        "output_file": "temp/1678000744.6221442924158.csv",
        "swarm_Stay_In_Current_City_Years": "temp/swarm1678000744.6221442924158_Stay_In_Current_City_Years.png",
        "swarm_age": "temp/swarm1678000744.6221442924158_age.png",
        "swarm_city": "temp/swarm1678000744.6221442924158_City_Category.png",
        "swarm_gender": "temp/swarm1678000744.6221442924158_Gender.png",
        "swarm_marital_status": "temp/swarm1678000744.6221442924158_Marital_Status.png",
        "tree_map_topcat": "temp/tree_map1678000744.6221442924158_categories.png"
    })
    const [show, setShow] = useState(false)
    async function uploadMultipleConsumers(){
        console.log('Uploading file: ', file);
        var formData = new FormData();
        formData.append('file', file);
        await fetch('http://localhost:5000/predict', {
            method: 'POST',
            body: formData
        }).then((response)=>response.json())
        .then((data)=>{
            setGraphData(data);
            setShow(true)
            console.log(data);
        });
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
            <Card component={<Basic setFile={setFile}></Basic>}></Card>
        </div>
        <button className="submit" onClick={()=>{uploadMultipleConsumers()}}>Calculate</button>
        {show&&<div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Distribution of Purchase values according to duration of stay</h1>
                    <img alt="swarm_Stay_In_Current_City_Years" className='img-fluid' src={`http://localhost:5000/${graphData.swarm_Stay_In_Current_City_Years}`}></img>
                </div>
                <div className="col-6">
                    <h1>Distribution of Purchase values according to age</h1>
                    <img alt="swarm_age" className='img-fluid' src={`http://localhost:5000/${graphData.swarm_age}`}></img>
                </div>
                <div className="col-6">
                    <h1>Distribution of Purchase values according to city</h1>
                    <img alt="swarm_city" className='img-fluid' src={`http://localhost:5000/${graphData.swarm_city}`}></img>
                </div>
                <div className="col-6">
                    <h1>Distribution of Purchase values according to gender</h1>
                    <img alt="swarm_gender" className='img-fluid' src={`http://localhost:5000/${graphData.swarm_gender}`}></img>
                </div>
                <div className="col-6">
                    <h1>Distribution of Purchase values according to marital status</h1>
                    <img alt="swarm_marital_status" className='img-fluid' src={`http://localhost:5000/${graphData.swarm_marital_status}`}></img>
                </div>
                <div className="col-6">
                    <h1>Top categories according to their purchase values</h1>
                    <img alt="swarm_marital_status" className='img-fluid' src={`http://localhost:5000/${graphData.tree_map_topcat}`}></img>
                </div>
            </div>
        </div>}
    </div>
  )
}
