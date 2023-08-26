import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SelectList } from 'react-native-dropdown-select-list';

import categories from '../assets/data/data';

const Tab = createMaterialTopTabNavigator();

function DynamicScreen({ route }) {

    const [menuStatuses, setMenuStatuses] = useState(route.params.content.map(menuItem => menuItem.status));

    // 상태 변경 핸들러
    const updateStatus = (index, newStatus) => {
        const updatedStatuses = [...menuStatuses];
        updatedStatuses[index] = newStatus;
        setMenuStatuses(updatedStatuses);
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.categoryTitle}>{route.name}</Text>
            <View style={styles.categorySeparator} />
            {route.params.content.map((menuItem, index) => (
                <View key={menuItem.menuName} style={styles.menuContainer}>
                    {/* 상단 카테고리 이름과 선 */}
                    
                    {/* 메뉴 아이템 */}
                    <Image source={menuItem.image} style={{ width: 100, height: 100 }} />
                    <View style={styles.menuTextContainer}>
                        <Text style={styles.menuName}>{menuItem.menuName}</Text>
                        <Text style={styles.menuPrice}>{menuItem.price}</Text>
                    </View>
                    {/* status 부분을 이미지로 변경 */}
                    {/* <Image 
                        source={menuStatuses[index] === '품절' ? require('../assets/ProductStatus02.png') : require('../assets/ProductStatus01.png')} 
                        style={{ width: 68, height: 30 }}  
                    /> */}
                    {/* 드롭다운 박스 추가 */}
                    <SelectList 
                        setSelected={val => updateStatus(index, val)}
                        data={[
                            { key: '1', value: '품절' },
                            { key: '2', value: '판매중' }
                        ]}
                        save="value"
                        placeholder={menuStatuses[index]}
                        boxStyles={{borderRadius:0}}
                        dropdownStyles={{borderRadius:0}}
                        search={false}   // 스타일 적용
                    />
                </View>
            ))}
        </View>
    );
}



function BackupScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            {/* 상단 헤더  */}
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}> 
                    <Image source={require('../assets/source/BackBtn.png')} />
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
        tabBarLabelStyle: { fontSize: 18  },
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
        marginRight:5,
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
    dropdownBox: {
        borderWidth: 1, // 테두리 두께
        borderColor: '#000', // 테두리 색상
        borderRadius: 0, // 모서리 둥글게
        padding: 5, // 내부 패딩
        width: 100, // 박스의 너비
        height: 40, // 박스의 높이
    }

});

export default BackupScreen;
