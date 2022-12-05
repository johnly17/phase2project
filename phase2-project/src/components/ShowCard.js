import { Card } from "semantic-ui-react";


function ShowCard({ title, image, summary }) {
    return (
        <Card>
            <div className="show-card">
                <img src={image} alt={title} className="ui image" />
                <h1>{title}</h1>
            </div>
        </Card>

    )
}

export default ShowCard
