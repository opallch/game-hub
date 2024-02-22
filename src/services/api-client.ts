import axios from "axios";

// prepare make http request to fetch games 
export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params:{
        key: import.meta.env.VITE_RAWG_API_KEY,
    }
})
