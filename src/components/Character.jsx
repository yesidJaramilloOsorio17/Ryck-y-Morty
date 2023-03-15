

const Character = ({ data }) => {
 
  
    

    return (
        <div className="character-card">
            
            <h3 className="description"><span>name:</span><br /> { data.name }</h3>
            <h3 className="description"><span>tipo:</span> <br /> {  data.type} </h3>
            <h3 className="description"><span>dimencion:</span><br /> { data.dimension }</h3>
            <h3 className="description"><span>poblacion: </span><br /> { data.residents?.length}</h3>
              
        </div>
    );
}

export default Character;
