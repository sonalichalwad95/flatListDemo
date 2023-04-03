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

import MoviesList from './Components/MovieList';

export default (App: any) => {
  const [listdata, setdata] = useState([]);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://dummyapi.online/api/movies',
    };

    axios
      .request(config)
      .then(response => {
        console.log('details', JSON.stringify(response.data));
        setdata(response?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  // const showToastWithGravity = () => {
  //   ToastAndroid.showWithGravity(
  //     'Added to cart',
  //     ToastAndroid.SHORT,
  //     ToastAndroid.TOP,
  //   );
  // };

  const HomeScreen = ({navigation}: {navigation: any}) => {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <FlatList
            data={listdata}
            numColumns={1}
            renderItem={item => {
              return <MoviesList item={item} />;
            }}
            // keyExtractor={(item, index) => {
            //   return item?.id;
            // }}
          />
        </View>

        <View style={{height: 50}}>
          <Button
            title="Go to Timings "
            onPress={() => navigation.navigate('Timings')}
          />
        </View>
      </View>
    );
  };

  const TimingsScreen = ({navigation}: {navigation: any}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Go to Home Screen </Text>
        <Button title="Go back " onPress={() => navigation.goBack()} />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timings" component={TimingsScreen} />
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
  },
});
