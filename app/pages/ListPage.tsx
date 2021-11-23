import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView, Text} from "react-native";
import RickAndMortyApi, {Character, CharacterListType} from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";

type CharacterProps = {
    character: Character
}

function CharacterList({ character}: CharacterProps) {
    return <Text>{character.name}</Text>;
}

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
//{characters && characters.results.map((character, key) => <Text key={key}>{character.name}</Text>)}
    return (
        <SafeAreaView>
            {characters &&
            <FlatList data={characters}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({item}) => <CharacterList character={item} />}
                      />
                }
        </SafeAreaView>
)
}

export default ListPage;