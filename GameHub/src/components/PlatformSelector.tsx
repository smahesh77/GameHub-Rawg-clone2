import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import usePlatform, { Platform } from '../hooks/usePlatforms'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


interface Props{
    onSelected: (platfrom: Platform|null) => void;
    SelectedPlatform: Platform|null;
}


const PlatformSelector = ({onSelected, SelectedPlatform}:Props) => {
    const {data, error} = usePlatform();
    const [down, setDown] = useState(true)
    if(error) return null
  return (
    <Menu >
        <MenuButton as={Button} onClick={() => {setDown(!down)}} rightIcon={down?<BsChevronDown/>:<BsChevronUp/>}>{SelectedPlatform?SelectedPlatform?.name:'Platform'}</MenuButton>
        <MenuList>
            <MenuItem onClick={() => onSelected(null)}>All</MenuItem>
            {data.map((platform) => <MenuItem onClick={() => onSelected(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector