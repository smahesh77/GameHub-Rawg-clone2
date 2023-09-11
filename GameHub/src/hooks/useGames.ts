import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
import useData from "./useData"
import { Genres } from "./useGenres"

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



const useGames = (SelectedGenre: Genres|null) => useData<Game>('/games',  {params:{genres: SelectedGenre?.id}}, [SelectedGenre?.id])

export default useGames;