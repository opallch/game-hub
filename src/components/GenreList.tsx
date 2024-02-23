import { List, ListItem, AspectRatio, Image, Text, HStack} from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres'

interface Props{
    genres: Genre[],
}

const GenreList = ({genres}: Props) => {
    return (
        <List>
            {genres.map(
                (genre) => (
                <ListItem key={genre.id}>
                    <HStack marginY={'5px'}>
                        <Image src={genre.image_background} boxSize={'48px'} borderRadius={8}/>
                        <Text fontSize={'lg'}>{genre.name}</Text>
                    </HStack>
                </ListItem>
                )
            )}
        </List> 
        );
}
 
export default GenreList;
