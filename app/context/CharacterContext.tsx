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
    const {data, error, loading, request} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)

    useEffect(() => {
        request().then(() => console.log("Fetched API to Context"))
    }, [])

    useEffect(() => {
        setCharacters(data?.results)
    }, [data])

    const getCharacters = () => {
        request().then(() => console.log("Fetched API to Context"))
    }

    return (
        <CharacterContext.Provider value={{characters, error, loading, getCharacters}}>
            {children}
        </CharacterContext.Provider>
    )
}