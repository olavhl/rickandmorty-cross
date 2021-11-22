import React, {useEffect} from "react";
import {Text} from "react-native";
import RickAndMortyApi from "../api/RickAndMortyApi";

const ListPage = () => {
    async function getCharacters() {
        const characters = await RickAndMortyApi.getAllCharacters();
        console.log(characters)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <Text>Heihei</Text>
    )
}

export default ListPage;