import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from 'react';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from '../../context/authContext'
import api from '../../api/index'

const UpdateUser = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [user, setUser] = useState('');

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/user/findByUser', {
                params : {
                    idUser: state.idUser,
                }
            });
            console.log(list);
            setUser(list.data.user)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    )

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post('/user/register', {
                name: name,
                email: email,
                password: password,
                admin: admin
            });
            if (authData.status === 200) {
                alert(authData.data.message)
                setName("")
                setEmail("")
                setPassword("")
                dispatch({ type: "update", payload: true })
            } else {
                console.log(authData.data.message);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.view}>

        <CustomInput
            placeholder=""
            value={name}
            setValue={setName}
        />

        <CustomInput
            placeholder=""
            value={email}
            setValue={setEmail}
        />

        <CustomInput
            placeholder=""
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
        />

        <CustomButton text="Update" onPress={onRegisterPressed} />
       
    </View>
    )
}



const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    }
    
});

export default UpdateUser;