import React from "react";
import './index.css';

const Ticker = () => {
    return(
        <div className="card" style={{"width": "450px"}}>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                    <h5>SYMBOL</h5>
                    <p>Company Name Inc.</p>
                    </div>
                    <div className="col">
                    <h6 style={{"color" : "green" }}>Day Change +$$</h6>
                    <p>some other details</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Ticker;