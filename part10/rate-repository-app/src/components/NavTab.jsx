import { Text, View } from "react-native"
import AppBar from "./AppBar"
import {  Link} from "react-router-native";

const NavTab = () => {
    return (
        <>
 <View>
         <AppBar />
           <Link to="/signin">
                 <Text>Sign In</Text>
                 </Link>
       </View>
        </>
    )
}

export default NavTab