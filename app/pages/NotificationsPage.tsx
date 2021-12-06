import React, {useEffect, useState} from "react";
import {ImageBackground, Linking, StyleSheet, Text, TextInput, View} from "react-native";
import * as Notifications from "expo-notifications";
import {BlueButton} from "../components/BlueButton";

const NotificationsPage = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const globalStyle = require("../assets/style");

    useEffect(() => {
        getPermission().then(() => console.log("Permission"))
        setNotificationHandler()
    }, [])

    function setNotificationHandler() {
        const handler: Notifications.NotificationHandler = {
            handleNotification: async () => {
                return {
                    shouldPlaySound: true,
                    shouldSetBadge: true,
                    shouldShowAlert: true,
                }
            }
        }
        Notifications.setNotificationHandler(handler)
    }

    async function getPermission() {
        const {granted} = await Notifications.requestPermissionsAsync();
        if (!granted) await Linking.openSettings();
        return granted;
    }

    const triggerNotification = () => {
        if (title === "") {
            setTitle("Default Title")
        } else if (body === "") {
            setBody("Default Body")
        }

        const request: Notifications.NotificationRequestInput = {
            content: {
                title,
                body
            },
            trigger: null,
        };

        Notifications.scheduleNotificationAsync(request).then(() => console.log("Pushed Notification"));

        setTitle("")
        setBody("")
    }

    return <ImageBackground style={[globalStyle.mainBackground, globalStyle.container]}
                            source={require('../assets/rickandmorty.jpeg')}>
        <Text style={[globalStyle.textColor, globalStyle.textStyles, styles.title]}>
            Send a Message to the Gang
        </Text>


        <View style={styles.inputContainer}>
            <TextInput value={title} maxLength={15} onChangeText={setTitle} style={styles.input} placeholder="Title"/>
            <TextInput value={body} maxLength={30} onChangeText={setBody} style={styles.input} placeholder={"Message"}/>
        </View>

        <BlueButton btnText={"Send Notification"} width={200} onPress={triggerNotification}/>
    </ImageBackground>
}

const styles = StyleSheet.create({
    title: {
        marginTop: 100
    },
    inputContainer: {
        marginTop: 250,
        flex: 1,
    },
    input: {
        height: 40,
        width: 225,
        margin: 12,
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default NotificationsPage;