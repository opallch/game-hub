import { HStack, Image, Text} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import GenreList from "./GenreList"

const NavBar = () => {
    return (
        <HStack justify={"space-between"}>
            <Image src={logo} boxSize={'60px'}></Image>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
}

export default NavBar;
