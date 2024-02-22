import * as React from 'react';
import { Button, ColorMode, useColorMode} from '@chakra-ui/react';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? 'Dark': 'Light'}
        </Button>
    );
}

export default ColorModeSwitch;
