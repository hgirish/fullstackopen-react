import {Text, View, TextInput, Pressable} from "react-native"
import {useFormik} from "formik";

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
        onSubmit,
    });

    return (
        <View>
            <TextInput 
            placeholder="Weight in kilograms"
            value={formik.values.mass}
            onChangeText={formik.handleChange("mass")}
            />
            <TextInput
            placeholder="Height in meters"
            value={formik.values.height}
            onChangeText={formik.handleChange("height")}
            />
            <Pressable onPress={formik.handleSubmit}>
                <Text>Calculate</Text>
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