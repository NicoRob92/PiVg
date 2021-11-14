import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

function Landing(){
    return(
        <div class="landing">
            <Link to='/home'><button>Home</button></Link>
        </div>
    )
}

export default Landing