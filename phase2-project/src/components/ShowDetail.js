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

    console.log(showDetails)


    return (
        <div className='detail-card'>
            <div className='detail-img-div'>
                <img
                    className='detail-image'
                    src={showDetails.image?.medium}
                    alt=""
                />
            </div>
            <div className='detail-text-div'>
                <h1 className='detail-title'>{showDetails?.name}</h1>
                <p>{showDetails.summary?.replace(/(<([^>]+)>)/ig, '')}</p>
            <div className="detail-buttons">
                <button className='watch-btn'><a href={showDetails.officialSite}>Watch Here</a></button>
                <button className="back-btn" onClick={goBack}>Go Back</button>
            </div>
            </div>
        </div>
    )
}

export default ShowDetail;