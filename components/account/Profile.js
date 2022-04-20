import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
// import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import colors from '../../assets/colors/travel';

const screenHeight = Dimensions.get('window').height;

const Profile = () => {
  const [name, setName] = useState('Rahul Patil');
  // const userData = auth().currentUser;
  const userData = null;
  const handelFormData = async () => {};

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileView}>
          <View style={styles.profileWrapper}>
            <TouchableOpacity style={styles.cameraWrapper}>
              <FontAwesome5 name="camera" size={20} color={colors.white} />
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/person.png')}
              style={styles.profileImage}
            />
          </View>
        </View>
        <View style={styles.settingsOptions}>
          <View style={styles.formWrapper}>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={setName}
              style={styles.textInput}
              underlineColorAndroid="transparent"
            />
            <TextInput
              placeholder="Email"
              value={userData.email}
              style={[styles.textInput, {marginTop: 10}]}
              underlineColorAndroid="transparent"
              editable={false}
              selectTextOnFocus={false}
            />
            <TouchableOpacity
              onPress={() => handelFormData()}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileView: {
    justifyContent: 'space-around',
    height: screenHeight * 0.3,
    alignItems: 'center',
  },
  profileWrapper: {
    alignItems: 'center',
    position: 'relative',
  },
  cameraWrapper: {
    position: 'absolute',
    backgroundColor: colors.orange,
    zIndex: 99,
    bottom: -10,
    right: 0,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  settingsOptions: {
    backgroundColor: colors.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: -20,
    paddingHorizontal: 15,
    height: screenHeight * 0.6,
  },
  formWrapper: {
    marginTop: 20,
  },
  textInput: {
    backgroundColor: colors.white,
    color: colors.black,
    padding: 15,
    // marginHorizontal: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  loginButton: {
    paddingVertical: 10,
    marginTop: 30,
    marginHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.orange,
  },
  loginButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: colors.white,
  },
});
export default Profile;
