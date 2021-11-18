import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { postGame } from "../../redux/actions/postGame";
import { getGenres } from "../../redux/actions";
import './Form.css'

export default function(){
   const dispatch = useDispatch()
    const [form,setform] = useState({
        name:"",
        description:"",
        released:"",
        rating:"",       
        genres:[],
        platforms:[]

    })
    const genres = useSelector(state => state.genres)
   

    useEffect(() => {
      dispatch(getGenres())       
  }, [])
    const handleInputChange = function(e) {
        setform({
          ...form,
          [e.target.name]: e.target.value
        });
       
      }

    function handleOnSubmit(){
      dispatch(postGame(form))
    }

    function handleGenres(e){         
      setform({...form, genres:[...form.genres,Number(e)]})
     
    }

    
    function gen(id){
      let name = genres.find(e => e.id === id)
      if(name) return name.name
    }

        
    function handleOnClickG(e){     
      let arr = form.genres.filter(x=> x !== e)
     setform({...form, genres: arr})     
    }

    let plats = [{id: 1,name: "PC"},
    {id: 2,name: "PlayStation 5"},
    {id: 3,name: "PlayStation 4"},
    {id: 4,name: "Xbox One"},
    {id: 5,name: "Xbox Series S/X"},
    {id: 6,name: "iOS"},
    {id: 7,name: "Android"},
    {id: 8,name: "Apple Macintosh"},
    {id: 9,name: "Linux"},
    {id: 10,name: "Nintendo"},
    ]
    
    function plat(id){
      let name = plats?.find(e => e.id === id)
      return name?.name
    }
    function handlePlatforms(e){         
      setform({...form, platforms:[...form.platforms,Number(e)]})
    }

    function handleOnClickP(e){     
      let arr = form.platforms.filter(x => x !== e)
      setform({...form, platforms: arr})      
     }

    
    return (
        
        <form className="container_form" onSubmit={handleOnSubmit}>
          
          <div className="container_global">
            <div className="input">
            <label>Nombre</label>        
            <input type="text" name="name" value={form.name} onChange={(e) => handleInputChange(e)}  />    
            </div>         
            <div className="input">
            <label>Description</label>          
            <textarea  type="text" name="description" value={form.description} onChange={(e) => handleInputChange(e)}  />
            </div>
            <div className="input">
            <label>Released</label>     
            <input  type="date" name="released" value={form.released}  onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="input">
            <label>Rating</label>          
            <input  type="rating" name="rating" value={form.rating}  onChange={(e) => handleInputChange(e)} />
            </div>
            
            <div className="globalGenPlat">
            <div className="inputGenPlat">
            <label>Genres</label>          
            <select className="genres" name="generos" id="1" onChange={(e) => {handleGenres(e.target.value)}} >
            {genres?.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>
            </div>
            
               <div className="boxGenPlat">
                  {form.genres?.map((e)=> <div> <button onClick={(x)=> {x.preventDefault();handleOnClickG(e)}}>{gen(e)}</button> </div>)}
                </div>

            </div>
            
            <div className="globalGenPlat">
            <div className="inputGenPlat">
            <label>Platforms</label>          
            <select name="generos" id="1" onChange={(e) => {handlePlatforms(e.target.value)}} >
            {plats?.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>
            </div>
            
            
            <div className="boxGenPlat">
            {form.platforms?.map(e=>  <div key={e} id={e}>
              <button onClick={(x)=> {x.preventDefault();handleOnClickP(e)} }>{plat(e)}</button></div>)}
            </div>             
            </div>
            <input className="enviar" type="submit" />
            </div>
            
          {/* por último agregamos un input type submit que nos servirá para submitear el form y listo
          homework terminada! */}
        </form>
        
      )
}