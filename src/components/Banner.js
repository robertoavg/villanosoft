import React from 'react';
import linkedin from '../img/linkedin.png';

const Banner = (props) =>{
    var texto = "";
    if(props.i==="Español"){
        texto = "Creado por: Roberto Villanueva";
    }
    if(props.i==="English"){
        texto = "Created by: Roberto Villanueva";
    }
    return(
        <div style={{display: "flex", flexDirection: "row", backgroundColor:'#000',
        alignItems: "center",justifyContent: "center",fontSize: "calc(10px + 2vmin)"}}>
        <div style={{position:"relative", fontFamily: 'Roboto' ,fontSize: '18px', color: 'white'}}>
            {texto}
        </div>
        <a href="https://www.linkedin.com/in/robertoavg/">
            <img style={{position:"relative", marginLeft:"10px"}} src = {linkedin} className  = "linkedin" alt = "linkedin"/>
        </a>
        </div>
    )
};

export default Banner;