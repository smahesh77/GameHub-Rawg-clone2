import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    // Hstack add every thing horizontally, pretty straightforward align
  return (
    <HStack justifyContent="space-between" padding={10}>
        <>
        
        <Image src={logo} boxSize="60px"></Image>
        <Text fontSize="30">GameHub</Text>
        </>
        <ColorModeSwitch/>
        
    </HStack>
      
    
  );
};

export default NavBar;
