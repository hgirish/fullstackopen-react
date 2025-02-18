import { StyleSheet, Text, View } from "react-native"
const styles =  StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
})
const RepositoryItem = (props) => {
    const item = props.item;
    return (
    <View style={styles.item}>
        <Text>Full name: {item.fullName}</Text>
        <Text>Description: {item.description}</Text>
        <Text>Language: {item.language}</Text>
        <Text>Stars: {item.stargazersCount}</Text>
        <Text>Forks: {item.forksCount}</Text>
        <Text>Reviews: {item.reviewCount}</Text>
        <Text>Rating: {item.ratingAverage}</Text>
    </View>
    );
}

export default RepositoryItem