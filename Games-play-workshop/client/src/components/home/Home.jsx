import { useEffect, useState } from "react"
import withAuth from "../../HOC/withAuth"

import * as gameServices from "../../services/gameService"
import LatestGames from "./latest-games/LatestGames";

function Home({
    _id,
    email
}) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameServices.getLates()
            .then(result => setGames(result))
    }, [])
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {games.map(game => <LatestGames {...game} />)}

                {!games.length && (
                    <p className="no-articles">No games yet</p>

                )}

            </div>
        </section>
    )
}

export default withAuth(Home)