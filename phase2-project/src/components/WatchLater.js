import {useEffect, useState} from 'react'
import ShowCard from './ShowCard'
import { Card } from "semantic-ui-react";

function WatchLater() {

    const [watchLater, setWatchLater] = useState([])

    
    useEffect(() => {
        fetch("http://localhost:4000/shows")
        .then(res => res.json())
        .then(shows => setWatchLater(shows))
    }, [])

    //need WatchLaterCard instead to render delete button
    const watchLaterDiv = watchLater.map(shows => {
        return (
            <ShowCard 
                key={shows.id}
                id={shows.id}
                title={shows.title}
                image={shows.image}
            />
        )
    })
    
    return (
        <div>
        <Card.Group itemsPerRow={4}>
            {watchLaterDiv}
        </Card.Group>
        </div>
    )
}

export default WatchLater;