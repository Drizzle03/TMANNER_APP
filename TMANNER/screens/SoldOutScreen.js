import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const categories = [
    { id: '01', name: '메인', content: 'Main Content' },
    { id: '02', name: '사이드', content: 'Side Content' },
    { id: '03', name: '탕류', content: 'Drink Content' },
    { id: '04', name: '튀김류', content: 'Drink Content' },
    { id: '05', name: '주류', content: 'Drink Content' },
    { id: '06', name: '기타', content: 'Drink Content' },
    { id: '07', name: '기타타', content: 'Drink Content' },
];

function DynamicScreen({ route }) {
    // route.params.content에 카테고리별 내용이 들어있습니다.
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{route.params.content}</Text>
      </View>
    );
}

function SoldOutTabs() {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Image source={require('../assets/BackBtn.png')}></Image>
                <Text style={styles.title}>메뉴 품절 등록</Text>
            </View>
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
});

export default SoldOutTabs;
