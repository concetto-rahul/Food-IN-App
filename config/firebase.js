import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD2R_Se2PAfaQHDO6TAkk9_qOJDfwlR-10',
  authDomain: 'todoapp-336110.firebaseapp.com',
  projectId: 'todoapp-336110',
  storageBucket: 'todoapp-336110.appspot.com',
  messagingSenderId: '1091962448024',
  appId: '1:1091962448024:web:ccffb0328b9b6c292848ed',
  measurementId: 'G-85KMKV2VHX',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
