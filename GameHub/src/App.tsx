import React, { useState } from "react";
import { Box, Center, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  SortOrder: string;
  SearchText:string
}

const App = () => {
  const [gameObj, setGameObj] = useState<GameQuery>({} as GameQuery);
  return (
    // template is like the layout of our site
    // its like we define the areas in the  form rows and columns like matrix
    <div>
      <Grid
        templateAreas={{
          base: `"nav " " main"`, // we dont want aside for mobile devices,
          lg: `"nav nav" "aside main"`, // for devices greater than 1024px, this basically defines all the ares of our component
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          {" "}
          <NavBar
            onSelected={() =>
              setGameObj({ ...gameObj, platform: null, genre: null })
            }
            onSearch={(SearchText)=>setGameObj({...gameObj, SearchText})}
          ></NavBar>
        </GridItem>
        <Show above="lg">
          {" "}
          {/*the show will only render the components under it if it is above or below a certain size */}
          <GridItem area="aside" px={5}>
            {" "}
            <GenreList
              onSelected={(genre) => setGameObj({ ...gameObj, genre })}
              SelectedGenre={gameObj.genre}
            ></GenreList>
          </GridItem>
        </Show>

        <GridItem area="main">
          {" "}
          <HStack pl={3} spacing={5} marginBottom={5}>
            <PlatformSelector
              onSelected={(platform) => setGameObj({ ...gameObj, platform })}
              SelectedPlatform={gameObj.platform}
            ></PlatformSelector>
            <SortSelector
              SortOrder={gameObj.SortOrder}
              onSort={(SortOrder) => {
                setGameObj({ ...gameObj, SortOrder });
              }}
            ></SortSelector>
          </HStack>
          <Center>
            <GameGrid GameObj={gameObj} />
          </Center>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
