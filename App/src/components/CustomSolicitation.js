import {View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
 
const CustomSolicitation = ({ value, setValue, placeholder, secureTextEntry, editable }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                editable={editable}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B1B3B3',
        width: '100%',
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 15,
        height: 60,
        alignContent: 'center',
    },
    input: {
        padding: 15,
        fontWeight: 'bold',
        color: '#25282A',
        fontSize: 20
    }
})
 
export default CustomSolicitation;
