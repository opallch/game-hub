import * as React from 'react';
import { Component, useRef } from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { Search2Icon } from "@chakra-ui/icons";

interface Props{
    onSearch: (searchInput: string) => void;
}

const SearchBar = ({onSearch} : Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(event) => {
            event.preventDefault(); // prevent the form being sent to the server
            if (ref.current){
                onSearch(ref.current.value);
            }
        }}>
            <InputGroup >
                <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.600" />}/>
                <Input placeholder='Search games' ref={ref} borderRadius={30} />
            </InputGroup>
        </form>
    );
}
 
export default SearchBar;
