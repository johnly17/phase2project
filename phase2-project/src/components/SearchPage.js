import Search from "./Search";
import ShowCard from "./ShowCard";
import { Card } from "semantic-ui-react";
import {useHistory} from "react-router-dom"
import {useState, useEffect} from 'react'

function SearchPage({search, setSearch, shows}) {
    const [searchShows, setSearchShows] = useState([])




    const searchShowsDiv = shows.map(show => {

        return (
            <ShowCard
                key={show.id}
                id={show.id}
                title={show.name}
                image={show.image.medium}
                summary={show.summary}
                genre={show.genres}
            />
        )
    })

   

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <Card.Group itemsPerRow={5}>
            {searchShowsDiv}
            </Card.Group>
        </div>
    )
}

export default SearchPage;