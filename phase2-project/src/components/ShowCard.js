import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";




function ShowCard({ title, image, genre, id, link }) {

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
                "genres": [genre[0]],
                "link": link
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }


    return (
        <Card >
            <div>
                <Link to={`/show/${id}`}>
                    <img
                        src={image}
                        alt={title}
                        className="ui-image"
                    /></Link>

                <h1 className="card-title">{title}</h1>
                <p>Genre: {genre[0]}</p>
            </div>
            {/* <div className="fav-btn">
                <button
                    className="watch-later"
                    >Watch Later</button>
            </div> */}
            <div class="ui bottom attached button"
            onClick={handleWatchLater}
            >
                <i class="add icon"></i>
                Watch Later
            </div>

        </Card>

    )
}

export default ShowCard
