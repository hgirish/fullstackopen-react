import {Text, View, TextInput, Pressable,StyleSheet} from "react-native"
import {useFormik} from "formik";
import * as yup from "yup";
import theme from "../theme";


const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, 'Username must be greater than 1')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password must be greater than 5')
        .required('Password is required'),
});

const styles = StyleSheet.create({

    container: {
        display: "flex",
        flexDirection: "column",
        padding: 10,
        backgroundColor: theme.colors.repoItem,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    button: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        
    },
    buttonText: {
        color: "white",
    },
    error: {
        color: "red",
        paddingLeft: 10,
       // marginLeft: 10,
    }
}
);

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema,
        onSubmit: values => {
            console.log(values);
        },
    });


    return (
        <View style={styles.container}>
        <TextInput style={[styles.input, formik.touched.username && formik.errors.username && {borderColor: 'red'}]}    
          placeholder="username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.error}>{formik.errors.username}</Text>
        )}
        <TextInput style={[styles.input, formik.touched.password && formik.errors.password && {borderColor: 'red'}]}
          
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}
        <Pressable style={styles.button}
        onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

       
      </View>

    )
}

export default SignIn;