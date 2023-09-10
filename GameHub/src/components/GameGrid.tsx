
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkel from "./CardSkel";
import CardStyle from "./CardStyle";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons =[1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2, lg:3}} spacing={10} padding={'10px'}> {/** pretty straightforward right */}
        {isLoading && skeletons.map(skeleton => <CardStyle>
          <CardSkel></CardSkel>
        </CardStyle>)}
        {data?.map((game) => (
          <CardStyle>
            <GameCard game={game}></GameCard>
          </CardStyle> // we map each game to the gamecard comp we defined earlier
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
