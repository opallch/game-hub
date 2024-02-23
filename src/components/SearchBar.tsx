import * as React from 'react';
import { Component } from 'react';
import { InputGroup, InputLeftElement, InputRightAddon, Input, Button } from '@chakra-ui/react';
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = () => {
    return (
        <InputGroup >
            <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.600" />}/>
            <Input placeholder='Search games' borderRadius={30} />
        </InputGroup>
    );
}
 
export default SearchBar;
