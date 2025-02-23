import {  StyleSheet, View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import theme from "../theme";
import { Navigate, Route, Routes} from "react-router-native";
import SignIn from "./SignIn";
import NavTab from "./NavTab";
import BodyMassIndexCalculator from "./samples/BodyMassIndexCalculator";
import WhatIsMyPlatform from "./samples/WhatIsMyPlatform";

const styles = StyleSheet.create({
    container: {
       
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.main,
    },
    title: {
        fontSize: 24,
    },
    font: {
        fontFamily: theme.fonts.main,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
         <NavTab />
       <View>
       
       </View>
         <Routes>
            <Route path="/" element={<RepositoryList />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/bmi" element={<BodyMassIndexCalculator />} />
            <Route path="/sample" element={<Text>Sample</Text>} />
            <Route path="/platform" element={<WhatIsMyPlatform />} />
            <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>
           
        </View>
    )
}

export default Main;