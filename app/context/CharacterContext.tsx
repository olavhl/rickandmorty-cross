import React, {createContext, FC, useEffect, useState} from "react";
import {ApiProps, Character} from "../types/Props";
import useApi from "../hooks/useApi";
import RickAndMortyApi from "../api/RickAndMortyApi";

export type CharacterContextType = {
    characters: Character[] | undefined;
    error: boolean;
    loading: boolean;
    getCharacters: () => void;
}

export const CharacterContext = createContext<CharacterContextType | null>(null);

export const CharacterProvider: FC = ({children}) => {
    const [characters, setCharacters] = useState<Character[]>();
    const {data: character, error, loading, request: getAllCharacters} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)

    useEffect(() => {
        getAllCharacters().then(() => console.log("Fetched Characters to Context"))
    }, [])

    useEffect(() => {
        setCharacters(character?.results)
    }, [character])

    const getCharacters = () => {
        getAllCharacters().then(() => console.log("Fetched API to Context"))
    }



    return (
        <CharacterContext.Provider value={{characters, error, loading, getCharacters}}>
            {children}
        </CharacterContext.Provider>
    )
}