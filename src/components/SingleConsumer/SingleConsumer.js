import React from 'react'
import { useState } from 'react'
import './SingleConsumer.css'

export default function SingleConsumer() {
    const [answer, setAnswer] = useState(1)
    function scrollToMultiple(){
        document.getElementById('multiple').scrollIntoView({behavior: "smooth"});
    }
  return (
    <div id="single">
        <h1>Predict for a single customer</h1>
        <h4 onClick={()=> scrollToMultiple()}>Predict for multiple customers instead?</h4>
        <div className="container">
            <div className="row">
                <div className="col input-group">
                    <input id="uid" name="UserID" placeholder='User ID'></input>
                    <label htmlFor="uid">User ID</label>
                </div>
                <div className="col input-group">
                    <input id="age" name="age" type="number" placeholder='Age'></input>
                    <label htmlFor="age">Age</label>
                </div>
                <div className="col input-group">
                    <input id="pid" name="pid" placeholder='Product ID'></input>
                    <label htmlFor="pid">Product ID</label>
                </div>
                <div className="col input-group">
                    <input id="gender" name="gender" placeholder='Gender'></input>
                    <label htmlFor="gender">Gender</label>
                </div>
                <div className="col input-group">
                    <input id="mar_stat" name="mar_stat" placeholder='Marital Status'></input>
                    <label htmlFor="mar_stat">Marital Status</label>
                </div>
                <div className="col input-group">
                    <input id="last" name="last" placeholder="Last month's total purchase amount"></input>
                    <label htmlFor="last">Last month's total purchase amount</label>
                </div>
                <div className="col input-group">
                    <input id="occ" name="occ" placeholder='Occupation'></input>
                    <label htmlFor="occ">Occupation</label>
                </div>
                <div className="col input-group">
                    <input id="stay" name="stay" placeholder='Stay in Current City'></input>
                    <label htmlFor="stay">Stay in Current City</label>
                </div>
                <div className="col input-group">
                    <input id="cat" name="cat" placeholder='Product Category'></input>
                    <label htmlFor="cat">Product Category</label>
                </div>
                <div className="col mt-4 input-group">
                    <button className="submit">Submit</button>
                </div>
            </div>
            {answer!==-1&&<div className="answer-box">
                Predicted Purchase Amount: {answer}
            </div>}
        </div>
    </div>
  )
}
