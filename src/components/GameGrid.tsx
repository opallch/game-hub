import * as React from 'react';
import useGames from '../hooks/useGames'
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import { Genre } from '../hooks/useGenres';

interface Props{
    selectedGenre: Genre | null;
    searchInput: string
}

const GameGrid = ({ selectedGenre, searchInput }: Props) => {
    const {games, error} = useGames();
    // TODO migrate filtering to useGames(selectedGenre)
    // first by genre
    let filteredGames = games.filter(
        (game) => game.genres.map( (genre) => genre.name).includes(selectedGenre ? selectedGenre.name : ""));
    // by search name
    filteredGames = filteredGames.filter(
        (game) => game.name.toLowerCase().includes(searchInput.toLowerCase()
    ));

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg:3, xl:3}} spacing={10}>
            {filteredGames.map((game) => (
                <GameCard key={game.id} game={game}/>)
            )}
        </SimpleGrid>
        )
}

export default GameGrid;
