import React from "react";
import { ReactDOM } from "react";
import CJLOGO from '../../images/logo'
const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CJLOGO} alt="CJ Logo"/>
            </div>
        </div>
    )
}