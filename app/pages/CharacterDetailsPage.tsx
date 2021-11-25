import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

import {RootStackParamList} from "../shared/navigation/CharactersStackNavigations";
import {Sprite} from "../components/Sprite";
import {DetailsInfo} from "../components/details/DetailsInfo";

const CharacterDetailsPage = ({route}: NativeStackScreenProps<RootStackParamList, "Details">) => {
    const character = route.params.character
    const globalStyle = require("../assets/style");

    const width = (Dimensions.get('window').width) * 0.5;


    return (
        <View style={[globalStyle.mainBackground, styles.container]}>
            <Sprite style={styles.sprite} uri={character.image} height={width} width={width}/>
            <Text style={[globalStyle.textColor, styles.name]}>{character.name}</Text>
            <View style={styles.details}>
                <DetailsInfo circleColor={"#6abef5"} iconName={"fingerprint"} textName={character.species} />
                <DetailsInfo circleColor={"#8685EF"} iconName={"heartbeat"} textName={character.status}/>
                <DetailsInfo circleColor={"#63B9C1"} iconName={"globe-americas"} textName={character.origin.name} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sprite: {
        marginTop: 30,
        flex: 1.75,
        borderRadius: 25
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30
    },
    details: {
        flex: 3,
        flexDirection: 'column',
        marginBottom: 30
    }
})

export default CharacterDetailsPage;