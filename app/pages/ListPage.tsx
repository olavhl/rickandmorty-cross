import React, {useEffect, useState} from "react";
import {Button, SafeAreaView, Text} from "react-native";
const ListPage = () => {
    const [character, setCharacter] = useState<Character>()
    const [error, setError] = useState(false)

    async function getCharacters() {
        try {
            setError(false)
            const characters = await RickAndMortyApi.getAllCharacters();
            setCharacter(characters)
        } catch (e) {
            setError(true)
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])

    if (error) {
        return <>
            <Text>An error did occur</Text>
            <Button title={"Try again"} onPress={getCharacters} />
            </>
    }

    return (
        <SafeAreaView>
            <Text>Heihei</Text>
        </SafeAreaView>
)
}

import RickAndMortyApi, {Character} from "../api/RickAndMortyApi";

export default ListPage;