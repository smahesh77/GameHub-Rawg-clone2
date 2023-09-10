import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Platform{
    id:number,
    name:string,
    slug:string,
}

export interface Game{
    id:number,
    name: String,
    background_image:string,
    parent_platforms: {platform: Platform}[], // an array of objects with a property called platform which is of type Platform
    metacritic: number
}

interface FetchGamesRE {
    count:number,
    results: Game[]
}

const useGames = (name:string) => {
    console.log(name)
    const [games, setGames] = useState<Game[]>([])
    const [error,setError] = useState('')

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGamesRE>('/games', {signal: controller.signal})
        .then((res) => {
            setGames(res.data.results)
        })
        .catch((error) => {
            if(error instanceof CanceledError) return
            setError(error.message)})
        return () => controller.abort()
    },[]);

    return {games, error}
}

export default useGames;