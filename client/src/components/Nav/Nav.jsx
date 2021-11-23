import React , {useState} from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/Searchbar";
import './Nav.modules.css'
export function Nav(){

    return (
      <div className="conteinerNav">
        <div className="search">
        <SearchBar/>
        </div>
        <div className="butons">
        <div className="home"> <Link Style={'text-decoration: none'} to= "/home"><p>Home</p></Link></div>
        <div className="fav"><Link  Style={'text-decoration: none'} to= "/create"><p>Create</p></Link></div>
        </div>
        <div className="title">WikiGames</div>
        </div>
        
    )
}

