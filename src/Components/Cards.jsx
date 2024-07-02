import React from 'react'

const Cards=(props)=>{
    return(
    <div className="card">
    <div className="container">
    <h4><b>{props?.productName}</b></h4> 
    <p>{props?.price}</p> 
    </div>
    </div>
    )}

export default Cards