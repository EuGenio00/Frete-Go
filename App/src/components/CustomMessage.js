import {View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
 
const CustomMessage = ({ value, setValue, placeholder, secureTextEntry, editable }) => {
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
        backgroundColor: "#0078fe",
        width: '88%',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 15,
      
    },
    input: {
        padding: 15,
        justifyContent: 'flex-start',
        color: '#eee',
        fontSize: 20,
        height: 200
    }
})
 
export default CustomMessage;
