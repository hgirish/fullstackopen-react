import {View,StyleSheet, Text} from 'react-native';
import theme  from '../theme';
 import { Link} from "react-router-native";

const styles = StyleSheet.create({
   
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: theme.colors.appBarText,
        padding: 5,
    },
 
});

const AppBar = ({linkStyle}) => {

    return <View >
        <Link to="/">
       
        <Text style={[styles.title, linkStyle]}>Repositories</Text>
       
        </Link>
    </View>;
    
}

export default AppBar;