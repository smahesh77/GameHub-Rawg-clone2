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
      
    >
      <Image src={game.background_image}></Image>
      <CardBody>
      <HStack justify='space-between' mb={3}>
          <PlatFormListIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormListIcons>
          {/*we then pass platform property to comp  */}
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        {/* {game.parent_platforms.map((platform) => <Text >{platform.platform.name}</Text>)} 
            you can destructure the object here like({platform}) => <>{platform.name}<> */}
        
      </CardBody>
    </Card>
  );
};

export default GameCard;
