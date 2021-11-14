import React, { useState } from "react";

export default function(){
    const [form,setform] = useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        background_image:"",
        genres:[],
        platforms:[]

    })
    const handleInputChange = function(e) {
        setform({
          ...form,
          [e.target.name]: e.target.value
        });
       
      }
    return (
        <form>
          <div>
            <label>Nombre</label>        
            <input type="text" name="name" value={form.name} onChange={(e) => handleInputChange(e)}  />             
            <label>Description</label>          
            <input  type="description" name="description" value={form.description} onChange={(e) => handleInputChange(e)}  />
            <label>Released</label>     
            <input  type="released" name="released" value={form.released}  onChange={(e) => handleInputChange(e)} />
            <label>Rating</label>          
            <input  type="rating" name="rating" value={form.rating}  onChange={(e) => handleInputChange(e)} />
            <label>Background Image</label>          
            <input  type="background_image" name="background_image" value={form.background_image} onChange={(e) => handleInputChange(e)}  />
            <label>Genres</label>          
            <input  type="genres" name="genres" value={form.genres} onChange={(e) => handleInputChange(e)}  />
            <label>Platforms</label>          
            <input  type="platforms" name="platforms" value={form.platforms} onChange={(e) => handleInputChange(e)}  />
             
      
          </div>
          {/* por último agregamos un input type submit que nos servirá para submitear el form y listo
          homework terminada! */}
          <input type="submit" />
        </form>
      )
}