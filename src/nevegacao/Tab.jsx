import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import Ionicons from "@expo/vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
                case "TelaA":
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                    break;
                case "TelaB":
                    iconName = focused
                        ? 'baseball'
                        : 'baseball-outline';
                    break;
                case "TelaC":
                    iconName = focused
                        ? 'ios-list-outline'
                        : 'ios-list';
                    break;

            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true
    })}
        initialRouteName="TelaB">
        <Tab.Screen name="TelaA" component={TelaA} options={{ title: "Inicial" }}/>
        <Tab.Screen name="TelaB" component={TelaB} options={{ title: "Meio" }}/>
        <Tab.Screen name="TelaC" component={TelaC} options={{ title: "Final" }}/>
    </Tab.Navigator>
)