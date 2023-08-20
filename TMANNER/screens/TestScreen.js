import React from "react";
import { Button, View, Text, StyleSheet } from 'react-native';

function TestScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>기능 추가 예정 페이지입니다.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
       fontSize:30,
    }
});

export default TestScreen;
