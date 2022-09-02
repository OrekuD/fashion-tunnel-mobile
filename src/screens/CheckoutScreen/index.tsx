import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import CachedImage from '../../components/CachedImage';
import RadioButton from '../../components/RadioButton';
import Typography from '../../components/Typography';
import {cedi, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import CreateOrderRequest from '../../network/requests/CreateOrderRequest';
import ordersAsyncActions from '../../store/actions/orders.action';
import RequestManager from '../../store/request-manager';
import {useSelectState} from '../../store/selectors';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  product: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightergrey,
    paddingVertical: normalizeY(14),
    // paddingHorizontal: normalizeX(14),
  },
  image: {
    width: screenwidth * 0.2,
    height: screenwidth * 0.2 * 1.2,
    resizeMode: 'contain',
  },
  address: {
    paddingVertical: normalizeY(12),
    borderColor: colors.lightergrey,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'CheckoutScreen'> {}

const CheckoutScreen = (props: Props) => {
  const {cart, userAddress, request, orders} = useSelectState();
  const {bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);

  const activeAddress = React.useMemo(
    () => userAddress.list.find(({id}) => id === userAddress.activeAddressId),
    [userAddress.activeAddressId, userAddress.list],
  );

  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(ordersAsyncActions.createOrder.typePrefix)) {
      RM.consume(ordersAsyncActions.createOrder.typePrefix);
      setIsLoading(false);
      props.navigation.navigate('OrderScreen', {orderId: orders.list[0].id});
      return;
    }

    if (RM.isRejected(ordersAsyncActions.createOrder.typePrefix)) {
      RM.consume(ordersAsyncActions.createOrder.typePrefix);
      setIsLoading(false);
      Alert.alert('Order', 'Your order could not be placed');
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    // if (emailError.trim().length > 0) {
    //   return false;
    // }
    return true;
  }, []);

  const handleSubmit = () => {
    if (!canProceed || isLoading) {
      return;
    }
    setIsLoading(true);

    const payload: CreateOrderRequest = {
      discount: cart.discountPercentage,
      products: cart.products,
      subtotal: cart.subtotal,
      total: cart.total,
      userAddressId: userAddress.activeAddressId,
    };
    dispatch(ordersAsyncActions.createOrder(payload));
  };

  return (
    <View style={styles.container}>
      <AppBar title="Checkout" />
      <ScrollView
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{paddingHorizontal: normalizeX(24)}}>
        <Typography
          variant="h2"
          color={colors.deepgrey}
          style={{marginTop: normalizeY(24), marginBottom: normalizeY(12)}}>
          Cart details
        </Typography>
        {cart.products.map(({name, total, count, images, price}, index) => {
          return (
            <View style={styles.product} key={index}>
              <CachedImage source={{uri: images[0]}} style={styles.image} />
              <View style={{flex: 1, paddingLeft: normalizeX(12)}}>
                <Typography variant="sm" color={colors.deepgrey}>
                  {name}
                </Typography>
                <Typography variant="sm" color={colors.deepgrey}>
                  {`${cedi} ${price.toFixed(2)}`}
                </Typography>
                <Typography variant="sm" color={colors.deepgrey}>
                  {`QTY - ${count}`}
                </Typography>
              </View>
            </View>
          );
        })}
        <Typography
          variant="h2"
          color={colors.deepgrey}
          style={{marginTop: normalizeY(24), marginBottom: normalizeY(12)}}>
          Delivery details
        </Typography>
        {activeAddress ? (
          <>
            <View style={styles.address}>
              <View style={{flex: 1}}>
                <Typography
                  variant="sm"
                  fontWeight={500}
                  color={colors.deepgrey}>
                  {activeAddress.name}
                </Typography>
                <Typography variant="sm" color={colors.deepgrey}>
                  {activeAddress.addressLine}
                </Typography>
                <Typography variant="sm" color={colors.deepgrey}>
                  {activeAddress.postalCode}
                </Typography>
              </View>
              <RadioButton isChecked />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('AddressBookScreen')}
              style={{marginTop: normalizeY(12)}}>
              <Typography variant="sm" color={colors.primary}>
                Change
              </Typography>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Typography variant="sm">No addresses set</Typography>
          </>
        )}
      </ScrollView>
      <Button
        variant="flat"
        label="Confirm"
        isLoading={isLoading}
        isDisabled={isLoading || !canProceed}
        onPress={handleSubmit}
        style={{
          marginTop: normalizeY(12),
          alignSelf: 'center',
          marginBottom: bottom + normalizeY(12),
        }}
      />
    </View>
  );
};

export default CheckoutScreen;
