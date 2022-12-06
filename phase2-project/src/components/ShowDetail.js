import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'



function ShowDetail({ }) {

    const [showDetails, setShowDetails] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(r => r.json())
            .then((data) => setShowDetails(data))
    }, [id])
    console.log(id)
    console.log(showDetails)
    // const name = showDetails.name
    // const image = showDetails.image.original
    // const summary = showDetails.summary

    const history = useHistory()

    function goBack() {
        history.push("/")
    }

    return (
        <div className='detail-card'>
            <img

                src={showDetails.image?.original}
                alt='image'
            />
            <h1 className='detail-title'>{showDetails.name}</h1>
            <p>{showDetails.summary}</p>
            <button
                onClick={goBack}
            >Go Back</button>
        </div>
    )
}

export default ShowDetail;