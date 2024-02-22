import React, { Component } from 'react';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames'

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card overflow={'hidden'}>
            <Image src={game.background_image} alt={game.name}/>
            <CardBody>
                <Heading size={'md'}>{game.name}</Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;
