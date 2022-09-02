import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import ProductCard from '../../components/ProductCard';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import {useSelectState} from '../../store/selectors';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'MainScreen'> {}

const FavouritesScreen = (props: Props) => {
  const {favourites} = useSelectState();
  const {bottom, top} = useSafeAreaInsets();
  return (
    <View style={{...styles.container, paddingTop: top + normalizeY(12)}}>
      {/* <AppBar title="Favourites" /> */}
      <Typography
        variant="h3"
        fontWeight={500}
        style={{paddingLeft: normalizeX(24)}}>
        Wishlist
      </Typography>
      <FlatList
        data={favourites.list}
        numColumns={2}
        ListEmptyComponent={
          <View
            style={{
              paddingTop: normalizeY(120),
            }}>
            <Typography variant="sm" color={colors.deepgrey} textAlign="center">
              Your wishlist is empty
            </Typography>
          </View>
        }
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{
          paddingHorizontal: normalizeX(18),
          paddingTop: normalizeY(12),
          paddingBottom: bottom,
        }}
        columnWrapperStyle={{width: '100%', justifyContent: 'space-between'}}
        keyExtractor={() => Math.random().toString()}
        renderItem={({item}) => (
          <ProductCard
            product={item}
            onPress={() =>
              props.navigation.navigate('ProductScreen', {productId: item.id})
            }
          />
        )}
      />
    </View>
  );
};

export default FavouritesScreen;
