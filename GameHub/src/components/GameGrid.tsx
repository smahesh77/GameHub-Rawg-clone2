import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkel from "./CardSkel";
import CardStyle from "./CardStyle";
import { Genres } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  
  GameObj: GameQuery|null
}

const GameGrid = ({ GameObj}: Props) => {
  const { data, error, isLoading } = useGames(GameObj);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={3}
        padding={"10px"}
      >
        {" "}
        {/** pretty straightforward right */}
        {isLoading && skeletons.map((skeleton) => <CardSkel key={skeleton}></CardSkel>)}
        {data?.map((game) => (
          <CardStyle key={game.id}>
            <GameCard game={game}></GameCard>
          </CardStyle> // we map each game to the gamecard comp we defined earlier
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
