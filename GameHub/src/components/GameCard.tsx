import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatFormListIcons from "./PlatFormListIcons";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      onClick={() => console.log(`clicked ${game.name}`)}
      borderRadius={10}
      overflow="hidden"
    >
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        {/* {game.parent_platforms.map((platform) => <Text >{platform.platform.name}</Text>)} 
            you can destructure the object here like({platform}) => <>{platform.name}<> */}
        <HStack justify='space-between' >
          <PlatFormListIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormListIcons>
          {/*we then pass platform property to comp  */}
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
