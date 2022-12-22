import axios from "axios";

export const animeAPI = axios.create({
    baseURL: "https://api.jikan.moe/v4/anime?q="
})