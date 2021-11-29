import React from "react";
import {SafeAreaView, Text} from "react-native";

const NotificationsPage = () => {
    const globalStyle = require("../assets/style");

    return <SafeAreaView style={[globalStyle.mainBackground, globalStyle.container]}>
        <Text style={[globalStyle.textColor, globalStyle.textStyles]}>
            Create a Notification
        </Text>
    </SafeAreaView>
}

export default NotificationsPage;