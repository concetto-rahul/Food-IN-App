import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import colors from '../../assets/colors/travel';
import categories from '../../assets/data/discoverCategoriesData';
import places from '../../assets/data/discoverData';
import activities from '../../assets/data/activitiesData';
import learnMore from '../../assets/data/learnMoreData.js';

const categoryFirstItem = categories[0].id;
const placesFirstItem = places[0].id;
const activityFirstItem = activities[0].id;
const learnMoreFirstItem = learnMore[0].id;

const CategoryItem = ({item, onPress, selectedItem}) => {
  const marginLeft = categoryFirstItem === item.id ? 0 : 20;
  const color = selectedItem === item.id ? colors.orange : colors.gray;
  return (
    <TouchableOpacity onPress={onPress} style={[{marginLeft}]}>
      <Text style={[styles.categoryText, {color}]}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const PlacesItem = ({item, onPress}) => {
  const marginLeft = placesFirstItem === item.id ? 0 : 20;
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        style={[styles.placesItemCard, {marginLeft}]}
        source={item.image}
        imageStyle={styles.placesItemBackgroundImage}>
        <View>
          <Text style={styles.placesItemTitle}>{item.title}</Text>
          <View style={styles.placesItemLocationWrapper}>
            <Entypo name="location-pin" size={12} color={colors.white} />
            <Text style={styles.placesItemLocation}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const ActivityItem = ({item}) => {
  const marginLeft = activityFirstItem === item.id ? 0 : 25;
  return (
    <View style={[styles.activityItemCard, {marginLeft}]}>
      <Image source={item.image} style={styles.activityItemImage} />
      <Text style={styles.activityItemTitle}>{item.title}</Text>
    </View>
  );
};

const LearnMoreItem = ({item}) => {
  const marginLeft = learnMoreFirstItem === item.id ? 0 : 25;
  return (
    <TouchableOpacity>
      <ImageBackground
        style={[styles.learnMoreItemCard, {marginLeft}]}
        source={item.image}
        imageStyle={styles.learnMoreItemBackgroundImage}>
        <View>
          <Text style={styles.learnMoreItemTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Travel = ({navigation}) => {
  const [selectedCategoryID, setSelectedCategoryID] =
    useState(categoryFirstItem);

  const renderCategoryItem = ({item}) => {
    return (
      <CategoryItem
        item={item}
        onPress={() => setSelectedCategoryID(item.id)}
        selectedItem={selectedCategoryID}
      />
    );
  };

  const renderPlacesItem = ({item}) => {
    return (
      <PlacesItem
        item={item}
        onPress={() => navigation.navigate('TravelDetail', {item})}
      />
    );
  };

  const renderActivityItem = ({item}) => {
    return <ActivityItem item={item} />;
  };

  const renderLearnMoreItem = ({item}) => {
    return <LearnMoreItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image
              source={require('../../assets/images/person.png')}
              style={styles.profileImage}
            />
          </View>
        </SafeAreaView>
        <View style={styles.headingTitleWrapper}>
          <Text style={styles.headingTitleText}>Discover</Text>
        </View>
        <View style={styles.categoriesWrapper}>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            extraData={selectedCategoryID}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.placesWrapper}>
          <FlatList
            data={places}
            renderItem={renderPlacesItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitleText}>Activities</Text>
          <View style={styles.activitiesItemWrapper}>
            <FlatList
              data={activities}
              renderItem={renderActivityItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitleText}>Learn More</Text>
          <View style={styles.learnMoreItemWrapper}>
            <FlatList
              data={learnMore}
              renderItem={renderLearnMoreItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {},
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  headingTitleWrapper: {
    marginTop: 20,
  },
  headingTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.black,
  },
  categoriesWrapper: {
    marginTop: 10,
  },
  categoryText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    paddingVertical: 5,
  },
  placesWrapper: {
    marginTop: 20,
  },
  placesItemCard: {
    width: 170,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'flex-end',

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  placesItemBackgroundImage: {
    borderRadius: 20,
  },
  placesItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  placesItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  placesItemLocation: {
    marginLeft: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 10,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 30,
  },
  activitiesTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  activitiesItemWrapper: {
    marginTop: 20,
  },
  activityItemCard: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  activityItemImage: {
    width: 30,
    resizeMode: 'contain',
  },
  activityItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.gray,
    marginTop: 5,
  },
  learnMoreWrapper: {
    marginTop: 30,
  },
  learnMoreTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  learnMoreItemWrapper: {
    marginTop: 20,
  },
  learnMoreItemCard: {
    width: 170,
    height: 180,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'flex-end',

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  learnMoreItemBackgroundImage: {
    borderRadius: 20,
  },
  learnMoreItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
export default Travel;
