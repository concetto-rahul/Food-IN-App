import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Button,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/travel';

const screenHeight = Dimensions.get('window').height;
const TravelDetail = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <ImageBackground source={item.image} style={styles.backgroundImage}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.actionBack}>
            <Feather name="chevron-left" size={32} color={colors.white} />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.locationWrapper}>
              <Entypo name="location-pin" size={24} color={colors.white} />
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.description}>
          <View style={styles.liked}>
            <Entypo name="heart" size={32} color={colors.orange} />
          </View>
          <Text style={styles.descriptionHeading}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLable}>PRICE</Text>
              <View style={styles.infoValue}>
                <Text style={styles.infoValueText}>${item.price}</Text>
                <Text style={styles.infoValueSubtext}>/person</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLable}>RATING</Text>
              <View style={styles.infoValue}>
                <Text style={styles.infoValueText}>{item.rating}</Text>
                <Text style={styles.infoValueSubtext}>/5</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLable}>DURATION</Text>
              <View style={styles.infoValue}>
                <Text style={styles.infoValueText}>{item.duration}</Text>
                <Text style={styles.infoValueSubtext}> hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => alert('You booked a trip!')}
            style={styles.bookNowButton}>
            <Text style={styles.bookNowButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: screenHeight * 0.6,
    justifyContent: 'space-between',
  },
  actionBack: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    marginLeft: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  description: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: colors.white,
    position: 'relative',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: -20,
  },
  liked: {
    position: 'absolute',
    top: -30,
    right: 40,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: colors.black,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionHeading: {
    fontFamily: 'Lato-Regular',
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  infoLable: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.gray,
  },
  infoValue: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoValueText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.orange,
  },
  infoValueSubtext: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  bookNowButton: {
    marginTop: 30,
    backgroundColor: colors.orange,
  },
  bookNowButton: {
    paddingVertical: 15,
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.orange,
  },
  bookNowButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colors.white,
  }, 
});
export default TravelDetail;
