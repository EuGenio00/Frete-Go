import { StyleSheet, View, Image, useWindowDimensions, Text, FlatList, SafeAreaView, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from 'react';
import api from '../../api'
import CustomButton from "../../components/CustomButton";
import { Context } from "../../context/authContext";
import { Entypo } from "@expo/vector-icons";

const Cars = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [cars, setCars] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/car/findByUser', {
                params: {
                    idUser: state.idUser,
                }
            });
            console.log(list);
            setCars(list.data.cars)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <ScrollView>
            <View style={styles.view}>
                {state.isAdmin ? (
                    <CustomButton text="Add Car" onPress={() => navigation.navigate("RegisterCar")} />
                ) : (
                    <></>
                )}
                <FlatList
                    data={cars}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <View style={styles.text}>
                                    <Text style={styles.title}>{item.vehicleType}</Text>
                                    <Text style={styles.item}>{item.model}</Text>
                                    <Text style={styles.item}>{item.mark}</Text>
                                    <Text style={styles.item}>{item.color}</Text>
                                    <Text style={styles.item}>{item.licensePlate}</Text>
                                    <Text style={styles.item}>{item.yearOfManufacture}</Text>
                                    <Text style={styles.item}>{item.capacity}</Text>
                                    <Text style={styles.item}>{item.canopyCar}</Text>
                                </View>

                            </View>
                        )
                    }
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
        </ScrollView>
    )
}
export default Cars;

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#272933',
        flex: 1
    },
    button: {
        marginBottom: 20
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFEEC0',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#00000059'
    },
    text: {
        height: 230,
        width: 350,
        justifyContent: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    item: {
        fontSize: 20,
        fontFamily: 'Helvetica',
        textTransform: 'uppercase',
        marginBottom: 7
    },
    icon: {
        margin: 0
    }
})