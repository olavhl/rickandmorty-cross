import React, {useEffect} from "react";
import {SafeAreaView} from "react-native";
import RickAndMortyApi from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {CharacterListProps} from "../types/Props";
import CharacterList from "../components/list/CharacterList";

const ListPage = () => {
    const { data: characters, error, loading, request: getCharacters } = useApi<CharacterListProps>(RickAndMortyApi.getAllCharacters)

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
            {characters && <CharacterList characters={characters}/>}
        </SafeAreaView>
)
}

export default ListPage;