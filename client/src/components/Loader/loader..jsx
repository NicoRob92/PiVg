import React from "react";
import './loader.modules.css'
export default function Loader(){
    return (
        <div className="loader">
        <div class="preloader">
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
		<div class="preloader__square"></div>
	</div>
	<div class="status">Loading<span class="status__dot">.</span><span class="status__dot">.</span><span class="status__dot">.</span></div>
    </div>
    )
}