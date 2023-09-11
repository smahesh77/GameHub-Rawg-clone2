import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/ImageUrl";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY='5px'>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(gen.image_background) }></Image>
            <Text fontSize='lg'>{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
