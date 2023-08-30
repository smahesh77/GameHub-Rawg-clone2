
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames("test successful");

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2, lg:3}} spacing={10} padding={'10px'}> {/** pretty straightforward right */}
        {games?.map((game) => (
          <GameCard game={game}></GameCard> // we map each game to the gamecard comp we defined earlier
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
