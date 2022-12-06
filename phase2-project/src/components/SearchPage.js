import Search from "./Search";
import ShowCard from "./ShowCard";
import { Card } from "semantic-ui-react";

function SearchPage({search, setSearch, shows}) {

    const searchShowsDiv = shows.map(show => {
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
            <Search search={search} setSearch={setSearch}/>
            <Card.Group itemsPerRow={5}>
            {searchShowsDiv}
            </Card.Group>
        </div>
    )
}

export default SearchPage;