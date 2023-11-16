import { useEffect, useState } from "react"

import * as gameService from "../../services/gameService"

export default function Catalog() {
    const [games,setGames] = useState([])
    useEffect(() => {
        gameService.getAll()
            .then(setGames)
    },[])
    console.log(games);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Cover Fire</h2>
                    <a href="#" className="details-button">Details</a>
                </div>

            </div>
            <div class="allGames">
                <div class="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <a href="#" class="details-button">Details</a>
                </div>

            </div>
            <div class="allGames">
                <div class="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>MineCraft</h2>
                    <a href="#" class="details-button">Details</a>
                </div>
            </div>

            <h3 class="no-articles">No articles yet</h3>
        </section>
    )
}