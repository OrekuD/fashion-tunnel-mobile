import {StackScreenProps} from '@react-navigation/stack';
import {format} from 'date-fns';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import BottomSheet from '../../components/BottomSheet';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import {cedi, isAndroid, screenheight} from '../../constants';
import colors from '../../constants/colors';
import OrderStatus from '../../namespace/OrderStatus';
import {useSelectState} from '../../store/selectors';
import formatOrderNumber from '../../utils/formatOrderNumber';
import {normalizeX, normalizeY} from '../../utils/normalize';

const indicatorSize = normalizeY(12);

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
  },
  statusWrapper: {
    height: normalizeY(100),
    position: 'relative',
    paddingLeft: normalizeX(24),
    paddingTop: normalizeY(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: colors.grey,
  },
  indicatorWrapper: {
    width: indicatorSize * 3,
    height: indicatorSize * 3,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  sidePanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: indicatorSize * 2.5,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{translateX: -(indicatorSize * 2.5) / 2}],
  },
  completedIndicator: {
    width: indicatorSize * 2,
    height: indicatorSize * 2,
    borderRadius: (indicatorSize * 2) / 2,
    backgroundColor: colors.green,
  },
  inProgressIndicator: {
    width: indicatorSize * 2,
    height: indicatorSize * 2,
    borderRadius: (indicatorSize * 2) / 2,
    borderColor: colors.green,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    width: indicatorSize,
    height: indicatorSize,
    borderRadius: indicatorSize / 2,
    backgroundColor: colors.green,
  },
  last: {
    position: 'absolute',
    bottom: -(indicatorSize * 3),
    left: 0,
    transform: [{translateX: -(indicatorSize * 3) / 2}],
  },
  pendingIndicator: {
    width: indicatorSize * 0.8,
    height: indicatorSize * 0.8,
    borderRadius: (indicatorSize * 0.8) / 2,
    backgroundColor: colors.grey,
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
        value: `${cedi} ${order?.subtotal.toFixed(2)}`,
      },
      {
        label: 'Total',
        value: `${cedi} ${order?.total.toFixed(2)}`,
      },
    ];

    if (order?.discount && order.discount > 0) {
      data.unshift({
        label: 'Discount',
        value: `-${cedi} ${order?.discount.toFixed(2)}`,
      });
    }

    return data;
  }, [order?.subtotal]);

  const completedOrders = React.useMemo(
    () => [
      OrderStatus.Status.DELIVERED,
      OrderStatus.Status.CANCELLED,
      OrderStatus.Status.REJECTED,
    ],
    [],
  );

  const orderTracking = React.useMemo(
    () => [
      OrderStatus.Status.PENDING,
      OrderStatus.Status.ACCEPTED,
      OrderStatus.Status.PROCESSING,
      OrderStatus.Status.DISPATCHED,
      OrderStatus.Status.DELIVERED,
    ],
    [],
  );

  const content = (
    <>
      <View style={styles.section}>
        <Typography
          variant="h2"
          color={colors.deepgrey}
          fontWeight={500}
          style={{marginBottom: normalizeY(12)}}>
          Order details
        </Typography>
        {order?.products.map(({count, name, total}, index) => (
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
          fontWeight={500}
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
          fontWeight={500}
          color={colors.deepgrey}
          style={{marginBottom: normalizeY(12)}}>
          Delivery address
        </Typography>
        <Typography variant="sm" color={colors.deepgrey}>
          {order?.deliveryAddress.name}
        </Typography>
        <Typography variant="sm" color={colors.deepgrey}>
          {order?.deliveryAddress.addressLine}
        </Typography>
        <Typography variant="sm" color={colors.deepgrey}>
          {order?.deliveryAddress.postalCode}
        </Typography>
      </View>
    </>
  );

  if (!order)
    return (
      <View style={styles.container}>
        <AppBar title="Order" />
        <Typography
          variant="sm"
          style={{
            marginTop: normalizeY(34),
            alignSelf: 'center',
            width: '88%',
          }}
          color={colors.deepgrey}>
          The order was not found
        </Typography>
      </View>
    );

  // if (completedOrders.includes(order.status)) {
  //   return (
  //     <View style={styles.container}>
  //       <AppBar
  //         title="Order"
  //         subTitle={`#${formatOrderNumber(order.orderNumber, 4)}`}
  //       />
  //       <ScrollView
  //         contentContainerStyle={{
  //           paddingHorizontal: normalizeX(24),
  //           paddingTop: normalizeY(12),
  //         }}>
  //         <Typography
  //           variant="sm"
  //           style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
  //           color={colors.darkgrey}>
  //           {OrderStatus.State.text(order.status)}{' '}
  //           <Typography
  //             variant="sm"
  //             style={{fontSize: normalizeY(isAndroid ? 14.0 : 13.0)}}
  //             color={colors.deepgrey}>
  //             31 Aug, 2022 11:55 AM
  //           </Typography>
  //         </Typography>
  //         {content}
  //       </ScrollView>
  //     </View>
  //   );
  // }

  // React.useEffect(() => {
  //   console.log({p: order.statusTimeStamps});
  // }, []);

  return (
    <>
      <BottomSheet
        isOpen
        snapPoints={[normalizeY(140), screenheight * 0.7]}
        onClose={() => {}}>
        {content}
      </BottomSheet>
      <AppBar
        title="Order"
        subTitle={`#${formatOrderNumber(order.orderNumber, 4)}`}
      />
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: normalizeX(40),
            paddingTop: normalizeY(6),
            backgroundColor: colors.white,
            flex: 1,
          }}>
          <Typography variant="h1" textAlign="center">
            {completedOrders.includes(order.status)
              ? 'Your order is complete'
              : 'Your order is in progress'}
          </Typography>
          <View style={{paddingTop: normalizeY(12)}}>
            {orderTracking.map((orderStatus, index) => {
              const timeStamp = order.statusTimeStamps.find(
                ({status}) => status === orderStatus,
              );
              return (
                <View key={index} style={styles.statusWrapper}>
                  <View style={styles.sidePanel}>
                    {completedOrders.includes(order.status) ? (
                      <View style={styles.indicatorWrapper}>
                        <View style={styles.completedIndicator} />
                      </View>
                    ) : (
                      <View style={styles.indicatorWrapper}>
                        {orderStatus < order.status ? (
                          <View style={styles.completedIndicator} />
                        ) : orderStatus === order.status ? (
                          <View style={styles.inProgressIndicator}>
                            <View style={styles.indicator} />
                          </View>
                        ) : (
                          <View style={styles.pendingIndicator} />
                        )}
                      </View>
                    )}
                    <View
                      style={{
                        ...styles.line,
                        backgroundColor:
                          orderStatus <= order.status
                            ? colors.green
                            : colors.grey,
                        opacity: index === orderTracking.length - 1 ? 0 : 1,
                      }}
                    />
                  </View>
                  <Typography variant="sm" color={colors.deepgrey}>
                    {OrderStatus.State.description(orderStatus)}
                  </Typography>
                  {timeStamp?.time ? (
                    <View style={styles.row}>
                      <Typography variant="tiny" color={colors.darkgrey}>
                        {format(new Date(timeStamp.time), 'hh:mm a, dd/MM/yyy')}
                      </Typography>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
};

export default OrderScreen;
