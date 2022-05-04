import React, {useEffect, useState} from 'react';
import Login from './Login';
import Dashborad from './Dashboard';
import Signup from './Signup';
import auth from '@react-native-firebase/auth';

const Account = ({navigation}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const updateUserData = async () => {
      await auth().onAuthStateChanged(currentUser => {
        setUserData(currentUser);
      });
    };
    updateUserData();
  }, []);

  const handelSignup = async ({email, password}) => {
    try {
      const resUserData = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
    } catch (error) {
      console.log('handelSignup error', error.code, error.message);
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }
    }
  };

  const handelLogin = async ({email, password}) => {
    try {
      const resUserData = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console, log('handelLogin resUserData', resUserData);
    } catch (error) {
      console.log('handelSignup error', error.code, error.message);
      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      } else if (error.code === 'auth/user-not-found') {
        alert('Invalid login credentials.');
      }
    }
  };

  return userData ? (
    <Dashborad navigation={navigation} />
  ) : isRegister ? (
    <Signup
      setIsRegister={setIsRegister}
      handelSignup={handelSignup}
      navigation={navigation}
    />
  ) : (
    <Login
      setIsRegister={setIsRegister}
      navigation={navigation}
      handelLogin={handelLogin}
    />
  );
};

export default Account;
