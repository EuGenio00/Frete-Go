import { StyleSheet, View, Image, useWindowDimensions, ScrollView } from "react-native";
import React, { useContext, useState } from 'react';
import Logo from '../../../assets/images/Logo.png'
import api from '../../api'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from '../../context/authContext'
import { Picker } from '@react-native-picker/picker';
// import Cars from "./Cars";


const RegisterCar = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [idUser, setidUser] = useState(state.idUser);
    const [CNH, setCNH] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [model, setModel] = useState('');
    const [mark, setMark] = useState('');
    const [color, setColor] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [yearOfManufacture, setYearOfManufacture] = useState('');
    const [capacity, setCapacity] = useState('');
    const [canopyCar, setCanopyCar] = useState(false);

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/car/register", {
                idUser: idUser,
                CNH: CNH,
                vehicleType: vehicleType,
                model: model,
                mark: mark,
                color: color,
                licensePlate: licensePlate,
                yearOfManufacture: yearOfManufacture,
                capacity: capacity,
                canopyCar: canopyCar,
            });
            if (authData.status === 200) {
               alert(authData.data.message)
                setCNH("")
                setVehicleType("")
                setModel("")
                setMark("")
                setColor("")
                setLicensePlate("")
                setYearOfManufacture("")
                setCapacity("")
                setCanopyCar("")
                dispatch({ type: "update", payload: true })
            }
            else {
                console.log(authData.data.message)
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
       <ScrollView>
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Número de CNH"
                value={CNH}
                setValue={setCNH}
            />

            <CustomInput
                placeholder="Tipo de Veículo"
                value={vehicleType}
                setValue={setVehicleType}
            />

            <CustomInput
                placeholder="Modelo"
                value={model}
                setValue={setModel}
            />

            <CustomInput
                placeholder="Marca"
                value={mark}
                setValue={setMark}
            />

            <CustomInput
                placeholder="Cor"
                value={color}
                setValue={setColor}
            />

            <CustomInput
                placeholder="Placa"
                value={licensePlate}
                setValue={setLicensePlate}
            />

            <CustomInput
                placeholder="Ano de Fabricação"
                value={yearOfManufacture}
                setValue={setYearOfManufacture}
            />

            <CustomInput
                placeholder="Capacidade"
                value={capacity}
                setValue={setCapacity}
            />

            <Picker
                selectedValue={canopyCar}
                style={styles.picker}
                onValueChange={setCanopyCar}

            >
                <Picker.Item label="Possui Capota" value="true" />
                <Picker.Item label="Não possui Capota" value="false" />
            </Picker>

            <CustomButton text="Register" onPress={onRegisterPressed} />
        </View>
        </ScrollView>
       
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 10,
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
        color: "#6200ee",
    },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#FFEEC0',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '100%'
    }
});

export default RegisterCar;