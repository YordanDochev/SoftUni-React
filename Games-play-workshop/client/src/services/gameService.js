import * as request from "../lib/request"
const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const games = await request.get(baseUrl)
    return Object.values(games)
} 

export const create = async (gameData) => {
    const response = await request.post(baseUrl,gameData)

    return response
}
