import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Table from './blindStruc/BlindPreview';
import { generateBlindsStructure } from './blindStruc/BlindGenerator'; 

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Preview Blinds Structure"
        onPress={() => navigation.navigate('Blind Struc')}
      />
    </View>
  );
}

class App extends React.Component {
  render() {

   
    const gameTime = 120 * 60; // 1.5 hours 
    const raiseBlindTime = 3 * 60; // 3 minutes 


    const blindsStructure = generateBlindsStructure(gameTime, raiseBlindTime);

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home Page" component={HomeScreen} />
          <Stack.Screen
            name="Blind Struc"
            options={({ navigation }) => ({
              headerShown: true,
              headerTitle: () => (
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold',left: 65 }}>
                  Preview Blinds Structure
                </Text>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={{ fontSize: 20, color: 'white', marginLeft: 10 }}>
                    ◀︎
                  </Text>
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#DA8CF8',
              },
              headerTintColor: 'white',
            })}
          >
            {() => <Table blindsStructure={blindsStructure} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;