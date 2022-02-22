import React, {useEffect, useState} from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Login from './Login';
import Dashborad from './Dashboard';
import Signup from './Signup';
import {auth} from '../../config/firebase';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const Account = ({navigation}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const updateUserData = async () => {
      await onAuthStateChanged(auth, (currentUser) => {
        setUserData(currentUser);
      });
    };
    updateUserData();
  }, []);

  const handelSignup = async ({email, password}) => {
    try {
      const resUserData = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
    } catch (error) {
      console.log('handelSignup error', error.message);
      alert('Wrong data pass.');
    }
  };

  const handelLogin = async ({email, password}) => {
    try {
      const resUserData = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console, log('handelLogin resUserData', resUserData);
    } catch (error) {
      console.log('handelSignup error', error);
      alert('Invalid login credentials.');
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
