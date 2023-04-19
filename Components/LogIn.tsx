import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import SignUp from './SignUp';

const LogIn = ({navigation}: {navigation: any}) => {
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity('Done', ToastAndroid.SHORT, ToastAndroid.TOP);
  };
  return (
    <View style={styles.container}>
      {/* <View> */}
      <Text style={{fontSize: 20}}>Proceed with your </Text>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}> LogIn </Text>
      {/* </View> */}

      <View style={styles.logContainer}>
        <Text
          style={{
            marginTop: 15,
            marginBottom: 5,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          Username
        </Text>
        <TextInput
          style={styles.details}
          placeholder="enter your username/ userid"
          onTextInput={showToastWithGravity}
        />
        <Text
          style={{
            marginTop: 15,
            marginBottom: 5,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Password
        </Text>
        <TextInput
          style={styles.details}
          placeholder="enter your password"
          secureTextEntry={true}
          onTextInput={showToastWithGravity}
        />
        <Button
          title="Submit"
          color="#90ee90"
          onPress={() => navigation.navigate('Welcome')}
        />
      </View>

      <View style={styles.Btn}>
        <Text
          style={{
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Don't have account? Create new
        </Text>
        <Button
          color="#ffa07a"
          title="SignUp"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // alignItems: 'center',
    alignContent: 'center',
    borderColor: 'blue',
  },
  logContainer: {
    flex: 0.5,
    marginHorizontal: 40,
    marginVertical: 100,
  },

  Btn: {
    flex: 0.5,

    // marginTop: 10,
    // marginBottom: 0.2,
    height: 5,
    // width: 200,
    alignSelf: 'center',
  },
  details: {
    borderWidth: 0.5,
    color: 'black',
    marginLeft: 0.25,
  },
});
