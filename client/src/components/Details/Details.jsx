import React, { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { getDetails } from "../../redux/actions";
import { Link , useParams} from "react-router-dom";
import './Details.modules.css'
export default function Details(){
    const dispatch = useDispatch()
    const details = useSelector((state)=> state.details)
    const { id } = useParams();
    useEffect(()=>{              
        dispatch(getDetails(id))
    },[])

    return (
        <div className="detailsGlobal" >
            <div className="detailCard">
            <p className="detailName">{details.name}</p>
            <div className="plats"><p>Genres</p>
            <div className="platsname">{details.genres?.map(e => <label> {e} | </label>)}</div></div>
            <div className="plats"><p>Platforms</p>
            <div className="platsname">{details.platforms?.map(e => <label>{e} |</label>)}</div></div>
            <img src={details.background_image} alt="img not Found"/>
            <div className="description">
                <p>{details.description}</p>
                <p>Released {details.released}</p>
                <p>Rating {details.rating}</p>
                {details.stores && details.stores.length === 0 ? <p>Not available on stores</p>:
                <p>You can find it on</p>}
                {!details.stores ? <></>:<div className='stores'> {details.stores?.map(e => <a href={'https://'+e.domain} key={e.name}>{e.name} | </a>
                )}</div>}
                
            </div>
            </div>

            <Link to='/home' className="button"><button>Back to Home</button></Link>

        </div>
    )

}