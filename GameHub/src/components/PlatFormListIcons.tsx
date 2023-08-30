import {
  FaAndroid,
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatFormListIcons = ({ platforms }: Props) => {
  // these are the names defined in the slug propert of platform which we use to map
  // to icons
  const iconMap:{[key: string] :IconType} = { // we are defining the structure of the object
    // i.e the key is of type string and it is mapped to IconType
    pc: FaWindows,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    xbox: FaXbox,
    linux: FaLinux,
    web: BsGlobe,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1} marginX={1}> {/** just margins */}
      {platforms.map((p) => (
        <>
            <Icon as={iconMap[p.slug]} color={'gray.500'}>

            </Icon>
        </>
      ))}
    </HStack>
    // here we can just use the platform.name cause we are passing the platform array not the object
  );
};

export default PlatFormListIcons;
