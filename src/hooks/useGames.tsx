import React, {useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Game{
    id: number;
    name: string;
}

interface FetchGamesResponse{
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]); // add an empty list as state
    const [error, setError] = useState("");
    
    useEffect(
        () => {
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results)) // success 
            .catch((err) => {
                // CanceledError is raised when controller.abort() is called
                if (err instanceof CanceledError) return; 
                setError(err.message);
            })        
        // clean-up: cancel all fetch request before unmounting
        return () => controller.abort(); 
        }, [] // request will be sent constantly without deps
    )
    return {games, error}
}

export default useGames;
