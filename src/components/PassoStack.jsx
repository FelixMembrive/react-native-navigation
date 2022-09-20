import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button } from "react-native";

export default props => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                {props.voltar ?
                    <Button
                        title="Voltar"
                        onPress={() => { props.navigation.goBack() }} /> :
                    false}
                {props.avancar ?
                    <Button
                        title="Avançar"
                        onPress={() => {
                            props.navigation.navigate(
                                props.avancar,
                                props.avancarParams
                            )
                        }} /> :
                    false}
            </View>
            <View style={{ flex: 1, }}>
                {props.children}
            </View>
        </View>
    )
}