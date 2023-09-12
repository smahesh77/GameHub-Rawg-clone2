import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

interface Props{
    onSort: (sort:string)=>void;
    SortOrder: string;
}

const SortSelector = ({onSort, SortOrder} : Props) => {
    const [down, setDown] = useState(true)

    const sortOrders =[
        {value:'', label:'Relavence'},
        {value:'-added', label:'Date added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Release Date'},
        {value:'-metecritic', label:'Popularity'},
        {value:'-rating', label:'Average rating'},
    ]

    const currentSort = sortOrders.find(order => order.value === SortOrder)

    return (
        <Menu >
            <MenuButton as={Button} onClick={() => {setDown(!down)}} rightIcon={down?<BsChevronDown/>:<BsChevronUp/>}>Order by: {currentSort?.label || 'Relavance'}</MenuButton>
            <MenuList>
                {sortOrders.map((sort)=><MenuItem key={sort.value} value={sort.value} onClick={()=>onSort(sort.value)}>{sort.label}</MenuItem>)}
                
            </MenuList>
        </Menu>
      )
}

export default SortSelector