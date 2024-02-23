import { useEffect, useState } from "react";
import genreService from "../services/genre-service";
import { CanceledError } from "axios";

export interface Genre{
    id: number,
    name: string,
    slug: string,
    image_background: string,
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const {request, cancel} = genreService.getAll();
    
    useEffect(
        () => {
        request
            .then(res => setGenres(res.data.results))
            .catch(err =>{
                if (err instanceof CanceledError) return;
                setError(err.message);
                });

        return cancel;
    }, [])
    
    return {genres, error};
}
 
export default useGenres;
