import React, { useState } from "react";
import { Box, Center, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

const App = () => {
  const [genre, setGenre] = useState<Genres|null>(null)
  const [platform, setPlatform] = useState<Platform|null>(null)
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
          base: '1fr',
          lg: '200px 1fr'
        }}

      >
        <GridItem area="nav">
          {" "}
          <NavBar onSelected={() => setGenre(null) }></NavBar>
        </GridItem>
        <Show above="lg">
          {" "}
          {/*the show will only render the components under it if it is above or below a certain size */}
          <GridItem area="aside" px={5}>
            {" "}
            <GenreList onSelected={(genre) => setGenre(genre)} SelectedGenre={genre}></GenreList>
          </GridItem>
        </Show>

        <GridItem area="main">
          {" "}
          <Box p='10px'>
            <PlatformSelector  onSelected={(platform) => setPlatform(platform)} SelectedPlatform={platform}></PlatformSelector>
          </Box>
          <Center>
            
            <GameGrid SelectedPlatform={platform} SelectedGenre={genre} />
          </Center>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
