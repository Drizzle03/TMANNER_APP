import categories from '../assets/data/data';
import { StyleSheet, View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';

function DetailMenuEditScreen({ route }) {
    const { productId } = route.params;

    const menuItem = categories.flatMap(category => category.content).find(item => item.productId === productId);

    if (!menuItem) return <Text>메뉴를 찾을 수 없습니다.</Text>;

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Image source={menuItem.image} style={{ width: 150, height: 150 }} />
            <Text >{menuItem.menuName}</Text>
            <Text >{menuItem.price}</Text>
            <Text >{menuItem.status}</Text>
        </View>
    );
}

export default DetailMenuEditScreen;