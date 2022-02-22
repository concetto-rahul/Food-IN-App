import React, {useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../../assets/colors/travel';
import {auth} from '../../config/firebase';

const HeaderRight = ({onPressSearch, onPressSettings}) => {
  return (
    <>
      <TouchableOpacity onPress={() => onPressSearch()}>
        <Feather
          name="search"
          size={24}
          color={colors.black}
          style={styles.headerSearch}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressSettings()}>
        <Feather
          name="settings"
          size={24}
          color={colors.black}
          style={styles.headerSettings}
        />
      </TouchableOpacity>
    </>
  );
};
const Dashboard = ({navigation}) => {
  const userData = auth.currentUser;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Account',
      headerRight: props => (
        <HeaderRight
          {...props}
          onPressSearch={onPressSearch}
          onPressSettings={onPressSettings}
        />
      ),
    });
  }, [navigation]);
  const onPressSearch = () => {
    return navigation.navigate('Profile');
  };
  const onPressSettings = () => {
    return navigation.navigate('Settings');
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Welcome,</Text>
        <Text style={styles.titleSubtext}>{userData.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerSearch: {
    marginRight: 15,
  },
  headerSettings: {},
  titleWrapper: {
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    color: colors.black,
  },
  titleSubtext: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
});

export default Dashboard;
