
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkel from "./CardSkel";

const GameGrid = () => {
  const { games, error, isLoading } = useGames("test successful");
  const skeletons =[1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2, lg:3}} spacing={10} padding={'10px'}> {/** pretty straightforward right */}
        {isLoading && skeletons.map(skeleton => <CardSkel></CardSkel>)}
        {games?.map((game) => (
          <GameCard game={game}></GameCard> // we map each game to the gamecard comp we defined earlier
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
