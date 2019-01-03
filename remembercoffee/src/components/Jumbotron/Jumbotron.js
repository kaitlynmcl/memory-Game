import React from "react";
import "./Jumbotron.css";


const Jumbotron = props =>  {
    return (
            <div className="img-container">
                <div className="card-body">
                    <img alt={props.image} src={props.image} onClick={() => props.handleClickImage(props.image)}/>
                </div>
            </div>
    )
};

export default Jumbotron;