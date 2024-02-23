import { HStack, Image, Text} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.webp";

interface Props{
    onSearch: (searchInput: string) => void;
}

const NavBar = ({onSearch} : Props) => {
    return (
        <HStack justify={"space-between"}>
            <Image src={logo} boxSize={'60px'}></Image>
            <SearchBar onSearch={onSearch}></SearchBar>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
}

export default NavBar;
