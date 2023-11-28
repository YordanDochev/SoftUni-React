import { useEffect, useState } from "react"

import { useNavigate, useParams } from 'react-router-dom'

import * as gameService from '../../services/gameService'
import useForm from "../../hooks/useForm";



export default function EditGame() {
    const navigate = useNavigate()
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    })
    const { gameId } = useParams()

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => setGame(result))
    }, [gameId])

    const onSubmit = async (e) => {
        e.preventDefault()

        const values = Object.fromEntries(new FormData(e.currentTarget))
        try {
            await gameService.edit(gameId,values)

            navigate('/catalog')
        } catch (error) {
            console.log(error);
        }
    }
    
    const onChange = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..." value={game.title} onChange={onChange} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." value={game.category} onChange={onChange} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" value={game.maxLevel} onChange={onChange} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." value={game.imageUrl} onChange={onChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={game.summary} onChange={onChange} ></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    )
}