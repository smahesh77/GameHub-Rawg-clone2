import React from "react";
import { Center, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

export const App = () => {
  return (
    // template is like the layout of our site
    // its like we define the areas in the  form rows and columns like matrix
    <div>
      <Grid
        templateAreas={{
          base: `"nav " " main"`,
          lg: `"nav nav" "aside main"`, // for devices greater than 1024px, this basically defines all the ares of our component
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          {" "}
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          {" "}
          {/*the show will only render the components under it if it is above or below a certain size */}
          <GridItem area="aside" px={5}>
            {" "}
            <GenreList></GenreList>
          </GridItem>
        </Show>

        <GridItem area="main">
          {" "}
          <Center>
            <GameGrid />
          </Center>
        </GridItem>
      </Grid>
    </div>
  );
};
