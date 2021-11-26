import React , {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/Searchbar";
import './Nav.modules.css'
import { useLocation } from "react-router";


export function Nav(){
  const location = useLocation()
  const [show,setshow] = useState(false)


  useEffect(() => {
    shows()    
  }, [location])
  
  function shows(){
      if(location.pathname.includes('videogame') || location.pathname.includes('create')){
          return    setshow((show) => true)
      }
      else{
      setshow((show) => false)}
  }

    return (
      <div className="conteinerNav">
        <div className="search" hidden={show}>
        <SearchBar/>
        </div>
        <div className="butons">
        <div className="home"> <Link style={{textDecoration: 'none'}} to= "/home"><p>Home</p></Link></div>
        <div className="fav"><Link  style={{textDecoration: 'none'}} to= "/create"><p>Create</p></Link></div>
        </div>
        <div className="title">WikiGames</div>
        </div>
        
    )
}

