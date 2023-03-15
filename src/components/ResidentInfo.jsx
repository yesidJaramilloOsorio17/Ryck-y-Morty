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
        <img src={residents.image} alt="" width="170px" className="circle" />
        <div  >
            <h1 className="name">{residents.name}</h1>
        <div className="card2">
        <h3 className="card1"><span className="keys">Species:</span>{residents.species}</h3>
        <h3 className="card1"><span className="keys">Status:</span>{residents.status}</h3>
        <h3 className="card1"><span className="keys">Origin:</span>{residents.origin?.name}</h3>
        <h3 className="card1"><span className="keys">episodie:</span>{residents.episode?.length}</h3>
        </div>
 
        </div>
        
    </div>


    );
}

export default ResidentInfo;
