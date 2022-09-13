import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextoCentral from "./components/TextoCentral";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app  sss!</Text>
            <TextoCentral></TextoCentral>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
