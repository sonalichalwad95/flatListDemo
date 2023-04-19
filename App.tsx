import * as React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Button,
  ToastAndroid,
} from 'react-native';

// import MoviesList from './Components/MovieList';

import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Welcome from './Components/Welcome';

export default (App: any) => {
  const Home = ({navigation}: {navigation: any}) => {
    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <Text style={{fontSize: 40}}>Lets start</Text>
          <Text style={{fontSize: 40}}> Coding </Text>
        </View>

        <View style={styles.Btn}>
          <Button
            title="Login"
            color="#90ee90"
            onPress={() => navigation.navigate('LogIn')}
          />
        </View>
        <View style={styles.Btn}>
          <Button
            color="#ffa07a"
            title="SignUp"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    );
  };
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    // alignItems: 'center',
    // alignContent: 'center',
    borderColor: 'blue',
    backgroundColor: '#f0f8ff',
  },
  homeContainer: {marginHorizontal: 20, marginVertical: 40},

  Btn: {
    flex: 0.08,

    // marginTop: 10,
    // marginBottom: 0.2,
    height: 5,
    width: 200,
    alignSelf: 'center',
  },
});
