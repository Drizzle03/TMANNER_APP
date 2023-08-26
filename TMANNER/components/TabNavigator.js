// CustomTabNavigator.js
import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function DynamicScreenWrapper(tabBarImageSource, detailPageRoute) {
    return function WrappedDynamicScreen(props) {
      return <DynamicScreen {...props} tabBarImageSource={tabBarImageSource} detailPageRoute={detailPageRoute} />;
    }
  }


function DynamicScreen({ route, tabBarImageSource, navigation, detailPageRoute }) {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.categoryTitle}>{route.name}</Text>
            <View style={styles.categorySeparator} />
            {route.params.content.map(menuItem => {
            if (detailPageRoute === 'None') {
                return (
                    <View key={menuItem.menuName} style={styles.menuContainer}>
                        <Image source={menuItem.image} style={{ width: 100, height: 100 }} />
                        <View style={styles.menuRightContainer}>
                            <View style={styles.menuTextContainer}>
                                <Text style={styles.menuName}>{menuItem.menuName}</Text>
                                <Text style={styles.menuPrice}>{menuItem.price}</Text>
                            </View>
                            <Image source={tabBarImageSource} style={{ width: 22, height: 22}} />
                        </View>    
                    </View>
                );
            }

            return (
                <TouchableOpacity
                    key={menuItem.menuName}
                    onPress={() => navigation.navigate(detailPageRoute, { productId: menuItem.productId })}
                >
                    <View style={styles.menuContainer}>
                        <Image source={menuItem.image} style={{ width: 100, height: 100 }} />
                        <View style={styles.menuTextContainer}>
                            <Text style={styles.menuName}>{menuItem.menuName}</Text>
                            <Text style={styles.menuPrice}>{menuItem.price}</Text>
                        </View>
                        <Image source={tabBarImageSource} style={{ width: 22, height: 22 }} />
                    </View>
                </TouchableOpacity>
            );
        })}

        </View>
    );
}

function TabNavigator({ categories, tabBarImageSource, detailPageRoute = 'DetailMenuEdit' }) {
  return (
    <Tab.Navigator 
        screenOptions={styles.tabBarScreenOption} 
        style={{ paddingTop: StatusBar.currentHeight }}>
      {categories.map((category) => (
        <Tab.Screen
          key={category.id}
          name={category.name}
          component={DynamicScreenWrapper(tabBarImageSource, detailPageRoute)}
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
            ),
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={tabBarImageSource} 
                style={{ width: size, height: size, tintColor: color }} 
              />
            )
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBarScreenOption: {
        tabBarActiveTintColor: '#000',
        tabBarItemStyle: { 
            width: 80, 
            height: 40, 
            marginBottom: 20
        },
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 18 },
        tabBarIndicatorStyle: {
            backgroundColor: 'black',
            width: '9%',
            height: '4%',
            left: '4%'
        },
    },
    categoryContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    menuContainer: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    menuTextContainer:{
        width: 200,
        marginRight:5,
        marginLeft:16,
        flexDirection:"column",
    },
    menuRightContainer:{
        flexDirection: "row",
        alignItems: "center", // 여기를 수정했습니다.
        justifyContent: 'space-between',
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


export default TabNavigator;
