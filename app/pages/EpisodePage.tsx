import React from "react";
import {Text, View} from "react-native";

const EpisodePage = () => {
    const globalStyle = require("../assets/style");

    return <View style={[globalStyle.mainBackground, globalStyle.container]}>
        <Text style={globalStyle.textColor}>Hello</Text>
    </View>

}

export default EpisodePage;