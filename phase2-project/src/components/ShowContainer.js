import ShowCard from "./ShowCard"
import { Card } from "semantic-ui-react";


function ShowContainer({ shows }) {

    const recommendedShows = shows.splice(0, 10)

    const recommendedShowsDiv = recommendedShows.map(show => {
        return <ShowCard 
        key={show.id}  
        title={show.name}
        image={show.image.medium}
        />
    })
 


    return (
        <div>
            <div className="welcome">
                <h1>Welcome to TV Show Finder!</h1>
            </div>
            <h1>Recommended Shows</h1>
            <Card.Group itemsPerRow={5}>
                {recommendedShowsDiv}
            </Card.Group>
        </div>
    )
}

export default ShowContainer
