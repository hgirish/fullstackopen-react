import {View,StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <Text style={styles.title}>Repositories</Text>
    </View>;
    
}

export default AppBar;