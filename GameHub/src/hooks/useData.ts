import { AxiosRequestConfig, CanceledError } from 'axios'
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Game } from './useGames'


interface FetchResponse <T> {
    count:number,
    results:T[]
}

const useData = <T>(endpoint:string, RequestConfig?: AxiosRequestConfig, deps?:any) => {
    const [data, setData] = useState<T[]>([])
    const [error,setError] = useState('')
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setisLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...RequestConfig})
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
    },deps? [...deps]: []);

    return {data, error, isLoading}
}

export default useData