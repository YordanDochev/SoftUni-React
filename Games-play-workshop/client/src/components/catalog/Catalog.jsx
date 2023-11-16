import { useEffect, useState } from "react"

import * as gameService from "../../services/gameService"
import CatalogGameItem from "./catalog-game-item/CatalogGameItem"

export default function Catalog() {
    const [games, setGames] = useState([])
    useEffect(() => {
        gameService.getAll()
            .then(setGames)
    }, [])
    
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(game => (
                <CatalogGameItem key={game._id} {...game} />
            ))}
            {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
            
        </section>
    )
}