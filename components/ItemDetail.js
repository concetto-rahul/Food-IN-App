import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';

const IngredientsItem = ({item}) => (
  <TouchableOpacity style={style.ingredientsItem}>
    <Image source={item.image} style={style.ingredientsItemImage} />
  </TouchableOpacity>
);

const ItemDetail = ({route, navigation}) => {
  const {item} = route.params;

  const renderIngredientsItem = ({item}) => {
    return <IngredientsItem item={item} />;
  };

  return (
    <View style={style.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={style.headerWrapper}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={style.actionBack}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </TouchableOpacity>
            <View style={style.actionStar}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>
        <View style={style.titleWrapper}>
          <Text style={style.title}>{item.title}</Text>
        </View>
        <View style={style.priceWrapper}>
          <Text style={style.priceText}>${item.price}</Text>
        </View>
        <View style={style.descriptionWrapper}>
          <View>
            <View style={style.description1}>
              <Text style={style.description1Lable}>Size</Text>
              <Text
                style={
                  style.description1Text
                }>{`${item.sizeName} ${item.sizeNumber}"`}</Text>
            </View>
            <View style={style.description1}>
              <Text style={style.description1Lable}>Crust</Text>
              <Text style={style.description1Text}>{`${item.crust}`}</Text>
            </View>
            <View style={style.description1}>
              <Text style={style.description1Lable}>Delivery in</Text>
              <Text
                style={
                  style.description1Text
                }>{`${item.deliveryTime} min`}</Text>
            </View>
          </View>
          <View style={style.imageWrapper}>
            <Image source={item.image} style={style.image} />
          </View>
        </View>
        <View style={style.ingredientsWrapper}>
          <Text style={style.ingredientsTitle}>Ingredients</Text>
          <View style={style.ingredientsItemWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => alert('Your order has been placed!')} style={style.placeOrderButton}>
          <Text style={style.placeOrderButtonText}>Place an order</Text>
          <Feather name="chevron-right" size={18} color={colors.textDark} />
        </TouchableOpacity>
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
  actionBack: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.textLight,
  },
  actionStar: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: colors.primary,
    color: colors.white,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    width: '70%',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
  },
  priceWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  priceText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.price,
  },
  descriptionWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description1: {
    marginBottom: 15,
  },
  description1Lable: {
    color: colors.textLight,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  description1Text: {
    color: colors.textDark,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
  },
  imageWrapper: {
    marginLeft: 60,
  },
  image: {
    width: 296,
    height: 176,
    resizeMode: 'contain',
  },
  ingredientsWrapper: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  ingredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsItemWrapper: {
    marginTop: 10,
  },
  ingredientsItem: {
    paddingHorizontal: 10,
    marginRight: 15,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientsItemImage: {
    resizeMode: 'contain',
  },
  placeOrderButton: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  placeOrderButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
    marginRight: 10,
  },
});

export default ItemDetail;
