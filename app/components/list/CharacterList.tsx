import {Character} from "../../api/RickAndMortyApi";
import {FlatList} from "react-native";
import CharacterListItem from "./CharacterListItem";
import React from "react";

type CharacterListProps = { characters: [character: Character] };

function CharacterList({characters}: CharacterListProps) {
    return <FlatList data={characters}
                     keyExtractor={(item) => item.id.toString()}
                     renderItem={({item}) => <CharacterListItem character={item}/>}
    />;
}

export default CharacterList;