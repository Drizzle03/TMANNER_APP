import React from "react";
import { Image, View, Text, StyleSheet, ScrollView, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MainScreen(props) {
    const navigation = useNavigation();


    return (
        <ScrollView 
            style={{flex: 1}} 
            showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Text style={styles.title}>만취</Text>

                <View style={styles.monthSalesContainer}>
                    <Text style={styles.guideText}>이번달 매출이에요!</Text>
                    <View style={styles.priceMonthContainer}>
                        <Text style={styles.monthSalesText}>1,340,000원</Text>
                        <View style={styles.logobox}>
                            <Image source={require('../assets/source/nextBtn.png')} style={{width: 25, height: 25}} />
                        </View>
                    </View>
                </View>

                {/* 누적매출 */}
                <View style={styles.cumulativeSales}>
                    <Text style={styles.guideText}>누적매출</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.cumulativeSalesText}>123,599,000원</Text>
                        <View style={styles.period}>
                            <Text style={{color:"#fff"}}>2021년 7월부터 운영중</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.MenuMangeContainer}>
                    <Text style={styles.MenubtnTitle}>내 가게 메뉴판 관리</Text>
                    <View style={styles.MenuBtnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SoldOut')}>
                            <Text style={styles.btnTitle}>메뉴 품절등록</Text>
                            <Text style={styles.btnIcon}>🚨</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MenuEdit')}>
                            <Text style={styles.btnTitle}>메뉴 관리</Text>
                            <Text style={styles.btnSubTitle}>메뉴 수정/삭제</Text>
                            <Text style={styles.btnIcon}>🔧</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test')}>
                            <Text style={styles.btnTitle}>카테고리 관리</Text>
                            <Text style={styles.btnSubTitle}>카테고리 추가/등록/삭제</Text>
                            <Text style={styles.btnIcon}>📋</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test')}>
                            <Text style={styles.btnTitle}>메뉴 등록</Text>
                            <Text style={styles.btnIcon}>🧑🏼‍🍳</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Backup')}>
                            <Text style={styles.btnTitle}>제공 서비스 등록</Text>
                            <Text style={styles.btnSubTitle}>주문함과 동시에 고객들에게 서비스 제공이 가능해요</Text>
                            <Text style={styles.btnIcon}>🙌🏾</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 30,
        marginTop: 60,
    },


    title:{
        marginTop:44,
        fontSize: 35,
        fontWeight: 'bold',
    },


    monthSalesContainer:{
        marginTop: 44,
    },

    priceMonthContainer:{
        marginTop: 15,
        flexDirection:"row",
        alignItems: "center",
    },

    guideText:{
        color: '#000',
        fontSize: 17,
        fontWeight: 'normal',
    },

    monthSalesText:{
        color: '#000',
        fontSize: 40,
        fontWeight: '700',
        lineHeight: 40,
        marginRight: 10,
    },

    cumulativeSales:{
        marginTop:30
    },

    priceContainer:{
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center"
    },

    cumulativeSalesText:{
        fontSize: 20,
        fontWeight: 600,
        marginRight:10
    },

    period: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#9C9C9C',
    },
    MenuMangeContainer:{
        marginTop:30,
    },

    MenubtnTitle:{
        fontSize:20,
        fontWeight: 'bold',
        marginBottom:20,
    },

    MenuBtnContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // 버튼 사이의 간격을 균등하게
    },
    btn:{
        width: 160,
        height: 160,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#000000',
        paddingLeft: 15,
        paddingTop: 25,
        marginBottom: 10,
    },

    btnTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },
    btnSubTitle:{
        fontSize: 14,
        color: '#fff',
        fontWeight: '200',
        marginTop: 4
    },
    btnIcon:{
        position: 'absolute',
        right: 10,  // 오른쪽에서의 간격
        bottom: 15, // 하단에서의 간격
        fontSize: 50,
    }

});

export default MainScreen;