import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";



function ShowCard({ title, image, summary, id }) {

    function handleWatchLater() {
        fetch("http://localhost:4000/shows", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    "id": id,
                    "title": title,
                    "image": image,
              })
        })
           .then(response => response.json())
           .then(data => console.log(data))
    }

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
                <button 
                className="watch-later"
                onClick={handleWatchLater}
                >Watch Later</button>
            </div>
        </Card>

    )
}

export default ShowCard
