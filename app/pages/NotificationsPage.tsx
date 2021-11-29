import React, {useEffect} from "react";
import {Button, Linking, SafeAreaView, Text, TextInput} from "react-native";
import * as Notifications from "expo-notifications";

const NotificationsPage = () => {
    const globalStyle = require("../assets/style");

    useEffect(() => {
        //getToken()
        getPermission().then(()  => console.log("Permission"))
        setNotificationHandler()
    },[])

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

    /*async function getToken() {
        try {
            const granted = await getPermission();
            if (!granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token)

        } catch (e) {
            console.error("Something went wrong fetching token", e)
        }
    }
    */

    async function getPermission() {
        const {granted} = await Notifications.requestPermissionsAsync();
        if (!granted) await Linking.openSettings();
        return granted;
    }


    const triggerNotification = () => {
        const request: Notifications.NotificationRequestInput = {
            content: {
                title: "Notification",
                body: "This is working"
            },
            trigger: null,
        };

        Notifications.scheduleNotificationAsync(request).then(() => console.log("Pushed Notification"));
    }

    return <SafeAreaView style={[globalStyle.mainBackground, globalStyle.container]}>
        <Text style={[globalStyle.textColor, globalStyle.textStyles]}>
            Create a Notification
        </Text>

        <TextInput placeholder={"Title"}/>
        <TextInput placeholder={"Body"}/>

        <Button title={"Trigger me"} onPress={triggerNotification}/>
    </SafeAreaView>
}

export default NotificationsPage;