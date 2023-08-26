import React, { useRef } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import categories from '../assets/data/CategoriesData';

const Tab = createMaterialTopTabNavigator();

function DynamicScreen({ route }) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.categoryTitle}>{route.name}</Text>
            <View style={styles.categorySeparator} />
            {route.params.content.map(menuItem => (
                <View key={menuItem.menuName} style={styles.menuContainer}>
                    {/* 상단 카테고리 이름과 선 */}
                    
                    {/* 메뉴 아이템 */}
                    <Image source={menuItem.image} style={{ width: 100, height: 100 }} />
                    <View style={styles.menuTextContainer}>
                        <Text style={styles.menuName}>{menuItem.menuName}</Text>
                        <Text style={styles.menuPrice}>{menuItem.price}</Text>
                    </View>
                    {/* status 부분을 이미지로 변경 */}
                    <Image source={require('../assets/source/editBtn.png')} 
                        style={{ width: 22, height: 22 }}  // 이미지 크기는 적절히 조절해주세요
                    />
                </View>
            ))}
        </View>
    );
}

function MenuEditScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            {/* 상단 헤더  */}
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}> 
                    <Image source={require('../assets/source/BackBtn.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>메뉴 수정</Text>
            </View>

            {/* 네비게이션바 */}
            <Tab.Navigator 
                screenOptions={styles.tabBarScreenOption} 
                style={{ paddingTop: StatusBar.currentHeight }}>
                {categories.map((category) => (
                    <Tab.Screen
                        key={category.id}
                        name={category.name}
                        component={DynamicScreen}
                        initialParams={{ content: category.content }}
                        options={({ route, focused }) => ({
                            tabBarLabel: ({ color, focused }) => (
                                <Text style={{
                                    fontSize: 18,
                                    color: color,
                                    fontWeight: focused ? 'bold' : 'normal'
                                }}>
                                    {route.name}
                                </Text>
                            )
                        })}
                    />
                ))}
            </Tab.Navigator>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },

    title:{
        fontSize:26,
        fontWeight: 'bold',
        marginTop:16
    },
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white', // 원하는 배경색으로 변경 가능
    },
    tabBarScreenOption: {
        tabBarActiveTintColor: '#000',
        tabBarItemStyle: { width: 80, height: 50 },
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 18 },
        tabBarIndicatorStyle: {
            backgroundColor: 'black',
            width: '7%',        // 길이를 원하는 만큼 조절
            height: '5%',
            left: '5%'          // 위치 조절
        },
    },
    categoryContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    menuContainer: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    menuTextContainer:{
        width: 150,
        marginRight:55,
        marginLeft:16,
        flexDirection:"column",
    },
    menuName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 6,
    },
    menuPrice: {
        fontSize: 16,
        color: '#757575',
    },
    menuStatus: {
        fontSize: 16,
        color: 'red',
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 12
    },
    categorySeparator: {
        height: 1,
        backgroundColor: '#D9D9D9',
        marginBottom: 16,
    },

});


export default MenuEditScreen;