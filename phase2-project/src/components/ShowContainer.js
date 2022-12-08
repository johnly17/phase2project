import ShowCard from "./ShowCard"
import { Card } from "semantic-ui-react";




function ShowContainer({ shows }) {

    const recommendedShows = shows.splice(0, 10)
    console.log(shows)

    const recommendedShowsDiv = recommendedShows.map(show => {
        return <ShowCard 
        key={show.id}  
        id={show.id}
        title={show.name}
        image={show.image.medium}
        genre={show.genres}
        link={show.officialSite}
        />
    })
 
    

    return (
        <div>
            <div className="welcome">
                <h1 className="welcome-msg">Welcome to TV Show Finder!</h1>
                <p>We have everything, except Peaky Blinders</p>
                
            </div>
            <h1>Recommended Shows</h1>
            <Card.Group itemsPerRow={5}>
                {recommendedShowsDiv}
                
            </Card.Group>
        </div>
    )
}

export default ShowContainer
