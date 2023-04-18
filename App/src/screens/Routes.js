import { StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'

import { Context } from '../context/authContext'
import { AntDesign } from '@expo/vector-icons';

import UserRoutes from './user/UserRoutes'
import Home from './Home'
import Cars from './car/CarRoutes'
import Message from './Message'

const Tab = createBottomTabNavigator();

const Routes = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    return (
        <Tab.Navigator screenOptions={{
            headerRight: () => (
                <AntDesign
                    name='logout'
                    size={25}
                    style={{ margin: 10 }}
                    onPress={() => dispatch({ type: 'logOut' })}
                    color="#000"

                />
            )
        }} >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="home" size={30} color="black" />
                    ),
                }}
            />

            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="message1" size={30} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserRoutes}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="user" size={30} color="black" />
                    ),
                }}
            />

            {state.isAdmin ? (
                <Tab.Screen
                    name="Car"
                    component={Cars}
                    options={{
                        tabBarIcon: () => (
                            <AntDesign name="car" size={30} color="black" />
                        )
                    }}
                />
            ) : (
                <></>
            )
            }
        </Tab.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272933'

    },
})