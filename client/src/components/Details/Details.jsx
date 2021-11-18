import React, { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { getDetails } from "../../redux/actions";
import { Link , useParams} from "react-router-dom";
export default function Details(){
    const dispatch = useDispatch()
    const details = useSelector((state)=> state.details)
    const { id } = useParams();
    useEffect(()=>{
       
        console.log(id)
        dispatch(getDetails(id))
    },[])

    return (
        <div>
            <h1>{details.name}</h1>
            <Link to='/home'><button>Back to Home</button></Link>
        </div>
    )

}