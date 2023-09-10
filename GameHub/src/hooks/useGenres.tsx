import { CanceledError } from 'axios'
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Game } from './useGames'
import useData from './useData'

interface Genres {
    id: number,
    name:string
}



const useGenres = () => useData<Genres>('/genres')

export default useGenres