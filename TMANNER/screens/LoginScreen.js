import React, { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function LoginScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.inputcontainer}>
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
                <View>
                    <View style={styles.inputBottomContainer}>
                        <View style={styles.checkBoxContainer}>
                            <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                                <MaterialIcons
                                    name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                            <Text style={styles.checkboxText}>로그인 유지</Text>
                        </View>
                        <TouchableOpacity onPress={() => { /* 비밀번호 찾기 페이지로 이동 */ }}>
                            <View style={styles.forgotPasswordContainer}>
                                <Text>비밀번호 찾기</Text>
                                <MaterialIcons
                                    name="keyboard-arrow-right"
                                    size={24}
                                    color="#000"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.loginButtonText}>로그인하기</Text>
                </TouchableOpacity>

                <View style={styles.signUpContainer}>
                    <Text>아직 띵동에 가입 안하셨나요?</Text>
                    <TouchableOpacity style={styles.signUpButton} onPress={() => { /* 로그인 처리 */ }}>
                        <Text style={styles.signUpButtonText}>회원가입 하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    inputcontainer: {
        flex: 1,
        marginTop: 150,
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
        fontWeight: "bold",
        color: '#000',
    },

    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 15,
        fontSize: 14,
    },

    inputBottomContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },

    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkboxText: {
        marginLeft: 8,
        marginRight: 8,
    },

    forgotPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    loginButton: {
        height: 50,
        backgroundColor: '#D1D1D1',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 20,
    },

    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    signUpButton: {
        width: '100%', // 이 줄 추가
        height: 50,
        paddingVertical:14,
        paddingHorizontal: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 10
    },

    signUpButtonText: {
        color: '#000',
        fontWeight: 'bold'
    },

    signUpContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },
});

export default LoginScreen;
