import React from 'react'
import { GameQuery } from '../App'
import { Heading } from '@chakra-ui/react'

interface Props {
  
    GameObj: GameQuery|null
  }
  

const GameHeading = ({GameObj}:Props) => {
    const heading = `${GameObj?.platform?.name||''} ${GameObj?.genre?.name||''} Games`
  return (
    <Heading as={'h1'} my={5} fontSize={'5xl'}>{heading}</Heading>
  )
}

export default GameHeading