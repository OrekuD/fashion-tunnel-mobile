import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import {useSelectState} from '../../store/selectors';
import formatOrderNumber from '../../utils/formatOrderNumber';
import {normalizeX, normalizeY} from '../../utils/normalize';
import {format} from 'date-fns';
import OrderStatus from '../../namespace/OrderStatus';
import {cedi} from '../../constants';
import ordersAsyncActions from '../../store/actions/orders.action';
import {useDispatch} from 'react-redux';
import RequestManager from '../../store/request-manager';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  order: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalizeY(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightergrey,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'MainScreen'> {}

const OrdersScreen = (props: Props) => {
  const {orders, request} = useSelectState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch(ordersAsyncActions.index());
  }, []);

  const [updatedAt] = React.useState(request.updatedAt);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(ordersAsyncActions.index.typePrefix)) {
      RM.consume(ordersAsyncActions.index.typePrefix);
      setIsLoading(false);
      return;
    }

    if (RM.isRejected(ordersAsyncActions.index.typePrefix)) {
      RM.consume(ordersAsyncActions.index.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  return (
    <View style={styles.container}>
      <AppBar title="Orders" />
      {isLoading ? (
        <View style={{paddingTop: normalizeY(140), alignItems: 'center'}}>
          <ActivityIndicator size="small" color={colors.deepgrey} />
        </View>
      ) : (
        <ScrollView
          style={{backgroundColor: colors.white}}
          contentContainerStyle={{paddingHorizontal: normalizeX(24)}}>
          {orders.list.length === 0 ? (
            <View style={{paddingTop: normalizeY(24)}}>
              <Typography variant="h2" color={colors.deepgrey}>
                You currently have no orders.
              </Typography>
            </View>
          ) : (
            <>
              {orders.list.map((order, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.order}
                    key={index}
                    onPress={() =>
                      props.navigation.navigate('OrderScreen', {
                        orderId: order.id,
                      })
                    }>
                    <View>
                      <Typography
                        variant="sm"
                        color={colors.deepgrey}
                        fontWeight={500}>
                        {`# ${formatOrderNumber(order.orderNumber, 4)}`}
                      </Typography>
                      <Typography variant="sm" color={colors.deepgrey}>
                        {format(new Date(order.createdAt), 'dd/MM/yyy')}
                      </Typography>
                    </View>
                    <View>
                      <Typography
                        variant="sm"
                        color={colors.deepgrey}
                        fontWeight={500}>
                        {`${cedi} ${order.total.toFixed(2)}`}
                      </Typography>
                      <Typography
                        variant="sm"
                        color={colors.deepgrey}
                        fontWeight={500}>
                        {OrderStatus.State.text(order.orderStatus)}
                      </Typography>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default OrdersScreen;
