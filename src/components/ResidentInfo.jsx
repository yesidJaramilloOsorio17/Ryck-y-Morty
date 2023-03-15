import axios from "axios";
import React,{useEffect, useState } from "react";



const ResidentInfo = ({url} ) => {
 
    const[residents,setResidents] = useState({})
    
   
    useEffect(() =>{
        axios
        .get(url)
        .then(res => setResidents(res.data))
        
    }, [])
  
    return (
    <div className="card">
        <img src={residents.image} alt="" />
        <h1>{residents.name}</h1>
        <h3 className="card1"><span>raza:</span>{residents.species}</h3>
        <h3 className="card1"><span>Estado:</span>{residents.status}</h3>
        <h3 className="card1"><span>Origen:</span>{residents.origin?.name}</h3>
        <h3 className="card1"><span>Apariciones:</span>{residents.episode?.length}</h3>
    </div>


    );
}

export default ResidentInfo;
