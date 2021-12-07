import {Animated, Dimensions, ImageBackground, Modal, StyleSheet, View} from "react-native";
import React, {useEffect, useRef} from "react";
import {Character} from "../../types/Props";
import {RocketUserSelection} from "../RocketUserSelection";

type Props = {
    showModal: boolean;
    closeModal: () => void;
    characterOne?: Character;
    characterTwo?: Character;
}

const AnimationModal = ({showModal, closeModal, characterOne, characterTwo}: Props) => {
    const translation = useRef(new Animated.Value(0)).current;

    const height = Dimensions.get("window").height

    useEffect(() => {
        Animated.timing(translation, {
            toValue: height,
            duration: 4000,
            useNativeDriver: true,
        }).start(() => {
            closeModal()
        })
    }, [])

    // Setting the translateY to a dynamic variable to be able to animate the value
    const styles = StyleSheet.create({
        container: {
            height: '100%'
        },
        backgroundImage: {
            flex: 1,
            justifyContent: "center",
            flexDirection: "row"
        },
        animationContainer: {
            width: 400,
            height: 200,
            transform: [{translateY: translation}]
        },
    })

    return <Modal animationType={"fade"} visible={showModal}>
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode={"cover"}
                             source={require("../../assets/space.gif")}>
                <Animated.View style={styles.animationContainer}>
                    <ImageBackground style={styles.backgroundImage} source={require("../../assets/spacecar.png")}>
                        <RocketUserSelection circleColor={"white"} character={characterOne}/>
                        <RocketUserSelection circleColor={"white"} character={characterTwo}/>
                    </ImageBackground>
                </Animated.View>
            </ImageBackground>
        </View>
    </Modal>;
}

export default AnimationModal