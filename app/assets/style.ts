import {StyleSheet} from "react-native";

module.exports = StyleSheet.create({
    mainBackground: {
        backgroundColor: "#2A2A2A",
    },
    textColor: {
        color: "#FFFFFF",
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    textStyles: {
        width: '80%',
        marginTop: 50,
        fontWeight: 'bold',
        flex: 0.5,
        fontSize: 25,
        textAlign: 'center',
    },
})