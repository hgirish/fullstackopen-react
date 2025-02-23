import {Text, View, TextInput, Pressable,StyleSheet} from "react-native"
import {useFormik} from "formik";
import * as yup from "yup";

const styles = StyleSheet.create({

    container: {
        display: "flex",
        flexDirection: "column",
        padding: 10,
        backgroundColor: "white",
        margin:10,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: "white",
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

const validationSchema = yup.object().shape({
    mass: yup
        .number()
        .min(1, 'Weight must be greater than equal to 1')
        .required('Weight is required'),
    height: yup
        .number()
        .min(0.5, 'Height must be greater than equal to 0.5')
        .required('Height is required'),
});
const initialValues = {
    mass: "",
    height: "",   
};

const getBodyMassIndex = (mass, height) => {
    return Math.round(mass / Math.pow(height, 2));
}

const BodyMassIndexForm = ({onSubmit}) =>{
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={styles.container}>
            {formik.touched.mass && formik.errors.mass && (
                <Text style={{color: 'red'}}>{formik.errors.mass}</Text>
            )}
            {formik.touched.height && formik.errors.height && (
                <Text style={{color: 'red'}}>{formik.errors.height}</Text>
            )}
            <TextInput style={styles.input}
            placeholder="Weight in kilograms"
            value={formik.values.mass}
            onChangeText={formik.handleChange("mass")}
            />
            <TextInput style={styles.input}
            placeholder="Height in meters"
            value={formik.values.height}
            onChangeText={formik.handleChange("height")}
            />
            <Pressable  style={styles.button}
            onPress={formik.handleSubmit}>
                <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>
        </View>
    );
}

const BodyMassIndexCalculator = () => {
    let bmi = 0;
    const onSubmit = values => {
        const mass = parseFloat(values.mass);
        const height = parseFloat(values.height);
        
        if (!isNaN(mass) && !isNaN(height) && height > 0) {
             bmi = getBodyMassIndex(mass, height);
            console.log(`Body mass index is ${bmi}`);
        }
    };

    return (
        <>
        <BodyMassIndexForm onSubmit={onSubmit}/>
        <Text>BMI: {bmi}</Text>  
        </>
    );
}

export default BodyMassIndexCalculator;