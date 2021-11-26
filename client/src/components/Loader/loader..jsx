import React from "react";
import './loader.modules.css'
export default function Loader(){
    return (
        <div className="loader">
        <div className="preloader">
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
		<div className="preloader__square"></div>
	</div>
	<div className="status">Loading<span className="status__dot">.</span><span className="status__dot">.</span><span className="status__dot">.</span></div>
    </div>
    )
}