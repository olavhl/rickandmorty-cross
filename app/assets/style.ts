import {StyleSheet} from "react-native";

// Global Styling to be able
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
    btnStyle: {
        backgroundColor: "#589ecc",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white"
    },
})