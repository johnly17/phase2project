import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'



function ShowDetail({ shows }) {

    const [showDetails, setShowDetails] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(r => r.json())
            .then((data) => setShowDetails(data))
    }, [id])

    const history = useHistory()

    function goBack() {
        history.push("/")
    }


    return (
        <div className='detail-card'>
            <div className='detail-img-div'>
                <img
                    className='detail-image'
                    src={showDetails.image?.original}
                    alt='image'
                />
            </div>
            <div className='detail-text-div'>
                <h1 className='detail-title'>{showDetails?.name}</h1>
                <p>{showDetails.summary?.replace(/(<([^>]+)>)/ig, '')}</p>
                <button><a href={showDetails.link}>Watch Here</a></button>
                <button
                    onClick={goBack}
                >Go Back</button>
            </div>
        </div>
    )
}

export default ShowDetail;