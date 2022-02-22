import React, {useLayoutEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import colors from '../../assets/colors/travel';

const Signup = ({setIsRegister, navigation, handelSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signup',
    });
  }, [navigation]);

  const submitSignupData = () => {
    handelSignup({email, password});
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.loginFormContainer}>
        <Text style={styles.title}>Register Now</Text>
        <Text style={styles.subTitle}>Please fill all required fields.</Text>
        <View style={styles.loginFormWrapper}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.emailText}
            underlineColorAndroid="transparent"
            autoCompleteType="off"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.passwordText}
            underlineColorAndroid="transparent"
            autoCompleteType="off"
            secureTextEntry
          />

          <TouchableOpacity
            onPress={() => submitSignupData()}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsRegister(false)}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
  },
  loginFormContainer: {
    // marginVertical: 20,
    // // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.black,
  },
  subTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.black,
  },
  loginFormWrapper: {
    marginTop: 20,
  },
  emailText: {
    backgroundColor: colors.white,
    color: colors.black,
    padding: 15,
  },
  passwordText: {
    backgroundColor: colors.white,
    color: colors.black,
    padding: 15,
    marginTop: 10,
  },
  forgotPasswordText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.black,
    marginTop: 10,
    textAlign: 'right',
  },
  loginButton: {
    paddingVertical: 15,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.orange,
  },
  loginButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.white,
  },
  signUpText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.black,
    marginTop: 10,
    textAlign: 'center',
  },
});
export default Signup;
