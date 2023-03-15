

const Character = ({ data }) => {
 
  
    

    return (
        <div className="character-card">
            
            <h3 className="description"><span className="keys">Name:</span><br /> { data.name }</h3>
            <h3 className="description"><span className="keys">Type:</span> <br /> {  data.type} </h3>
            <h3 className="description"><span className="keys">Dimension:</span><br /> { data.dimension }</h3>
            <h3 className="description"><span className="keys">Residents: </span><br /> { data.residents?.length}</h3>
              
        </div>
    );
}

export default Character;
