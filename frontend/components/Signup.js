import React from "react";
import { Button, Input } from 'native-base'
import {
    StyleSheet,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from "react-native";
import { Button, Heading, View, Text, Radio, Stack,Input } from 'native-base';
import axios from 'axios';
import RadioForm from 'react-native-simple-radio-button';
import { setToken } from "../helpers/Token";

export default function Signup({ navigation }) {

    const authContext = useContext(AuthContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("driver");
    const [errors, setErrors] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
    })

    useEffect(() => {
        if (firstName.trim() === "") {
            setErrors({
                ...errors,
                firstNameError: "First name cannot be empty"
            })
        } else {
            setErrors({
                ...errors,
                firstNameError: "",
            });
        }
    }, [firstName])

    useEffect(() => {
        if (lastName.trim() === "") {
            setErrors({
                ...errors,
                lastNameError: "Last name cannot be empty",
            });
        } else {
            setErrors({
                ...errors,
                lastNameError: "",
            });
        }
    }, [lastName])

    useEffect(() => {
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       
        if (email.trim() === "") {
            setErrors({
                ...errors,
                emailError: "Email cannot be empty",
            });
        } else if (!pattern.test(email)) { 
            setErrors({
                ...errors,
                emailError: "Email is not valid",
            });
        }
        else{
            setErrors({
                ...errors,
                emailError: "",
            });
        }
    }, [email])

    useEffect(() => {
        if (password.trim() === "") {
            setErrors({
                ...errors,
                passwordError: "Password cannot be empty",
            });
        } else if (password.trim() !== confirmPassword.trim()) {
            setErrors({
                ...errors,
                confirmPasswordError: "Password does not match",
            });
        } else {
            setErrors({
                ...errors,
                passwordError: "",
                confirmPasswordError: ""
            });
        }
    }, [password])

    useEffect(() => {
        if (confirmPassword.trim() === "") {
            setErrors({
                ...errors,
                confirmPasswordError: "Confirm Password cannot be empty",
            });
        } else if (password.trim() !== confirmPassword.trim()) {
            setErrors({
                ...errors,
                confirmPasswordError: "Password does not match",
            });
        } else {
            setErrors({
                ...errors,
                confirmPasswordError: "",
            });
        }
    }, [confirmPassword]);

    const isDisabled = () => {
        return (
            email.trim() === "" ||
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            password.trim() === "" ||
            confirmPassword.trim() === "" ||
            errors.emailError.trim() !== "" ||
            errors.passwordError.trim() !== "" ||
            errors.confirmPasswordError.trim() !== ""
        );
    }

    const onSubmit = () => {
        const userDetails = {
            firstName, lastName, email, password, role
        }
        registerUser(userDetails)
            .then(async (response) => {
                const [result, error] = response;
                if (error) {
                    console.error(error);
                    return;
                }
                await setToken(result.data.token);
                await setUser(result.data.user);
                authContext.signInUser();
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
       
        <ImageBackground
            source={require("../assets/login.png")}
            style={{ height: Dimensions.get("screen") }.height}
        >
            <View style={styles.container}>
                <Heading size={"2xl"}>Create</Heading>
                <Heading size={"2xl"}>an account</Heading>
                <View>
                    <Text>
                        First name{" "}
                        <Text fontSize={"sm"} color={"red.600"}>
                            {errors.firstNameError}
                        </Text>
                    </Text>
                    <Input
                        background={"white"}
                        placeholder="First name"
                        value={firstName}
                        onChangeText={setFirstName}
                        isInvalid={errors.firstNameError.length > 0}
                    />
                    <Text></Text>
                </View>
                <View paddingY={"1"}>
                    <Text>
                        Last name{" "}
                        <Text fontSize={"sm"} color={"red.600"}>
                            {errors.lastNameError}
                        </Text>
                    </Text>
                    <Input
                        background={"white"}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={setLastName}
                        isInvalid={errors.lastNameError.length > 0}
                    />
                    <Text></Text>
                </View>
                <View paddingY={"1"}>
                    <Text>
                        Email{" "}
                        <Text fontSize={"sm"} color={"red.600"}>
                            {errors.emailError}
                        </Text>
                    </Text>
                    <Input
                        background={"white"}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        isInvalid={errors.emailError.length > 0}
                    />
                    <Text></Text>
                </View>
                <View paddingY={"1"}>
                    <Text>
                        Password{" "}
                        <Text fontSize={"sm"} color={"red.600"}>
                            {errors.passwordError}
                        </Text>
                    </Text>
                    <Input
                        type='password'
                        background={"white"}
                        placeholder="password"
                        value={password}
                        onChangeText={setPassword}
                        isInvalid={errors.passwordError.length > 0}
                    />
                    <Text></Text>
                </View>
                <View paddingY={"1"}>
                    <Text>
                        Confirm Password{" "}
                        <Text fontSize={"sm"} color={"red.600"}>
                            {errors.confirmPasswordError}
                        </Text>
                    </Text>
                    <Input
                        type='password'
                        background={"white"}
                        placeholder="confirm password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        isInvalid={errors.confirmPasswordError.length > 0}
                    />
                    <Text></Text> 
                </View>
                <View paddingY={"1"}>
                    <Text>Register As</Text>
                    <Radio.Group value={role} onChange={setRole}>
                        <Stack
                            direction={"row"}
                            alignItems="center"
                            space={4}
                            w="75%"
                            maxW="300px"
                        >
                            <Radio value="driver">Driver</Radio>
                            <Radio value="passenger">Passenger</Radio>
                        </Stack>
                    </Radio.Group>
                 <Text></Text> 
                </View>
                <View paddingY={"1"}>
                    <Button
                        width={"full"}
                        backgroundColor='#21A656'
                        colorScheme="tertiary"
                        isDisabled={isDisabled()}
                        onPress={onSubmit}
                    >
                        Register
                    </Button>
                        
                </View>
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Already have account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.signupButton}> Login</Text></TouchableOpacity>
                    </View>    
            </View>            
        </ImageBackground>
  
    );

}

const styles = StyleSheet.create({
    container: {
        margin:'3%'        
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    signupButton: {
        fontSize: 20,
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: '500',
    },
    error: {
        borderColor: 'red',
        height: 42,
        width: "80%",
        borderBottomWidth: 1,
        marginTop: "5%"
    },
    success: {
        borderColor: '#006400',
        height: 42,
        width: "80%",
        borderBottomWidth: 1,
        marginTop: "5%"
    },
    errMsg: {
        fontWeight: 'bold',
        color: 'red'
    }
})
