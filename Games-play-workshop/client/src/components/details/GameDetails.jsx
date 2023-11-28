import { useContext, useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom"

import AuthContext from "../../contexts/authContext"
import * as gameService from "../../services/gameService"
import * as commentService from "../../services/commentService"

import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";

export default function GameDetails() {
    const { email, _id } = useContext(AuthContext)
    const { gameId } = useParams();
    const [game, setGame] = useState({})
    const [comments, dispatch] = useReducer(reducer, [])
    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame)
        commentService.getAll(gameId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result
                })
            })
    }, [gameId])
    const addComentHandler = async (values) => {

        const newComment = await commentService.create(
            gameId,
            values.comment
        )

        newComment.owner = { email }

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const { values, onChange, onSubmit } = useForm(addComentHandler, {
        comment: ''
    })

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
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}.</p>
                            </li>
                        ))}

                    </ul>
                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>

                {game._ownerId === _id && (
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                    </div>
                )}

            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" onChange={onChange} value={values.comment} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}