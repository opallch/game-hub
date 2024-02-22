import React, { Component } from 'react';
import { Card, CardBody, Heading, Image, Text} from '@chakra-ui/react';
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card overflow={'hidden'}>
            <Image src={game.background_image} alt={game.name}/>
            <CardBody>
                <Heading size={'md'}>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            </CardBody>
        </Card>
    );
}

export default GameCard;
