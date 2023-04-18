import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Context, Provider } from './src/context/authContext';


import Routes from './src/screens/Routes';
import Login from './src/screens/Login';
import RegisterUser from './src/screens/user/RegisterUser';
import ValidateToken from './src/screens/ValidateToken';

const Stack = createNativeStackNavigator();

const App = () => {
  const { state } = useContext(Context);
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.Loading ? (
          <Stack.Screen name="ValidateToken" component={ValidateToken} />
        ) : (
          state.isLogged ? (
            <>
<<<<<<< HEAD
              <Stack.Screen name="ValidateToken" component={ValidateToken}/>
              <Stack.Screen name="Routes" component={Routes} />
              <Stack.Screen name="RegisterCar" component={RegisterCar}/>
            </>
          ) : (
            <>
                 
           <Stack.Screen name="Login" component={Login} />  
             <Stack.Screen name="RegisterUser" component={RegisterUser} />
              
=======
              <Stack.Screen name="ValidateToken" component={ValidateToken} />
                 <Stack.Screen name="Routes" component={Routes} />

            </>
          ) : (
            <> 
           
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="RegisterUser" component={RegisterUser} />

>>>>>>> fdf95146aa0cee8d798fca5141e4c93ef38c43b0
            </>
          )
        )
        }


      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#272933',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <Provider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};