import React, {useEffect} from "react";
import {FlatList, SafeAreaView, StyleSheet} from "react-native";
import RickAndMortyApi from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";
import {LoadingView} from "../shared/LoadingView";
import {ErrorView} from "../shared/ErrorView";
import {ApiProps} from "../types/Props";
import CharacterListItem from "../components/list/CharacterListItem";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../shared/navigation/CharactersStackNavigations";

const ListPage = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
    const {data, error, loading, request: getCharacters} = useApi<ApiProps>(RickAndMortyApi.getAllCharacters)

    useEffect(() => {
        getCharacters()
        console.log(data!)
    }, [])

    if (loading) {
        return <LoadingView animating={loading}/>
    }

    if (error) {
        return <ErrorView onPress={() => getCharacters}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            {data && <FlatList data={data}
                               keyExtractor={(item) => item.id.toString()}
                               renderItem={({item}) => <CharacterListItem
                                   onPress={() => navigation.navigate("Details", {character: item})} character={item}/>}
            />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2A2A",
    }
})

export default ListPage;