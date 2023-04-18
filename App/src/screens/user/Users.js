import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/authContext'
import api from '../../api/index'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Entypo } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Users = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [users, setUsers] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/user/findByUser', {
                params: {
                    idUser: state.idUser,
                }
            });
            console.log(list);
            setUsers(list.data.users)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={styles.view}>
            <Feather name="settings" size={30} color="#fff" />

            <View style={styles.count}>
                <Entypo name="user" size={60} color="#eee" />
            </View>

            <CustomInput
                value={state.name}
                editable={false}
            />

            <CustomInput
                value={state.email}
                editable={false}
            />

            <CustomInput
                value={state.password}
                editable={false}
            />

            <CustomButton text="Atualizar Perfil" onPress={() => navigation.navigate("")} />

            <View style={styles.editar}>
                <AntDesign name="delete" size={30} color="red" />
            </View>
        </View>

    )
}

export default Users

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#272933',
        padding: 20
    },
    count: {
        alignItems: 'center',
        padding: 10
    },
    editar: {
        flex: 2,
        alignItems: 'flex-end',
        paddingTop: 20
    }
})