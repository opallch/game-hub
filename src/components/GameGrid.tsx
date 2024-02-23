import * as React from 'react';
import useGames from '../hooks/useGames'
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import { Genre } from '../hooks/useGenres';

interface Props{
    selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
    const {games, error} = useGames();
    // TODO migrate filtering to useGames(selectedGenre)
    const gamesByGenre = games.filter(
        (game) => game.genres.map( (genre) => genre.name).includes(selectedGenre ? selectedGenre.name : ""));
    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg:3, xl:3}} spacing={10}>
            {gamesByGenre.map((game) => (
                <GameCard key={game.id} game={game}/>)
            )}
        </SimpleGrid>
        )
}

export default GameGrid;
