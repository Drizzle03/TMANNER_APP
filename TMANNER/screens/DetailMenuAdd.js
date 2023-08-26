import React from 'react';

function DetailMenuAdd(props) {
    const { productId } = route.params;

    const menuItem = categories.flatMap(category => category.content).find(item => item.productId === productId);

    if (!menuItem) return <Text>메뉴를 찾을 수 없습니다.</Text>;

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header navigation={navigation} title="메뉴 수정" />
            <View style={{ flex: 1, padding: 20 }}>
                <Image source={menuItem.image} style={{ width: 150, height: 150 }} />
                <Text >{menuItem.menuName}</Text>
                <Text >{menuItem.price}</Text>
                <Text >{menuItem.status}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },

    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white', // 원하는 배경색으로 변경 가능
    },
});

export default DetailMenuAdd;