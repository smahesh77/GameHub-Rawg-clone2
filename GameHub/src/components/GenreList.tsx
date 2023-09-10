import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {data} = useGenres()
  return (
    <ul>
        {data.map(gen => <li key={gen.id}>{gen.name}</li>)}
    </ul>
  )
}

export default GenreList