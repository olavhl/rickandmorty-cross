import Axios from 'axios';
import {ApiProps} from "../types/Props";

Axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

// Fetching Characters
const getAllCharacters = async () => {
    try {
        const res = await Axios.get<ApiProps>("character")
        return res.data
    } catch (e) {
        throw "Error fetching characters from API " + e
    }
}

// Fetching Episodes
const getAllEpisodes = async () => {
    try {
        const res = await Axios.get<ApiProps>("episode")
        return res.data
    } catch (e) {
        throw "Error fetching characters from API " + e
    }
}

export default {getAllCharacters, getAllEpisodes};