import React, {useEffect, useState} from "react";
import {FlatList, Platform, SafeAreaView, StyleSheet} from "react-native";
import RickAndMortyApi from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {ApiProps} from "../types/Props";
import CharacterListItem from "../components/list/CharacterListItem";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../shared/navigation/CharactersStackNavigations";
import {SearchBar} from 'react-native-elements';

const ListPage = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
    const {data, error, loading, request: getCharacters} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)
    const [search, setSearch] = useState("")
    const globalStyle = require("../assets/style");

    useEffect(() => {
        getCharacters().then(() => console.log("Fetched API"))
    }, [])

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    const updateSearch = (searchWord: string) => {
        setSearch(searchWord)
        console.log(search)
    }

    return (
        <SafeAreaView style={globalStyle.mainBackground}>
            <SearchBar
                placeholder={"Search for character"}
                platform={Platform.OS === 'ios' ? 'ios' : 'android'}
                value={search}
                inputContainerStyle={[styles.searchBarContainer, styles.searchField]}
                containerStyle={[styles.searchBarContainer]}
                searchIcon={{color: "white"}}
                style={styles.searchBarContainer}
                onChangeText={(text: string) => updateSearch(text)}

            />
            {data && <FlatList data={data.results}
                               keyExtractor={(item) => item.id.toString()}
                               renderItem={({item}) => <CharacterListItem
                                   onPress={() => navigation.navigate("Details", {character: item})} character={item}/>}
            />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: "#2A2A2A",
        color: "white"

    },
    searchField: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    }
})

export default ListPage;