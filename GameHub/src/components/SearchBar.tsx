import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (SearchText:string) => void;
}

const SearchBar = ({onSearch}:Props) => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event) =>{
        event?.preventDefault()
        if(ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          borderRadius={10}
          placeholder="Search games"
          variant="filled"
          ref={ref}
        ></Input>
        <Button type="submit" colorScheme="green" borderRadius={10} marginLeft={2} padding="20px">Search</Button>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
