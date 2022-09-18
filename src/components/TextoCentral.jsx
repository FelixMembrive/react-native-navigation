import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: props.corFundo || "#000"
        }}>
            <Text style={{
                fontSize: 50,
                color: props.corText || "#FFF"
                }}>
                {props.children}
            </Text>
        </View>
    )
}