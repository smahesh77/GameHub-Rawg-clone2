import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch";
import { Genres } from "../hooks/useGenres";
import SearchBar from "./SearchBar";

interface Props {
  onSelected : () => void;
  onSearch: (SearchText:string) => void;
}

const NavBar = ({onSelected, onSearch}: Props) => {
    // Hstack add every thing horizontally, pretty straightforward align
  return (
    <HStack justifyContent="space-between" padding={5}>
        <>
        
        <Image src={logo} boxSize="100px" onClick={()=>onSelected()}></Image>
        <SearchBar onSearch={onSearch}></SearchBar>
        </>
        <ColorModeSwitch/>
        
    </HStack>
      
    
  );
};

export default NavBar;
