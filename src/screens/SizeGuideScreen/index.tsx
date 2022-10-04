import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import BackButton from '../../components/BackButton';
import CachedImage from '../../components/CachedImage';
import Typography from '../../components/Typography';
import {screenwidth} from '../../constants';
import colors from '../../constants/colors';
import Product from '../../models/Product';
import productsAsyncActions from '../../store/actions/products.action';
import RequestManager from '../../store/request-manager';
import {useSelectState} from '../../store/selectors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import {wrapText} from '../../utils/wrapText';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  image: {
    width: screenwidth * 0.3,
    // resizeMode: 'contain',
    height: 200,
    // backgroundColor: 'red',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: normalizeY(12),
    // backgroundColor: 'red',
  },
});

interface Props extends StackScreenProps<RootStackParams, 'SizeGuideScreen'> {}

const SizeGuideScreen = (props: Props) => {
  const [product, setProduct] = React.useState<Product>();
  const dispatch = useDispatch();
  const {products, request} = useSelectState();
  const [updatedAt] = React.useState(request.updatedAt);
  const [isLoading, setIsLoading] = React.useState(false);

  const sizes = React.useMemo(
    () => [
      {label: '42', value: 'xxs'},
      {label: '44', value: 'xs'},
      {label: '46', value: 's'},
      {label: '48', value: 'm'},
      {label: '50', value: 'l'},
      {label: '52', value: 'xl'},
      {label: '54', value: 'xxl'},
      {label: '56', value: 'xxl'},
      {label: '58', value: '4xl'},
      {label: '60', value: '5xl'},
      {label: '62', value: '6xl'},
    ],
    [],
  );

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(productsAsyncActions.getProduct.typePrefix)) {
      RM.consume(productsAsyncActions.getProduct.typePrefix);
      setIsLoading(false);
      return;
    }

    if (RM.isRejected(productsAsyncActions.getProduct.typePrefix)) {
      RM.consume(productsAsyncActions.getProduct.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  React.useEffect(() => {
    if (!props.route.params.productId) return;
    const _product = products.list.find(
      ({id}) => id === props.route.params.productId,
    );
    if (!_product) {
      dispatch(productsAsyncActions.getProduct(props.route.params.productId));
      return;
    }
    setProduct(_product);
    setIsLoading(false);
  }, [products.list, props.route.params.productId]);

  if (isLoading)
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
        }}>
        <ActivityIndicator size="small" color={colors.deepgrey} />
      </View>
    );

  if (!product)
    return (
      <>
        <AppBar title="Product" />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
            paddingBottom: normalizeY(140),
          }}>
          <Typography variant="sm" color={colors.deepgrey} textAlign="center">
            Product not found
          </Typography>
        </View>
      </>
    );

  return (
    <>
      <AppBar title="Size guide" subTitle="" />
      <ScrollView
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{paddingHorizontal: normalizeX(24)}}>
        <View style={styles.row}>
          <View
            style={{
              flex: 1,
              paddingRight: normalizeX(24),
              paddingTop: normalizeY(20),
            }}>
            <Typography variant="sm" color={colors.deepgrey} fontWeight={500}>
              {product.name}
            </Typography>
            <Typography variant="sm" color={colors.deepgrey}>
              {wrapText(product.description, 30)}
            </Typography>
          </View>
          <CachedImage
            source={{uri: product.images[0]}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        {sizes.map(({label, value}, index) => (
          <View
            key={label}
            style={{
              ...styles.item,
              backgroundColor: index % 2 === 0 ? '#F5F5F5' : colors.white,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Typography variant="sm" color={colors.deepgrey}>
                {label}
              </Typography>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Typography
                variant="sm"
                style={{textTransform: 'uppercase'}}
                color={colors.deepgrey}>
                {value}
              </Typography>
            </View>
          </View>
        ))}
        <Typography
          variant="sm"
          color={colors.deepgrey}
          style={{paddingTop: normalizeY(24), paddingBottom: normalizeY(100)}}>
          * Please note that the measurement may vary slightly according to
          different brands and styles
        </Typography>
      </ScrollView>
    </>
  );
};

export default SizeGuideScreen;
