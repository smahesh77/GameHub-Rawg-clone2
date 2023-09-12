import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/Heading";
import { AiOutlineMenu } from "react-icons/ai";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  SortOrder: string;
  SearchText: string;
}

const App = () => {
  const [gameObj, setGameObj] = useState<GameQuery>({} as GameQuery);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the screen width is less than or equal to 768 pixels (adjust as needed)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav " " main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          
            {isMobile && (
              <Box
                bgSize="sm"
                alignItems='start'
                p='3'
                margin={1}
              >
                <Button
                  colorScheme="green"
                  size="sm"
                  onClick={onOpen}
                  leftIcon={<AiOutlineMenu />}
                >
                  Genres
                </Button>
              </Box>
            )}
            <NavBar
              onSelected={() =>
                setGameObj({ ...gameObj, platform: null, genre: null })
              }
              onSearch={(SearchText) => setGameObj({ ...gameObj, SearchText })}
            ></NavBar>
          
        </GridItem>
        {!isMobile && (
          <Show above="lg">
            <GridItem area="aside" px={5}>
              <GenreList
                onSelected={(genre) => setGameObj({ ...gameObj, genre })}
                SelectedGenre={gameObj.genre} onClickk={onClose}              ></GenreList>
            </GridItem>
          </Show>
        )}

        <GridItem area="main">
          <Box pl={3}>
            <GameHeading GameObj={gameObj}></GameHeading>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  onSelected={(platform) =>
                    setGameObj({ ...gameObj, platform })
                  }
                  SelectedPlatform={gameObj.platform}
                ></PlatformSelector>
              </Box>
              <SortSelector
                SortOrder={gameObj.SortOrder}
                onSort={(SortOrder) => {
                  setGameObj({ ...gameObj, SortOrder });
                }}
              ></SortSelector>
            </Flex>
          </Box>
          <Center>
            <GameGrid GameObj={gameObj} />
          </Center>
        </GridItem>
      </Grid>

      {/* Mobile Sidebar Menu */}
      {isMobile && (
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <GenreList
                onSelected={(genre) => {
                  setGameObj({ ...gameObj, genre });
                }}
                SelectedGenre={gameObj.genre}
                onClickk={ onClose}
              ></GenreList>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default App;
