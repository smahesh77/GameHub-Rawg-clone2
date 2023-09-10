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
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setisLoading(true)
        apiClient.get<FetchGamesRE>('/games', {signal: controller.signal})
        .then((res) => {
            setGames(res.data.results)
            setisLoading(false)
        })
        .catch((error) => {
            if(error instanceof CanceledError) return
            setError(error.message)
            setisLoading(false)
        })
        return () => controller.abort()
    },[]);

    return {games, error, isLoading}
}

export default useGames;