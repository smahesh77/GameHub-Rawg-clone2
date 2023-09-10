import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {genres} = useGenres()
  return (
    <ul>
        {genres.map(gen => <li key={gen.id}>{gen.name}</li>)}
    </ul>
  )
}

export default GenreList