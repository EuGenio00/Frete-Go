import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from './Users'
import UpdateUser from './UpdadeUser';
const Stack = createNativeStackNavigator();

const UserRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainUser" component={User} />
                <Stack.Screen name="UpdadeUser" component={UpdateUser} />
            </Stack.Navigator>
    )
}

export default UserRoutes;