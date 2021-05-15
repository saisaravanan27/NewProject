import React from 'react';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from '../screen/StartScreen';
import MyCartScreen from '../screen/MyCartScreen';

export default function Router() {

    const Stack = createStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="StartScreen">

                    <Stack.Screen name={'StartScreen'} component={StartScreen} options={{ headerShown: false }} />

                    <Stack.Screen name={'MyCartScreen'} component={MyCartScreen}
                        options={{
                            title: 'MyCart', headerTintColor: '#FFF',
                            headerStyle: { backgroundColor: '#1b476d', elevation: 0 },
                            headerTitleStyle: { fontSize: 18, fontWeight: '600' },
                        }} />

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}