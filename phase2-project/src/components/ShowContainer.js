import ShowCard from "./ShowCard"
import { Card } from "semantic-ui-react";
import Search from "./Search"

function ShowContainer({ trendTenShows, shows }) {

    const trendTenShowsDiv = trendTenShows.map(show => {
        return (
            <ShowCard
                key={show.id}
                title={show.name}
                image={show.image.medium}
                summary={show.summary}
            />
        )
    })

    const otherTvShowsDiv = shows.map(show => {
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
            <h1>TRENDING TV SHOWS</h1>
            <Card.Group itemsPerRow={5}>
                {trendTenShowsDiv}
            </Card.Group >
            <h1>OTHER SHOWS</h1>
            <Card.Group itemsPerRow={5}>
                {otherTvShowsDiv}
            </Card.Group>
        </div>
    )
}

export default ShowContainer
