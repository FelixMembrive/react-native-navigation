import React from "react";
import TextoCentral from "../components/TextoCentral";
import { View } from "react-native";
import { Button } from "react-native";

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Button
                    title="Abrir"
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            }, 1000)
                        }, 3000)

                    }}
                />
            </View>

            <TextoCentral corFundo="#3fa723" corTexto="black">
                Tela D
            </TextoCentral>
        </View>
    )
}