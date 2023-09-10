import { CanceledError } from 'axios'
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Game } from './useGames'

interface Genres {
    id: number,
    name:string
}

interface FetchGenres {
    count:number,
    results:Genres[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([])
    const [error,setError] = useState('')
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setisLoading(true)
        apiClient.get<FetchGenres>('/genres', {signal: controller.signal})
        .then((res) => {
            setGenres(res.data.results)
            setisLoading(false)
        })
        .catch((error) => {
            if(error instanceof CanceledError) return
            setError(error.message)
            setisLoading(false)
        })
        return () => controller.abort()
    },[]);

    return {genres, error, isLoading}
}

export default useGenres