import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";


function WaterLaterCard ({image, id, title, onDelete, show}){

    function handleDelete(){
        fetch(`http://localhost:4000/shows/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(() => onDelete(show))
    }


    return(
        
             <Card>
            <div className="show-card">
            <Link to={`/show/${id}`}>
                <img 
                src={image} 
                alt={title} 
                className="ui image" 
                /></Link>
                
                <h1>{title}</h1>
            </div>

            <div className="fav-btn">
                <button 
                className="watch-later"
                onClick={handleDelete}
                >Delete</button>
            </div>

        </Card>
        
    )
}

export default WaterLaterCard