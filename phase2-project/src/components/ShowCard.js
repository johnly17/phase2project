import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";



function ShowCard({ title, image, summary, id }) {

    return (
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
                <button className="watch-later">Watch Later</button>
            </div>
        </Card>

    )
}

export default ShowCard
