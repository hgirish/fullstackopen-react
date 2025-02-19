import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import theme from "../theme";
import Stat from "./Stat";
const styles =  StyleSheet.create({
    flexContainer: {
        alignContent: 'flex-start'
    },
    flexContainerRow : {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around'
    },
    flexContainerCol: {
        flexDirection: 'column',
        padding: 5,
        flex: 1,
    },
    item: {
        display: 'flex',
        backgroundColor: theme.colors.repoItem,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }, 
    logo: {
        width: 66,
        height: 58,
    },
    linkBG: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 4,
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
    link: {
        color: 'white',     
        display: 'inline-flex',
        flexGrow: 0,
        width: 'auto',
        minWidth: 10,

       
       
    },
    textWithPadding: {
        paddingBottom: 2,
    }

})
const RepositoryItem = (props) => {
    const item = props.item;
    return (
    <View style={styles.item}>
        <View style={styles.flexContainerRow}>
        <Image style={styles.logo}
        source={{uri: item.ownerAvatarUrl}}
         />
         <View style={styles.flexContainerCol}>
         <Text style={styles.textWithPadding}>Full name: {item.fullName}</Text>
         <Text style={styles.textWithPadding}>Description: {item.description}</Text>
         <View style={{display: "inline-block", width:'auto'}}>
         <Pressable style={[styles.linkBG, {display: "inline-block", width: 'auto'}]}>
         <Text style={styles.link}>{item.language}</Text>
         </Pressable>
        
         </View>
         </View>
        

        </View>
       
        <View style={styles.flexContainerRow}>
            <Stat value={item.stargazersCount} text="Stars" />
            <Stat value={item.forksCount} text="Forks" />
            <Stat value={item.reviewCount} text="Reviews" />
            <Stat value={item.ratingAverage} text="Rating" />       
        </View>
       
    </View>
    );
}

export default RepositoryItem