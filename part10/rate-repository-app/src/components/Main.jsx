import { StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
    title: {
        fontSize: 24,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rate Repository Application</Text>

            <RepositoryList />
        </View>
    )
}

export default Main;