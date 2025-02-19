import { Text, View , StyleSheet} from "react-native"

const styles =  StyleSheet.create({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    flexContainerRow : {
        flexDirection: 'row',
        padding: 5,
    },
    flexContainerCol: {
        flexDirection: 'column',
        padding: 5,
        flex: 1,
    },
})
const Stat = ({value, text}) => {
    const displayValue = Number(value) > 1000 ? (Number(value)/1000).toFixed(1) + 'k' : value;
    return (
    <View style={styles.flexContainer}>
        <Text>{displayValue}</Text>
        <Text>{text}</Text>
    </View>
    )

}

export default Stat