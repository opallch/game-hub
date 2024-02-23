import * as React from 'react';
import { Component } from 'react';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from '../hooks/useGames';
import { Text } from '@chakra-ui/react';

interface Props{
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = { 
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux, 
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
      }

    return (
        <HStack justify={'left'} marginY={'5px'}>
        {platforms.map(
            (platform) => (
                <Icon as={iconMap[platform.slug]} color={'#718096'}/>
        ))}
        </HStack>
    );
}
 
export default PlatformIconList;
