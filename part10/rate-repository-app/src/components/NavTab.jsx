import { Text, View, StyleSheet, ScrollView } from "react-native"
import AppBar from "./AppBar"
import Constants from 'expo-constants';
import theme
 from '../theme';
 import { Link, useLocation} from "react-router-native";
const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        marginHorizontal: 16,
        backgroundColor: theme.colors.appBarBackground,
        display:'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: theme.colors.appBarText,
        padding: 5,
    },
    activeLink: {
        color: theme.colors.textActiveLink,
    },
    inactiveLink: {
        color: theme.colors.textInactiveLink,
    },
});
const NavTab = () => {

        const location = useLocation();
        const isActive = location.pathname === "/";
        const linkStyle = isActive ? styles.activeLink : styles.inactiveLink;
        const signInLinkStyle =  !isActive ? styles.activeLink : styles.inactiveLink;
    
    
    return (
        <>
 <View style={styles.container}>
    <ScrollView horizontal>
    <AppBar linkStyle={linkStyle}/>
           <Link to="/signin">
                 <Text style={[styles.title, signInLinkStyle]}>Sign In</Text>
                 </Link>
              
    </ScrollView>
        
       </View>
        </>
    )
}

export default NavTab