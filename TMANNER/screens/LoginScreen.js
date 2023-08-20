import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";

function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>로그인</Text>
            
            <TextInput 
                style={styles.input}
                placeholder="이메일"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput 
                style={styles.input}
                placeholder="비밀번호"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                autoCapitalize="none"
            />

            <Button title="로그인" onPress={() => { /* 로그인 처리 */ }} />
            <Button title="회원가입" onPress={() => { /* 회원가입 페이지로 이동 */ }} />
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
        fontFamily: 'SUIT-Bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        fontFamily: 'SUIT-Regular',
    },
});

export default LoginScreen;
