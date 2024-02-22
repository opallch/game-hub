import { HStack, Text, Switch, useColorMode} from '@chakra-ui/react';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack>
            <Switch colorScheme='teal' onChange={toggleColorMode} isChecked={colorMode === 'dark'}></Switch>
            <Text>Dark Mode</Text>
        </HStack>
    );
}

export default ColorModeSwitch;
