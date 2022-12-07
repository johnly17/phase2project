import {useEffect, useState} from 'react'
import { Card } from "semantic-ui-react";
import WatchLaterCard from './WatchLaterCard';

function WatchLater() {

    const [watchLater, setWatchLater] = useState([])

    
    useEffect(() => {
        fetch("http://localhost:4000/shows")
        .then(res => res.json())
        .then(shows => setWatchLater(shows))
    }, [])


    //need WatchLaterCard instead to render delete button
    const watchLaterDiv = watchLater.map(show => {
        return (
            <WatchLaterCard
                key={show.id}
                id={show.id}
                title={show.title}
                image={show.image}
                onDelete={updateDelete}
                show={show}
                genre={show.genres}
            />
        )
    })

    console.log(watchLater)

    function updateDelete(deletedShow){
        const updatedWatchList = watchLater.filter(show => show.id !== deletedShow.id)
        setWatchLater(updatedWatchList)
    }

    
    return (
        <div>
        <Card.Group itemsPerRow={4}>
            {watchLaterDiv}
        </Card.Group>
        </div>
    )
}

export default WatchLater;