
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkel from "./CardSkel";
import CardStyle from "./CardStyle";
import { Genres } from "../hooks/useGenres";

interface Props {
  SelectedGenre : Genres | null
}

const GameGrid = ({SelectedGenre}:Props) => {
  const { data, error, isLoading } = useGames(SelectedGenre);
  const skeletons =[1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2, lg:3}} spacing={3} padding={'10px'}> {/** pretty straightforward right */}
        {isLoading && skeletons.map(skeleton => 
          <CardSkel></CardSkel>
        )}
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
