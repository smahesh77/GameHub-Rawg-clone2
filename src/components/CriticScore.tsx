import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props {
    score: number;
}

const CriticScore = ({score} :Props) => {
    let color
    if (score > 75) {
        color = 'green';
    } else if (score > 50) {
        color = 'orange';
    } else {
        color = 'red';
    }
    
  return (
    <Badge colorScheme={color} borderRadius='4'>{score}</Badge>
  )
}

export default CriticScore