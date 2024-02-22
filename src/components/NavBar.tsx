import { HStack, Image, Text} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

const NavBar = () => {
    return (
        <HStack justify={"space-between"}>
            <Image src={logo} boxSize={'60px'}></Image>
            <Text>NavBar</Text>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
}

export default NavBar;
