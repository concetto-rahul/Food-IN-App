import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';
import categorires from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

const Item = ({item, onPress, selectedItem}) => {
  let backgroundColor = colors.white;
  let iconColor = colors.white;
  let iconBackgroundColor = colors.secondary;
  if (item.id === selectedItem) {
    backgroundColor = colors.primary;
    iconColor = colors.black;
    iconBackgroundColor = colors.white;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.categoryItem, {backgroundColor}]}>
      <Image source={item.image} style={style.categoryItemImage} />
      <Text style={style.categoryItemTitle}>{item.title}</Text>
      <View
        style={[
          style.categoryItemIcon,
          {backgroundColor: iconBackgroundColor},
        ]}>
        <Feather name="chevron-right" size={12} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [searchText, setSearchText] = useState(null);

  const renderCategoryItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedItemId(item.id)}
        selectedItem={selectedItemId}
      />
    );
  };

  return (
    <View style={style.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={style.headerWrapper}>
            <Image
              source={require('../assets/images/profile.png')}
              style={style.profileImage}
            />
            <Feather name="menu" size={24} color={colors.black} />
          </View>
        </SafeAreaView>
        <View style={style.titlesWrapper}>
          <Text style={style.titlesSubtitle}>Food</Text>
          <Text style={style.titlesTitle}>Delivery</Text>
        </View>
        <View style={style.searchWrapper}>
          <Feather name="search" size={24} />
          <View style={style.search}>
            <TextInput
              placeholder="Search..."
              value={searchText}
              onChangeText={setSearchText}
              style={style.searchText}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={style.categoriesWrapper}>
          <Text style={style.categoriesHeading}>Categories</Text>
          <View style={style.categoriesItemWrapper}>
            <FlatList
              data={categorires}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              extraData={selectedItemId}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={style.popularsWrapper}>
          <Text style={style.popularsTitle}>Popular</Text>
          <View style={style.popularItemsWrapper}>
            {popularData.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ItemDetail', {item})}
                  key={`p-item-${item.id}`}
                  style={style.popularItemCard}>
                  <View>
                    <View style={style.popularItemCardLeftTop}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={style.popularItemCardLeftTopTitle}>
                        top of the week
                      </Text>
                    </View>
                    <View style={style.popularItemCardLeftCenter}>
                      <Text style={style.popularItemCardLeftCenterTitle}>
                        {item.title}
                      </Text>
                      <Text style={style.popularItemCardLeftCenterSubtitle}>
                        Weight {item.weight}
                      </Text>
                    </View>
                    <View style={style.popularItemCardLeftBottom}>
                      <View style={style.popularItemCardLeftBottomPlus}>
                        <Feather name="plus" size={15} color={colors.black} />
                      </View>
                      <View style={style.popularItemCardLeftBottomRating}>
                        <MaterialCommunityIcons
                          name="star"
                          size={12}
                          color={colors.black}
                        />
                        <Text
                          style={style.popularItemCardLeftBottomRatingTitle}>
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={style.popularItemCardRight}>
                    <Image source={item.image} style={style.popularItemImage} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  titlesSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    marginLeft: 10,
  },
  searchText: {
    color: colors.textDark,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
    height: 35,
    margin: 0,
  },
  categoriesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  categoriesHeading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  categoriesItemWrapper: {
    marginTop: 10,
  },
  categoryItem: {
    padding: 5,
    marginRight: 15,
    marginVertical: 5,
    borderRadius: 20,
    width: 105,
    height: 177,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
  },
  categoryItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textDark,
  },
  categoryItemIcon: {
    width: 26,
    height: 26,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
  },
  popularsWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  popularsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  popularItemsWrapper: {
    marginTop: 5,
  },
  popularItemCard: {
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingLeft: 20,
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',

    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularItemCardLeftTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularItemCardLeftTopTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularItemCardLeftCenter: {
    marginTop: 20,
  },
  popularItemCardLeftCenterTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textDark,
  },
  popularItemCardLeftCenterSubtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularItemCardLeftBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  popularItemCardLeftBottomPlus: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderBottomStartRadius: 25,
    borderTopEndRadius: 25,
  },
  popularItemCardLeftBottomRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  popularItemCardLeftBottomRatingTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 10,
  },
  popularItemCardRight: {
    marginLeft: 60,
  },
  popularItemImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
export default Home;
