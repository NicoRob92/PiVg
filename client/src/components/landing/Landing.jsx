import React from "react";
import { Link } from "react-router-dom";
import './Landing.modules.css'
import img from './202080.jpg'
import img1 from './297381.jpg'
import img2 from './524478.jpg'
import img3 from './1.jpg'
import img4 from './2.jpg'
import img5 from './3.jpg'
import img6 from './4.jpg'
import img7 from './600.jpg'
import img8 from './alive-game-hd-photo.jpg'
import png from './vippng.com-paint-splater-png-917496.png'
function Landing(){
    return(
        <div className="landing">
           
            <div className="conteinerImages" Style={`background-image:url(${png})`}>
                <div className="imagen1"><img src={img } Style={'transform:translateX(-55%);width:650%'} alt="" /></div>
                <div className="imagen2"><img src={img1} Style={'transform:translateX(-40%);width:650%'} alt="" /></div>
                <div className="imagen3"><img src={img2} Style={'transform:translateX(-40%);width:700%'} alt="" /></div>
                <div className="imagen4"><img src={img3} Style={'transform:translateX(-40%);width:900%'} alt="" /></div>
                <div className="imagen"><img src={img4} Style={'transform:translateX(-55%);width:650%'} alt="" /></div>
                <div className="imagen4"><img src={img5} Style={'transform:translateX(-50%);width:500%'}alt="" /></div>
                <div className="imagen3"><img src={img6} Style={'transform:translateX(-50%);width:500%'} alt="" /></div>
                <div className="imagen2"><img src={img7} Style={'transform:translateX(-40%);width:400%'} alt="" /></div>
                <div className="imagen1"><img src={img8} Style={'transform:translateX(-60%);width:400%'} alt="" /></div>
            </div>
            <h1 className="areuready">ARE YOU READY FOR A NEW ADVENTURE?</h1>
            <Link to='/home' className="rayon" Style={`background-image: url(${png})`} >GOO!!!</Link>
            <span className="linea"></span>
        </div>
    )
}

export default Landing