import React, {useEffect} from "react";
import {SafeAreaView, Text} from "react-native";
import RickAndMortyApi, {Character} from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";

const ListPage = () => {
    const { data: characters, error, loading, request: getCharacters } = useApi<Character>(RickAndMortyApi.getAllCharacters)

    useEffect(() => {
        getCharacters()
    }, [])

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    return (
        <SafeAreaView>
            {characters && characters.results.map((character, key) => <Text key={key}>{character.name}</Text>)}
        </SafeAreaView>
)
}

export default ListPage;