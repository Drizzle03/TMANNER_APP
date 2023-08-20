import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'react-native';


const Tab = createMaterialTopTabNavigator();
const categories = [
    { id: '01', name: '메인', content: 'Main Content' },
    { id: '02', name: '사이드', content: 'Side Content' },
    { id: '03', name: '탕류', content: 'Drink Content' },
    { id: '04', name: '튀김류', content: 'Drink Content' },
    { id: '05', name: '주류', content: 'Drink Content' },
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
            <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
                {categories.map((category) => (
                    <Tab.Screen
                        key={category.id}
                        name={category.name}
                        component={DynamicScreen}
                        initialParams={{ content: category.content }}
                    />
                ))}
            </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white', // 원하는 배경색으로 변경 가능
    }
});

export default SoldOutTabs;
