import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const categories = [
    {id: '01', name: '메인',
        content: [
            {
                menuName: '메뉴1',
                price: '10,000원',
                status: '판매중'
            }, {
                menuName: '메뉴2',
                price: '12,000원',
                status: '품절'
            }]},
    {id: '02', name: '사이드',
    content: [
        {
            menuName: '메뉴1',
            price: '10,000원',
            status: '판매중'
        }, {
            menuName: '메뉴2',
            price: '12,000원',
            status: '품절'
        }]},
    {id: '03', name: '탕류',
        content: [
            {
                menuName: '메뉴1',
                price: '10,000원',
                status: '판매중'
            }, {
                menuName: '메뉴2',
                price: '12,000원',
                status: '품절'
            }]},
    {id: '04', name: '튀김류',
    content: [
        {
            menuName: '메뉴1',
            price: '10,000원',
            status: '판매중'
        }, {
            menuName: '메뉴2',
            price: '12,000원',
            status: '품절'
        }]},
    {id: '05', name: '주류',
        content: [
            {
                menuName: '메뉴1',
                price: '10,000원',
                status: '판매중'
            }, {
                menuName: '메뉴2',
                price: '12,000원',
                status: '품절'
            }]},
    {id: '06', name: '기타',
    content: [
        {
            menuName: '메뉴1',
            price: '10,000원',
            status: '판매중'
        }, {
            menuName: '메뉴2',
            price: '12,000원',
            status: '품절'
        }]}
];

function DynamicScreen({ route }) {
    // 메인 카테고리인지 확인
    if (route.params.name === "메인") {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                {categories.map(category => (
                    <View key={category.id} style={styles.categoryContainer}>
                        <Text style={styles.categoryTitle}>{category.name}</Text>
                        {category.content.map(menuItem => (
                            <View key={menuItem.menuName} style={styles.menuContainer}>
                                <Text style={styles.menuName}>{menuItem.menuName}</Text>
                                <Text style={styles.menuPrice}>{menuItem.price}</Text>
                                <Text style={styles.menuStatus}>{menuItem.status}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        );
    } else {
        // 메인 카테고리가 아닌 경우 해당 카테고리의 메뉴만 출력
        return (
            <View style={{ flex: 1, padding: 20 }}>
                {route.params.content.map(menuItem => (
                    <View key={menuItem.menuName} style={styles.menuContainer}>
                        <Text style={styles.menuName}>{menuItem.menuName}</Text>
                        <Text style={styles.menuPrice}>{menuItem.price}</Text>
                        <Text style={styles.menuStatus}>{menuItem.status}</Text>
                    </View>
                ))}
            </View>
        );
    }
}

function SoldOutTabs({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            {/* 상단 헤더  */}
            <View style={styles.container}>
                {/* 이미지를 TouchableOpacity로 감쌉니다 */}
                <TouchableOpacity onPress={() => navigation.navigate('Main')}> 
                    <Image source={require('../assets/BackBtn.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>메뉴 품절 등록</Text>
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
        fontSize:24,
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
            left: '3.8%'          // 위치 조절
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
    },
    menuName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    menuPrice: {
        fontSize: 16,
        color: '#666',
    },
    menuStatus: {
        fontSize: 16,
        color: 'red',
    },
});

export default SoldOutTabs;
