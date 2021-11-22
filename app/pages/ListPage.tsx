import React, {useEffect} from "react";
import {ActivityIndicator, Button, SafeAreaView, Text} from "react-native";
const ListPage = () => {
    const { data: characters, error, loading, request } = useApi<Character>(RickAndMortyApi.getAllCharacters)

    useEffect(() => {
        request()
    }, [])

    if (loading) {
        return <ActivityIndicator animating={loading} size={"large"} />
    }

    if (error) {
        return <>
            <Text>An error did occur</Text>
            <Button title={"Try again"} onPress={request} />
            </>
    }

    return (
        <SafeAreaView>
            <Text>Hello</Text>
        </SafeAreaView>
)
}

import RickAndMortyApi, {Character} from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";

export default ListPage;