import Search from "./Search";
import ShowCard from "./ShowCard";
import { Card } from "semantic-ui-react";


function SearchPage({search, setSearch, shows}) {





    const searchShowsDiv = shows.map(show => {

        return (
            <ShowCard
                key={show.id}
                id={show.id}
                title={show.name}
                image={show.image.medium}
                summary={show.summary}
                genre={show.genres}
                link={show.officialSite}
            />
        )
    })

   

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <Card.Group 
            itemsPerRow={5}
            minWidth={10}
            >
            {searchShowsDiv}
            </Card.Group>
        </div>
    )
}

export default SearchPage;