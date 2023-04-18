import { StyleSheet, TouchableOpacity, View, Image, useWindowDimensions, Text, TextInput } from "react-native";
import React, { useState, useContext } from 'react';
import CustomMessage from "../components/CustomMessage";
import CustomButton from "../components/CustomButton";
import { Feather } from '@expo/vector-icons';

const Message = ({ navigation }) => {
    const { height } = useWindowDimensions();

    return (
        <View style={styles.view}>

            <CustomMessage
                placeholder="Escreva a mensagem..."
            />

            <View style={styles.send}>
                <Feather name="send" size={28} color="#eee" />

            </View>

        </View>
    )
};

const styles = StyleSheet.create({

    view: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#272933',
        flex: 1,
    },
    send: {
        padding: 10,
        marginTop: 5,
        alignSelf: 'flex-end'
    }
});

export default Message;