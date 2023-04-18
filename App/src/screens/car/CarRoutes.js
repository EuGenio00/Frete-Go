import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cars from './Cars';
import RegisterCar from './RegisterCar';

const Stack = createNativeStackNavigator();

const CarRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainCars" component={Cars} />
                <Stack.Screen name="RegisterCar" component={RegisterCar} />
            </Stack.Navigator>
    )
}

export default CarRoutes;