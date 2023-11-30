import * as request from "../lib/request"
import { buildPath } from "../utils/pathUtils"
const baseUrl = 'http://localhost:3030/data/games'

export const getAll = async () => {
    const games = await request.get(baseUrl)
    return games
} 

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`)
    
    return result 
}

export const create = async (gameData) => {
    const response = await request.post(baseUrl,gameData)

    return response
}

export const edit = async (gameId,gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, gameData)

    return result;
}

export const remove = async(gameId) => await request.del(`${baseUrl}/${gameId}`)

export const getLates = async () => {
    const result = await request.get(`${baseUrl}?sortBy=_createdOn desc offset=0&pageSize=3`);

    return result 
}