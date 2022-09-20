import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextoCentral from "./components/TextoCentral";
import TelaA from "./views/TelaA";
import TelaB from "./views/TelaB";
import TelaC from "./views/TelaC";
import 'react-native-gesture-handler';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TelaA />
            <TelaB />
            <TelaC />
        </SafeAreaView>
    );
}