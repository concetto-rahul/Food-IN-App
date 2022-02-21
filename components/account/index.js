import React, {useLayoutEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../../assets/colors/travel';
import Login from './Login';
import Dashborad from './Dashboard';

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

const Account = ({navigation}) => {
  const onPressSearch = () => {
    return navigation.navigate('Profile');
  };
  const onPressSettings = () => {
    return navigation.navigate('Profile');
  };

  const userData = null;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: userData ? 'My Account' : 'Login',
      headerRight: props =>
        userData && (
          <HeaderRight
            {...props}
            onPressSearch={onPressSearch}
            onPressSettings={onPressSettings}
          />
        ),
    });
  }, [navigation]);

  return userData ? <Dashborad /> : <Login />;
};

const styles = StyleSheet.create({
  headerSearch: {
    marginRight: 15,
  },
  headerSettings: {},
});

export default Account;
