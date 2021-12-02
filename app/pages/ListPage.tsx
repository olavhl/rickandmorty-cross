import React, {useEffect, useState} from "react";
import {FlatList, Platform, SafeAreaView, StyleSheet} from "react-native";
import RickAndMortyApi from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {ApiProps, Character} from "../types/Props";
import CharacterListItem from "../components/list/CharacterListItem";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../shared/navigation/CharactersStackNavigations";
import {SearchBar} from 'react-native-elements';

const ListPage = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
    const {data, error, loading, request: getCharacters} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)
    const [searchList, setSearchList] = useState<Character[]>()
    const [search, setSearch] = useState("")
    const globalStyle = require("../assets/style");

    useEffect(() => {
        getCharacters().then(() => console.log("Fetched API"))
        if (data) {
            setSearchList(data.results)
        }
    }, [])

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    const updateSearch = (searchWord: string) => {
        setSearch(searchWord)

        if (searchWord !== "") {
            const newList = searchList?.filter((character) => (character.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())))

            if (newList !== undefined) {
                setSearchList(newList)
            }
        } else {
            setSearchList(data?.results)
        }
        console.log(search)
    }

    return (
        <SafeAreaView style={[globalStyle.mainBackground, styles.container]}>
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
            {data && searchList && <FlatList data={searchList}
                               keyExtractor={(item) => item.id.toString()}
                               renderItem={({item}) => <CharacterListItem
                                   onPress={() => navigation.navigate("Details", {character: item})} character={item}/>}
            />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    searchBarContainer: {
        backgroundColor: "#2A2A2A",
        color: "white"

    },
    searchField: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
    }
})

export default ListPage;