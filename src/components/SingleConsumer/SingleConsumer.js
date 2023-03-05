import React from 'react'
import { useState } from 'react'
import './SingleConsumer.css'

export default function SingleConsumer() {
    const [answer, setAnswer] = useState(-1)
    const [input,setInput] = useState({
        "User_ID":"",
        "Product_ID":"",
        "Gender":"",
        "Age":"",
        "Occupation":"12",
        "City_Category":"",
        "Stay_In_Current_City_Years":"",
        "Marital_Status":"",
        "Product_Category_1":"",
        "Product_Category_2":"",
        "Product_Category_3":""
        })
    function scrollToMultiple(){
        document.getElementById('multiple').scrollIntoView({behavior: "smooth"});
    }

    function handleInput(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        console.log(input)
    }

    async function uploadSingleConsumer(){
        console.log("input",input)
        await fetch('http://localhost:5000/predict-single', {
            method: 'POST',
            body: JSON.stringify(input),
            "Content-Type": "application/json"
        }).then((response)=>response.json())
        .then((data)=>{
            setAnswer(data.Purchase[0]);
            console.log(data);
        });
    }
  return (
    <div id="single">
        <h1>Predict for a single customer</h1>
        <h4 onClick={()=> scrollToMultiple()}>Predict for multiple customers instead?</h4>
        <div className="container">
            <div className="row">
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="User_ID" name="User_ID" placeholder='User ID'></input>
                    <label htmlFor="User_ID">User ID</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Age" name="Age" placeholder='Age'></input>
                    <label htmlFor="Age">Age</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Product_ID" name="Product_ID" placeholder='Product ID'></input>
                    <label htmlFor="Product_ID">Product ID</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Gender" name="Gender" placeholder='Gender'></input>
                    <label htmlFor="Gender">Gender</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Marital_Status" name="Marital_Status" placeholder='Marital Status'></input>
                    <label htmlFor="Marital_Status">Marital Status</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Occupation" name="Occupation" placeholder='Occupation'></input>
                    <label htmlFor="Occupation">Occupation</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Stay_In_Current_City_Years" name="Stay_In_Current_City_Years" placeholder='Stay in Current City'></input>
                    <label htmlFor="Stay_In_Current_City_Years">Stay in Current City</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Product_Category_1" name="Product_Category_1" placeholder='Product Category'></input>
                    <label htmlFor="Product_Category_1">Product Category 1</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Product_Category_2" name="Product_Category_2" placeholder='Product Category'></input>
                    <label htmlFor="Product_Category_2">Product Category 2</label>
                </div>
                <div className="col col-4 input-group">
                    <input onChange={(e)=>{handleInput(e)}} id="Product_Category_3" name="Product_Category_3" placeholder='Product Category'></input>
                    <label htmlFor="Product_Category_3">Product Category 3</label>
                </div>
                <div className="col col-4 mt-4 input-group">
                    <button className="submit" onClick={()=>{uploadSingleConsumer()}}>Submit</button>
                </div>
            </div>
            {answer!==-1&&<div className="answer-box">
                Predicted Purchase Amount: {answer} Rs
            </div>}
        </div>
    </div>
  )
}
