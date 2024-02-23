import { List, ListItem, Image, Button, HStack} from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres'

interface Props{
    genres: Genre[],
    onSelectGenre: CallableFunction;
}

const GenreList = ({genres, onSelectGenre}: Props) => {
    return (
        <List>
            {genres.map(
                (genre) => (
                <ListItem key={genre.id}>
                    <HStack marginY={'5px'}>
                        <Image src={genre.image_background} boxSize={'48px'} borderRadius={8}/>
                        <Button onClick={() => onSelectGenre(genre)} fontSize={'lg'} variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
                )
            )}
        </List> 
        );
}
 
export default GenreList;
