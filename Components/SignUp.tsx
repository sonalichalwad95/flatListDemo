import {
  View,
  Text,
  ToastAndroid,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const SignUp = ({navigation}: {navigation: any}) => {
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity('Done', ToastAndroid.SHORT, ToastAndroid.TOP);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View> */}

        <Text
          style={{
            marginTop: 25,
            marginLeft: 15,
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}>
          Create your account here
        </Text>
        {/* </View> */}

        <View style={styles.logContainer}>
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            First Name
          </Text>
          <TextInput
            style={styles.details}
            placeholder="First name"
            onTextInput={showToastWithGravity}
          />
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Last Name
          </Text>
          <TextInput
            style={styles.details}
            placeholder="Last Name"
            onTextInput={showToastWithGravity}
          />
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Phone Number
          </Text>
          <TextInput
            style={styles.details}
            placeholder="Phone Number"
            onTextInput={showToastWithGravity}
          />
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Email id
          </Text>
          <TextInput
            style={styles.details}
            placeholder="Email id "
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
            title=" Submit"
            color="#ffa07a"
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
            Already have an account? LogIn
          </Text>
          <Button
            color="#90ee90"
            title="LogIn"
            onPress={() => navigation.navigate('LogIn')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    backgroundColor: '#bc8f8f`',
  },
  Btn: {
    flex: 1,
    marginTop: 10,
    marginBottom: 0.2,
    height: 50,
    // width: 200,
    alignSelf: 'center',
  },
  details: {
    borderWidth: 0.5,
    color: 'black',
    marginLeft: 0.25,
  },
});
