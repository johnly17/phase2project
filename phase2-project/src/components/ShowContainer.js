import ShowCard from "./ShowCard"
import { Card } from "semantic-ui-react";

function ShowContainer({firstTenShows}) {

    const showsDiv = firstTenShows.map(show => {
        return (
            <ShowCard 
            key={show.id}
            title={show.name}
            image={show.image.medium}
            summary={show.summary}
            />
        )
    })

    return (
        <div>
            <h1>Top 10 TV SHOWS</h1>
        <Card.Group itemsPerRow={5}>
            {showsDiv}
        </Card.Group >
        </div>
    )
}

export default ShowContainer
