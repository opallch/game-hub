import { HStack, Image, Text} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.webp";

const NavBar = () => {
    return (
        <HStack justify={"space-between"}>
            <Image src={logo} boxSize={'60px'}></Image>
            <SearchBar></SearchBar>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
}

export default NavBar;
