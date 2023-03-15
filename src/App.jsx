import './App.css';
import Character from "./components/Character";
import axios from "axios";
import Residentinfo from "./components/ResidentInfo"

import { useEffect, useState } from "react";

function App() {
  const [characterData, setCharacterData] = useState({});
  const [ value, setValue] = useState ()


  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${1}`)
      .then((resp) => setCharacterData(resp.data))
      
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = e => {

    axios
    .get(`https://rickandmortyapi.com/api/location/${value}`)
         .then(( resp) => setCharacterData(resp.data)) 
    
         .catch((error) => console.error(error))
          
    e.preventDefault()
   
   
   }  

 


  return (
   
    <form onSubmit={e =>handleSubmit (e)} >
     
         <div className='buscador'>
           <label htmlFor="id" className="get1"></label> <br />
           <input id='casilla' value={ value } type="text" placeholder='type a location id, 1 a126' onChange={ (e) => setValue( e.target.value)}  />
           <button type='submit'className='get' >
           Search
            </button>
           </div>


 

<>
    <div className="App">
      <Character
       data={characterData} 
       />
     
     
    </div>
    <div className='character-card1'>
  {characterData.residents?.map((user)=>(
      <Residentinfo
      residents url={user} key= {user}
      />
       ))
       }
    </div>

    </>
    </form>
  );
}

export default App;
