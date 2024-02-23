import React, { Component } from 'react';
import { Card, CardBody, Heading, Image, HStack} from '@chakra-ui/react';
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import RatingBadge from './RatingBadge'

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card overflow={'hidden'}>
            <Image src={game.background_image} alt={game.name}/>
            <CardBody>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <HStack justify={'start'} align={'flex-start'} marginY={'10px'}>
                    <RatingBadge rating={game.rating}></RatingBadge>
                    <Heading size={'md'} textAlign={'left'}>{game.name}</Heading>
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;
