import React from "react";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode() // returns colormode which is the current color mode color mode
    // and toggle to well toggle the modes ofc lol
  return (
    <div>
      <HStack>
        <Switch isChecked={colorMode == 'dark'} colorScheme="green" color={'red'} onChange={toggleColorMode } />
        <Text>Dark  Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
