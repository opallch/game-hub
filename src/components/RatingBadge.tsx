import * as React from 'react';
import { Badge, Tooltip } from '@chakra-ui/react';

interface Props{
    rating: number,
}

const RatingBadge = ({rating} : Props) => {
    let color: string;
    if (rating >= 4) color = 'green'
    else if (rating < 3) color = 'red'
    else color = 'yellow'
    
    return (
        <Tooltip label={'average users\' rating'}>
            <Badge fontSize={'md'} colorScheme={color}>{rating}</Badge>
        </ Tooltip>
    );
}
 
export default RatingBadge;
