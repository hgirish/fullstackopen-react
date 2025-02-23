import {Text, View, TextInput, Pressable,StyleSheet} from "react-native"
import {useFormik} from "formik";

const styles = StyleSheet.create({

    container: {
        display: "flex",
        flexDirection: "column",
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        
    },
    buttonText: {
        color: "white",
    }
}
);

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: values => {
            console.log(values);
        },
    });


    return (
        <View>
        <TextInput style={styles.input}
          placeholder="username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        <TextInput style={styles.input}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        <Pressable style={styles.button}
        onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    )
}

export default SignIn;