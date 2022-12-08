import ShowCard from "./ShowCard"
import { Card } from "semantic-ui-react";




function ShowContainer({ shows, setPage, page, isLoading }) {

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

    function increasePageChange() {
        setPage(prev => prev + 1)
    }

    function decreasePageChange() {
        if (page === 0) {
            return alert('Cannot do that!')
        } else {
            setPage(prev => prev - 1)
        }
    }


    return (
        <div>
            <div className="welcome">
                <h1 className="welcome-msg">Welcome to TV Show Finder!</h1>
                <p></p>
            </div>
            <h1>Recommended Shows</h1>
                <button onClick={decreasePageChange} className="page-btns">↞</button>
                <button onClick={increasePageChange} className="page-btns">↠</button>
            {isLoading ? <h1>Loading...</h1> : null}
            <Card.Group itemsPerRow={5}>
                {recommendedShowsDiv}

            </Card.Group>
        </div>
    )
}

export default ShowContainer
