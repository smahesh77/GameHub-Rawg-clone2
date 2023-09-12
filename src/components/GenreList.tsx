import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/ImageUrl";
import GenSkel from "./GenSkel";

interface Props {
  onSelected: (genre: Genres | null) => void;
  SelectedGenre: Genres | null;
}

const GenreList = ({ onSelected, SelectedGenre }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const { data, isLoading } = useGenres();
  if (isLoading) {
    return (
      <List>
        {skeletons.map((s) => (
          <GenSkel key={s}></GenSkel>
        ))}
      </List>
    );
  }
  return (
    <>
      <Heading fontSize={"2xl"} mb={3}>
        Genres
      </Heading>
      <List>
        <ListItem key={'fhbodhbf'} padding="5px">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              objectFit="cover"
              src={'https://media.rawg.io/media/crop/600/400/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg'}
            ></Image>
            <Button
              fontWeight={SelectedGenre == null ? "bold" : "normal"}
              
              fontSize="lg"
              onClick={() => onSelected(null)}
              variant="link"
            >
              All Games
            </Button>
          </HStack>
        </ListItem>

        {data.map((gen) => (
          <ListItem key={gen.id} padding="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(gen.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={gen.id === SelectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelected(gen)}
              >
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
