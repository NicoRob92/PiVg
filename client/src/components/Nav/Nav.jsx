import React , {useState} from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/Searchbar";
import './Nav.css'
export function Nav(){

const [title, settitle] = useState('')
    return (
      <div className="conteinerNav">
        <div className="search">
        <SearchBar/>
        </div>
        <div className="butons">
        <div className="home"> <Link style={{ textDecoration: 'none' }} to= "/home"><p>Home</p></Link></div>
        <div className="fav"><Link  style={{ textDecoration: 'none' }} to= "/create">Create</Link></div>
        </div>
        </div>
        
    )
}

