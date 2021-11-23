import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native";
import RickAndMortyApi, {Character, CharacterListType} from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import CharacterList from "../components/list/CharacterList";

const ListPage = () => {
    const { data, error, loading, request: getCharacters } = useApi<CharacterListType>(RickAndMortyApi.getAllCharacters)
    const [characters, setCharacters] = useState<[Character]>()

    useEffect(() => {
        getCharacters()

        // Setting data into state to make it easier to handle and modify
        if (data?.results != undefined) {
           setCharacters(data?.results)
        }
    }, [])

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    return (
        <SafeAreaView>
            {characters &&
            <CharacterList characters={characters} /> }

        </SafeAreaView>
)
}

export default ListPage;