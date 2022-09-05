import {CommonActions} from '@react-navigation/native';
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
  summary: {
    borderBottomColor: colors.lightergrey,
    borderBottomWidth: 1,
    paddingBottom: normalizeY(12),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalizeY(6),
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
      // props.navigation.navigate('OrderScreen', {orderId: orders.list[0].id});
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {name: 'MainScreen'},
            {
              name: 'OrderScreen',
              params: {
                orderId: orders.list[0].id,
              },
            },
          ],
        }),
      );
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
    if (!activeAddress?.id) return false;
    if (cart.products.length === 0) return false;
    return activeAddress.id.length > 0;
  }, [userAddress, cart.products]);

  const summary = React.useMemo(() => {
    const data = [
      {label: 'Subtotal', value: `${cedi} ${cart.subtotal.toFixed(2)}`},
    ];

    if (cart.discountPercentage > 0) {
      data.push({
        label: 'Discount %',
        value: `${cart.discountPercentage * 100} %`,
      });
      data.push({
        label: 'Discount',
        value: `${cedi} ${cart.discount.toFixed(2)}`,
      });
    }

    return data;
  }, [cart.discount, cart.discountPercentage, cart.subtotal, cart.total]);

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
        contentContainerStyle={{
          paddingHorizontal: normalizeX(24),
          paddingBottom: normalizeY(100),
        }}>
        <View style={styles.summary}>
          <Typography
            variant="h2"
            color={colors.deepgrey}
            style={{marginTop: normalizeY(24), marginBottom: normalizeY(12)}}>
            Cart summary
          </Typography>
          {summary.map(({label, value}, index) => (
            <View style={styles.item} key={index}>
              <Typography variant="sm" color={colors.deepgrey}>
                {label}
              </Typography>
              <Typography variant="sm" color={colors.deepgrey} fontWeight={500}>
                {value}
              </Typography>
            </View>
          ))}
          <View style={styles.item}>
            <Typography variant="sm" color={colors.deepgrey}>
              Total
            </Typography>
            <Typography variant="sm" color={colors.deepgrey} fontWeight={500}>
              {`${cedi} ${cart.total.toFixed(2)}`}
            </Typography>
          </View>
        </View>
        <Typography
          variant="h2"
          color={colors.deepgrey}
          style={{marginTop: normalizeY(24), marginBottom: normalizeY(12)}}>
          Cart details
        </Typography>
        {cart.products.map(({name, total, count, images}, index) => {
          return (
            <View style={styles.product} key={index}>
              <CachedImage source={{uri: images[0]}} style={styles.image} />
              <View style={{flex: 1, paddingLeft: normalizeX(12)}}>
                <Typography variant="sm" color={colors.deepgrey}>
                  {name}
                </Typography>
                <Typography variant="sm" color={colors.deepgrey}>
                  {`${cedi} ${total.toFixed(2)}`}
                </Typography>
                <Typography variant="sm" color={colors.deepgrey}>
                  {`x ${count}`}
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
            <Button
              label="Add one"
              variant="flat"
              onPress={() => props.navigation.navigate('AddressBookScreen')}
              style={{marginTop: normalizeY(12)}}
            />
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
