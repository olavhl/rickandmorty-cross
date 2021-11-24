import Axios from 'axios';
import {ApiProps} from "../types/Props";

Axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const getAllCharacters = async () => {
    try {
        const res = await Axios.get<ApiProps>("character")
        return res.data
    } catch (e) {
        throw "Error fetching characters from API " + e
    }
}
/*
const getCharacter = async (character: number | string) => {
    try {
        const res = await Axios.get<ApiProps>("character")
        return res.data
    } catch (e) {
        throw "Error fetching characters from API " + e
    }
}
*/
export default { getAllCharacters };