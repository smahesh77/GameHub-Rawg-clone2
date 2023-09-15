import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatFormListIcons from "./PlatFormListIcons";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card onClick={() => console.log(`clicked ${game.name}`)} borderBottom={26}>
      <Image src={game.background_image}></Image>
      <CardBody border={6}>
        <HStack justify="space-between" mb={3}>
          <PlatFormListIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormListIcons>
          {/*we then pass platform property to comp  */}
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack p='4'>
          <Spacer />
          <Button colorScheme="green" target="_blank" href={`https://fitgirl-repacks.site/?s=${game.name.replace(/ /g, "+").toLowerCase()}`} as="a" textDecoration="none">Download</Button>
        </HStack>
        {/* {game.parent_platforms.map((platform) => <Text >{platform.platform.name}</Text>)} 
            you can destructure the object here like({platform}) => <>{platform.name}<> */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
