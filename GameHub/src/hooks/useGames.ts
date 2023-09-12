import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
import useData from "./useData"
import { Genres } from "./useGenres"
import { GameQuery } from "../App"

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



const useGames = (GameObj: GameQuery|null) => useData<Game>('/games',  
{params:{genres: GameObj?.genre?.id, platforms:GameObj?.platform?.id, ordering:GameObj?.SortOrder}}, [GameObj])

export default useGames;