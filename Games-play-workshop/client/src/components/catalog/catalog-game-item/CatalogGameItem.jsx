import { Link } from "react-router-dom";

export default function CatalogGameItem({
    _id,
    title,
    category,
    imageUrl,
}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{title}</h6>
                <h2>{category}</h2>
                <Link to={`/game/${_id}/details`} className="details-button">Details</Link>
            </div>

        </div>
    )
}