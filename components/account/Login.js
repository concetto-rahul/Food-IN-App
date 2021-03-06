import React, {useState, useLayoutEffect} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors/travel';

const Login = ({setIsRegister, navigation, handelLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Login',
      headerRight: null,
    });
  }, [navigation]);

  const submitLoginData = () => {
    handelLogin({email, password});
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.loginFormContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <View style={styles.loginFormWrapper}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.emailText}
            underlineColorAndroid="transparent"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.passwordText}
            underlineColorAndroid="transparent"
            secureTextEntry
          />
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

          <TouchableOpacity
            onPress={() => submitLoginData()}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsRegister(true)}>
            <Text style={styles.signUpText}>Signup</Text>
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
export default Login;
