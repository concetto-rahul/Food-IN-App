import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';

import colors from '../../assets/colors/travel';

const screenHeight = Dimensions.get('window').height;

const Setting = ({navigation}) => {
  const userData = auth().currentUser;
  const handelSignout = async () => {
    await auth().signOut();
    navigation.navigate('Account');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileView}>
          <View style={styles.profileWrapper}>
            <Image
              source={require('../../assets/images/person.png')}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Rahul Patil</Text>
            <Text style={styles.profileEmail}>{userData.email}</Text>
          </View>
        </View>
        <View style={styles.settingsOptions}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={styles.settingsOption}>
            <View style={styles.settingsOptionLeft}>
              <AntDesign name="user" size={15} color={colors.black} />
              <Text style={styles.settingsOptionText}>Accout & Profile</Text>
            </View>
            <AntDesign name="right" size={15} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsOption}>
            <View style={styles.settingsOptionLeft}>
              <AntDesign name="key" size={15} color={colors.black} />
              <Text style={styles.settingsOptionText}>Change Password</Text>
            </View>
            <AntDesign name="right" size={15} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsOption}>
            <View style={styles.settingsOptionLeft}>
              <Ionicons
                name="notifications-outline"
                size={15}
                color={colors.black}
              />
              <Text style={styles.settingsOptionText}>Notifications</Text>
            </View>
            <AntDesign name="right" size={15} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handelSignout()}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Logout</Text>
          </TouchableOpacity>
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
    height: screenHeight * 0.4,
    alignItems: 'center',
  },
  profileWrapper: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  profileName: {
    marginTop: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    color: colors.black,
  },
  profileEmail: {
    marginTop: 2,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },

  settingsOptions: {
    backgroundColor: colors.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: -20,
    paddingHorizontal: 15,
    height: screenHeight * 0.6,
  },
  settingsOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  settingsOptionLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsOptionText: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    color: colors.black,
    marginLeft: 15,
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
export default Setting;
