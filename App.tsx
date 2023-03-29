import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      <Button title="Go next" onPress={() => navigation.navigate('new')} />
    </View>
  );
}
function NewScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>New Screen</Text>
      <Button title="Go Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="new" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
