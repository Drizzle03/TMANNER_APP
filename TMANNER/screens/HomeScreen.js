import React from "react";
import { 
    StyleSheet, View, TouchableWithoutFeedback, Image } from "react-native";

function HomeScreen({ navigation }) {
    const navigateToDetails = () => {
      navigation.navigate('Login', {
        itemId: 86,
        otherParam: 'anything you want here',
      });
    };

    return (
      <TouchableWithoutFeedback onPress={navigateToDetails} >
        <View style={styles.container}>
            <View style={styles.space_top}></View>
            <View style={styles.logobox}>
                <Image source={require('../assets/logo.png')} style={{width: 125, height: 125}} />
            </View>
            <View style={styles.space_bottom}></View>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    space_top:{
        flex:1,
    },
    space_bottom:{
        flex:1,
    },

    logobox:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default HomeScreen;
