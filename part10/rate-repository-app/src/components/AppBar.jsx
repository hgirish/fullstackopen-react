import {View,StyleSheet, Text, Pressable} from 'react-native';
import Constants from 'expo-constants';
import theme
 from '../theme';
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        marginHorizontal: 16,
        backgroundColor: theme.colors.appBarBackground,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: theme.colors.appBarText,
        padding: 5,
    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <Pressable>
        <Text style={styles.title}>Repositories</Text></Pressable>
    </View>;
    
}

export default AppBar;