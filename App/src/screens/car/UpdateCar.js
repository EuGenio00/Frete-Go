import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, Picker } from "react-native";
import React, { useContext, useEffect, useState } from 'react';
import api from '../../api'
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from '../../context/authContext'
// import { Picker } from '@react-native-picker/picker';

const UpdateCar = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [cars, setCars] = useState('');

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/car/findByUser', {
                params: {
                    idCar: state.idCar,
                }
            });
            console.log(list);
            setCars(list.data.cars)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    )

    const [CNH, setCNH] = useState(cars.CNH);
    const [vehicleType, setVehicleType] = useState(cars.vehicleType);
    const [model, setModel] = useState(cars.model);
    const [mark, setMark] = useState(cars.mark);
    const [color, setColor] = useState(cars.setColor);
    const [licensePlate, setLicensePlate] = useState(cars.licensePlate);
    const [yearOfManufacture, setYearOfManufacture] = useState(cars.yearOfManufacture);
    const [capacity, setCapacity] = useState(cars.capacity);
    const [canopyCar, setCanopyCar] = useState(cars.canopyCar);

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/car/register", {
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
            } else {
                console.log(authData.data.message)
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <View>
            <CustomInput
                placeholder=""
                value={CNH}
                setValue={setCNH}
            />

            <CustomInput
                placeholder=""
                value={vehicleType}
                setValue={setVehicleType}
            />

            <CustomInput
                placeholder=""
                value={model}
                setValue={setModel}
            />

            <CustomInput
                placeholder=""
                value={mark}
                setValue={setMark}
            />

            <CustomInput
                placeholder=""
                value={color}
                setValue={setColor}
            />

            <CustomInput
                placeholder=""
                value={licensePlate}
                setValue={setLicensePlate}
            />

            <CustomInput
                placeholder=""
                value={yearOfManufacture}
                setValue={setYearOfManufacture}
            />

            <CustomInput
                placeholder=""
                value={capacity}
                setValue={setCapacity}
            />

            {/* <Picker
                selectedValue={canopyCar}
                style={styles.picker}
                onValueChange={setCanopyCar}
            >
                <Picker.Item label="" value="true" />
                <Picker.Item label="" value="false" />
            </Picker> */}

            <CustomButton text="Update" onPress={onRegisterPressed} />

            {/* <Tab.Navigator screenOptions={{
                footerRight: () => (
                    <Entypo
                        name='delete'
                        size={20}
                        style={{ margin: 10 }}
                        onPress={() => dispatch({ type: 'delete' })}
                        color="red"
                    />  
                )
            }} >
            </Tab.Navigator> */}

        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '100%'
    }
});

export default UpdateCar;