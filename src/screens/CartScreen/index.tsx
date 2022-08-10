import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParams} from '../../../types';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import CachedImage from '../../components/CachedImage';
import {CancelIcon, MinusIcon, PlusIcon} from '../../components/Icons';
import Typography from '../../components/Typography';
import {screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: normalizeY(18),
  },
  productImage: {
    width: screenwidth * 0.4,
    height: screenwidth * 0.4 * 1.2,
    borderRadius: normalizeY(12),
    marginRight: normalizeX(14),
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: normalizeY(30),
    height: normalizeY(30),
    borderRadius: normalizeY(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.deepgrey,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'CartScreen'> {}

const CartScreen = (props: Props) => {
  const {bottom, top} = useSafeAreaInsets();
  const cart = [
    {
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: 'Casual jeans and shoes',
      price: 10,
    },
    {
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: 'Casual jeans and shoes',
      price: 10,
    },
    {
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: 'Casual jeans and shoes',
      price: 10,
    },
  ];

  return (
    <>
      <BackButton
        onPress={() => {
          if (props.navigation.canGoBack()) {
            props.navigation.goBack();
          }
        }}
      />
      <ScrollView
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{
          paddingTop: top + normalizeY(64),
          paddingHorizontal: normalizeX(24),
        }}>
        {cart.map(({image, name, price}, index) => (
          <View style={styles.card} key={index}>
            <CachedImage source={{uri: image}} style={styles.productImage} />
            <View style={{flex: 1}}>
              <Typography variant="sm" fontWeight={500} color={colors.deepgrey}>
                {name}
              </Typography>
              <Typography variant="sm" fontWeight={500} color={colors.deepgrey}>
                ₵{price.toFixed(2)}
              </Typography>
              <View
                style={{
                  ...styles.row,
                  marginTop: 'auto',
                  marginBottom: normalizeY(2),
                }}>
                <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
                  <MinusIcon
                    width={normalizeY(16)}
                    height={normalizeY(16)}
                    color={colors.deepgrey}
                    strokeWidth={3}
                  />
                </TouchableOpacity>
                <View style={{width: normalizeX(36)}}>
                  <Typography variant="sm" fontWeight={600} textAlign="center">
                    1
                  </Typography>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.iconButton}>
                  <PlusIcon
                    width={normalizeY(16)}
                    height={normalizeY(16)}
                    color={colors.deepgrey}
                    strokeWidth={3}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{marginLeft: 'auto'}}>
                  <CancelIcon
                    width={normalizeY(16)}
                    height={normalizeY(16)}
                    color={colors.error}
                    strokeWidth={3}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 1)',
        ]}
        // pointerEvents="none"
        style={{
          alignItems: 'center',
          position: 'absolute',
          //   left: normalizeX(24),
          bottom: 0,
          paddingBottom: (bottom || normalizeY(12)) + normalizeY(6),
          width: '100%',
          height: normalizeY(110),
          //   backgroundColor: 'red',
          justifyContent: 'flex-end',
        }}>
        <Button label="Checkout" onPress={() => {}} />
      </LinearGradient>
    </>
  );
};

export default CartScreen;
