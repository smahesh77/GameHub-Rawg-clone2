import { CanceledError } from 'axios'
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Game } from './useGames'


interface FetchResponse <T> {
    count:number,
    results:T[]
}

const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([])
    const [error,setError] = useState('')
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setisLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
        .then((res) => {
            setData(res.data.results)
            setisLoading(false)
        })
        .catch((error) => {
            if(error instanceof CanceledError) return
            setError(error.message)
            setisLoading(false)
        })
        return () => controller.abort()
    },[]);

    return {data, error, isLoading}
}

export default useData