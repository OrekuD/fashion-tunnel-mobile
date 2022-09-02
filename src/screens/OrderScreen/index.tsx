import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import Typography from '../../components/Typography';
import {cedi, isAndroid} from '../../constants';
import colors from '../../constants/colors';
import {useSelectState} from '../../store/selectors';
import formatOrderNumber from '../../utils/formatOrderNumber';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  section: {
    paddingVertical: normalizeY(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightergrey,
  },
  product: {
    flexDirection: 'row',
    marginTop: normalizeY(12),
    borderBottomColor: colors.lightgrey,
    // borderBottomWidth: 1,
    // paddingBottom: normalizeY(12),
  },
});

interface Props extends StackScreenProps<RootStackParams, 'OrderScreen'> {}

const OrderScreen = (props: Props) => {
  const {orders} = useSelectState();

  const order = React.useMemo(
    () => orders.list.find(({id}) => id === props.route.params.orderId),
    [orders.list, props.route.params.orderId],
  );

  const summary = React.useMemo(() => {
    const data = [
      {
        label: 'Subtotal',
        value: `${cedi} ${order?.subtotal}`,
      },
      {
        label: 'Total',
        value: `${cedi} ${order?.total}`,
      },
    ];

    if (order?.discount && order.discount > 0) {
      data.unshift({label: 'Dicount', value: `-${cedi} ${order?.discount}`});
    }

    return data;
  }, [order?.subtotal]);

  if (!order)
    return (
      <View style={styles.container}>
        <AppBar title="Order" />
      </View>
    );

  return (
    <View style={styles.container}>
      <AppBar
        title="Order"
        subTitle={`#${formatOrderNumber(order.orderNumber, 4)}`}
      />
      <ScrollView
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{
          paddingHorizontal: normalizeX(24),
          paddingTop: normalizeY(6),
        }}>
        <Typography
          variant="sm"
          style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
          color={colors.darkgrey}>
          Delivered{' '}
          <Typography
            variant="sm"
            style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
            color={colors.deepgrey}>
            31 Aug, 2022 11:55 AM
          </Typography>
        </Typography>
        <View style={styles.section}>
          <Typography
            variant="h2"
            color={colors.deepgrey}
            style={{marginBottom: normalizeY(12)}}>
            Order details
          </Typography>
          {order.products.map(({count, name, total}, index) => (
            <View key={index} style={styles.product}>
              <View style={{flex: 1, paddingRight: normalizeX(12)}}>
                <Typography
                  variant="sm"
                  style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
                  color={colors.deepgrey}>
                  {name}
                </Typography>
                <Typography
                  variant="sm"
                  style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
                  color={colors.deepgrey}>
                  {`${cedi} ${total.toFixed(2)}`}
                </Typography>
              </View>
              <Typography
                variant="sm"
                style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
                color={colors.deepgrey}>
                x {count}
              </Typography>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Typography
            variant="h2"
            color={colors.deepgrey}
            style={{marginBottom: normalizeY(12)}}>
            Order summary
          </Typography>
          {summary.map(({label, value}, index) => (
            <View key={index} style={styles.product}>
              <View style={{flex: 1, paddingRight: normalizeX(12)}}>
                <Typography
                  variant="sm"
                  style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
                  color={colors.deepgrey}>
                  {label}
                </Typography>
              </View>
              <Typography
                variant="sm"
                style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
                color={colors.deepgrey}>
                {value}
              </Typography>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Typography
            variant="h2"
            color={colors.deepgrey}
            style={{marginBottom: normalizeY(12)}}>
            Delivery address
          </Typography>
          <Typography variant="sm" color={colors.deepgrey}>
            {order.deliveryAddress.name}
          </Typography>
          <Typography variant="sm" color={colors.deepgrey}>
            {order.deliveryAddress.postalCode}
          </Typography>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;
