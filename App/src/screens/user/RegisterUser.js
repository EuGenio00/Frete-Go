<<<<<<< HEAD:App/src/screens/RegisterUser.js
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from '../api'
import {Picker} from '@react-native-picker/picker';

const RegisterUser = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const data = await api.post('/user/register', {
                name: name,
                email: email,
                password: password,
                admin: admin
            });
            if (data.status === 200) {
                console.log(data)
                alert(data.data.message)
                navigation.navigate('Login')
            } else {
                console.log(data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Name"
                value={name}
                setValue={setName}
            />

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
   
            <Picker
                selectedValue={admin}
                style={styles.picker}
                onValueChange={setAdmin}
            >
                <Picker.Item label="Cliente Condutor" value="true" />
                <Picker.Item label="Cliente Regular" value="false" />
            </Picker>

            <CustomButton text="Register" onPress={onRegisterPressed} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.text}>
                    Já tem uma conta?{" "}
                    <Text style={styles.loginText}>Faça o login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#272933'
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#daa520",
    },
    text: {
        color: "#fff"
    },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#ffeec0',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '100%'
    }
});

=======
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../../assets/images/Logo.png'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import api from '../../api'
import {Picker} from '@react-native-picker/picker';

const RegisterUser = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const data = await api.post('/user/register', {
                name: name,
                email: email,
                password: password,
                admin: admin
            });
            if (data.status === 200) {
                console.log(data)
                alert(data.data.message)
                navigation.navigate('Login')
            } else {
                console.log(data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Name"
                value={name}
                setValue={setName}
            />

            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />

            <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
   
            <Picker
                selectedValue={admin}
                style={styles.picker}
                onValueChange={setAdmin}
            >
                <Picker.Item label="Cliente Condutor" value="true" />
                <Picker.Item label="Cliente Regular" value="false" />
            </Picker>

            <CustomButton text="Register" onPress={onRegisterPressed} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.text}>
                    Já tem uma conta?{" "}
                    <Text style={styles.loginText}>Faça o login</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#272933',
        flex: 1
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#daa520",
    },
    text: {
        color: "#fff"
    },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#ffeec0',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '100%'
    }
});

>>>>>>> fdf95146aa0cee8d798fca5141e4c93ef38c43b0:App/src/screens/user/RegisterUser.js
export default RegisterUser;