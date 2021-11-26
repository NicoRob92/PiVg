import React, {useState, useEffect} from "react";
import { useDispatch  } from "react-redux";
import { useLocation } from "react-router";
import styled from "styled-components";
import { getAGame } from "../../redux/actions";


export default function SearchBar(){
    const [name,setname]=useState('')
    const dispatch = useDispatch()  
    const location = useLocation()
    function handleOnSubmit(e){
        e.preventDefault()
        dispatch(getAGame(name));
        setname('');
        console.log(location)
    }
 


    return(
        <Conteiner >            
            <Form  onSubmit ={(e) => handleOnSubmit(e) } autocomplete="off">
            <Input type="text" name="name" placeholder="ingrese juego"  value={name} onChange={(e)=> setname(e.target.value)}></Input>
            <Button type="submit"><span>Buscar</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
    <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
    <path fill="white" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
  </svg></Button></Form>
        </Conteiner>
    )
}
const Conteiner=styled.div`
display:flex;
background:transparent;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
`;

const Form=styled.form`
display:flex;
align-items:center;
`;

const Input=styled.input`
border:none;
border-radius:4%;
opacity:50%;
 :focus {
    opacity:100%;
}
`;

const Button=styled.button`
    border:none;
    cursor: pointer;
    font-weight: 700;
    font-family: Helvetica,"sans-serif";
    transition: all .2s;
    background: transparent;    
    display: flex;
    align-self:flex-end;
    align-items: center;
    font-size: 74%;
    width: 30%;
    color:white;   
   :hover {
    background: transparent;
   }
   
   svg {
    width: 40%;
    margin-left: 10px;
    transition: transform .3s ease-in-out;
    
   }
   
   :hover svg {
    transform: translateX(5px);
   }
   
   :active {
    transform: scale(0.95);
   }
   
   
`;
