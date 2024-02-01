import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
function Card(){
    // return (<div className="card" style={{width: "18rem"}}>
    return (<div className="card">
    <img src={rigoImage} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div className="card-footer">
     
      <button type="button" className="btn btn-primary">Find out More</button>
      
    </div>
  </div>
  
  )
};
export default Card;