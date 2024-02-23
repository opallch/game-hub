import React, {useEffect, useState } from 'react';
import gameService from '../services/game-service'
import { CanceledError } from 'axios';

export interface Platform{
    id: number,
    name: string,
    slug: string
}

export interface Game{
    id: number;
    name: string;
    background_image: string; // url
    parent_platforms: {platform: Platform}[];
    rating: number;
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]); // add an empty list as state
    const [error, setError] = useState("");
    
    useEffect(
        () => {
        const {request, cancel} =  gameService.getAll();

            request
                .then(res => setGames(res.data.results)) // success 
                .catch((err) => {
                    // CanceledError is raised when controller.abort() is called
                    if (err instanceof CanceledError) return; 
                    setError(err.message);
            })        
        // clean-up: cancel all fetch request before unmounting
        return cancel;
        }, [] // request will be sent constantly without deps
    )
    return {games, error}
}

export default useGames;
