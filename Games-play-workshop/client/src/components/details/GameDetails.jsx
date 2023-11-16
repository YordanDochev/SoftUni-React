import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import * as gameService from "../../services/gameService"
import * as commentService from "../../services/commentService"

export default function GameDetails() {
    const { gameId } = useParams();
    const [game, setGame] = useState({})
    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame)
    }, [gameId])
    const addComentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const newComment = await commentService.create(
            gameId,
            formData.get('username'),
            formData.get('comment'),
        )
        console.log(newComment);
    }
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addComentHandler}>
                    <input type="text" placeholder="Username"  name="username"/>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}