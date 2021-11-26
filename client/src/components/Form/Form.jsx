import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { postGame } from "../../redux/actions/postGame";
import { getGenres, getPlatforms } from "../../redux/actions";
import { Link } from "react-router-dom";
import './Form.modules.css'



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
      const [modal,setmodal]= useState(false)
      const  genres = useSelector(state => state.genres)
      const platforms = useSelector(state => state.platforms)
      const [genresLocal,setgenresLocal] = useState([])
      const [errors,seterrors] = useState({
        name:"",
        description:"",
        released:"",
        rating:0,       
        genres:'',
        platforms:''

      })
     
      const [plats,setplats] = useState([])
      
      useEffect(() => {
        dispatch(getGenres()) 
        dispatch(getPlatforms())       
        }, [])
  
      useEffect(() => {
          setgenresLocal([...genres])   
          setplats([...platforms])           
          }, [genres,platforms]) 
          
          
    
    
   
    


    const validateName= function(e) {
       if(!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(e)){
         seterrors({...errors,name:'Name solo debe contener letras'})
       }
       else if(e.length < 4){
        seterrors({...errors,name:'Name debe contener mas de 4 letras'})
      }
      else if(e.length > 25){
        seterrors({...errors,name:'Name debe contener menos de 25 letras'})
      }else {
      seterrors({...errors,name:null})
      }
    setform({...form,name:e})
    }
    const validateDescription= function(e) {
      if(e.length < 20){
       seterrors({...errors,description:'Description debe contener mas de 20 letras'})
     }
     else if(e.length > 250){
       seterrors({...errors,description:'Description debe contener menos de 250 letras'})
     }else {
     seterrors({...errors,description:null})
     }
   setform({...form,description:e})
   }
   const validateRating= function(e) {
    if(e < 0){
     seterrors({...errors,rating:'Rating no debe ser menor a 0'})
   }
   else if(e > 5){
     seterrors({...errors,rating:'Rating no debe ser mayor a 5'})
   }else {
   seterrors({...errors,rating:null})
   }
 setform({...form,rating:Number(e)})
 }
      
      
    function handleGenres(e){             
        setform({...form,genres:[...form.genres,Number(e)]})  
        let arr =  genresLocal.filter(x => x.id !== Number(e))        
        setgenresLocal([...arr])
        
        
    }
      
      
    function gen(id){
        let name = genres.find(e => e.id === id)
        if(name) return name.name
    }
      
      
    function handleOnClickG(e){     
        let arr = form.genres.filter(x=> x !== e)
        let global = [...genres]
        let index = global.find(x => x.id === e)
        console.log(index)
        setgenresLocal([...genresLocal,index])   
        setform({...form, genres: arr})     
        
    }
      

    
    function plat(id){
      let pla = platforms.find(e => e.id === id)
      if(pla) return pla.name
    }

    
    function handlePlatforms(e){         
      setform({...form, platforms:[...form.platforms,Number(e)]})
      let arr = plats.filter(x => x.id !== Number(e))
      setplats([...arr])
    }
    
    function handleOnClickP(e){     
      let arr = form.platforms.filter(x => x !== e)
      let index = platforms.find(x=> x.id === e)
      setplats([...plats,index])
      setform({...form, platforms: arr})      
    }
    
    function handleOnSubmit(e){     
      handleModalOpen() 
        e.preventDefault()
       dispatch(postGame(form))
       e.target.reset()
       setform({...form,genres:[],platforms:[]})    
    }
    
    function disable(){
      if(errors.name || form.name.length === 0) return true;
      if(errors.description || form.released.length === 0 || form.description.length === 0) return true;
      if(errors.rating ||  !form.rating) return true;
      if(errors.genres || form.genres.length === 0) return true;
      if(errors.platforms || form.platforms.length === 0) return true;
      else return false
    }

   
    const [show, setShow] = useState(false);

  const handleModalClose = (e) => {
    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };
    
    return (
      <>
      
      
      <form className="container_form" onSubmit={(e) => handleOnSubmit(e)}>
          <div className="container_global">
            <div className="input">
            <label>Name</label>   
            <div className="divDanger">     
            <input type="text" name="name" onChange={(e) => validateName(e.target.value)}  /> 
            {errors.name ? <p className="danger">{errors.name}</p> : null }
            </div>         
            </div>
            <div className="input">
            <label>Description</label>  
            <div className="divDangerT">          
            <textarea  type="text" name="description"  onChange={(e) => validateDescription(e.target.value)}  />
            {errors.description ? <p className="danger">{errors.description}</p> : null }
            </div>
            </div>
            <div className="input">
            <label>Released</label>     
            <input  type="date" name="released" onChange={(e) => setform({...form,released:e.target.value})} />
            </div>
            <div className="input">
            <label>Rating</label>          
            <div className="divDanger">    
            <input  type="number" max="5" min="0"name="rating"   onChange={(e) => validateRating(e.target.value)} />
            {errors.rating ? <p className="danger">{errors.rating}</p> : null }
            </div>
            </div>
            
            <div className="globalGenPlat">
            <div className="inputGenPlat">
            <label>Genres</label>          
            <select className="genres" name="generos" id="1" onChange={(e) => {handleGenres(e.target.value)}} >
            <option>Genres</option>
            {genresLocal.map(e => <option key={e.id} value={e.id} >{e.name}</option>)}
            </select>
            </div>
            
               <div className="boxGenPlat">
                  {form.genres?.map((e)=> <div>
                     <button onClick={(x)=> handleOnClickG(e)}>{gen(e)}</button>
                      </div>)}
                </div>

            </div>
            
            <div className="globalGenPlat">
            <div className="inputGenPlat">
            <label>Platforms</label>          
            <select name="generos" id="1" onChange={(e) => {handlePlatforms(e.target.value)}} >
              <option>Platforms</option>
            {plats.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>
            </div>
             
            
            <div className="boxGenPlat">
            {form.platforms?.map(e=>  <div key={e} id={e}>
              <button onClick={(x)=> handleOnClickP(e) }>{plat(e)}</button></div>)}
            </div>             
            </div>
            <input className="enviar" type="submit" disabled={disable()} value="Create"/>
            <Link to='/home' className="buttons"><button>Back to Home</button></Link>
            </div>
           
          
        </form>

        <div className="modalglobal"  hidden={!show}>
        <div className="modal" onClick={handleModalClose}>
          <div className="modalconteiner">            
            <h1> Congrats </h1>
            <h1>you made your own game</h1>
          </div>
        </div>
      </div>
       </>
        
      )
}


