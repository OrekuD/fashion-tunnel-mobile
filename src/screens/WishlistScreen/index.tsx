import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import favouritesAsyncActions from '../../store/actions/favourites.action';
import RequestManager from '../../store/request-manager';
import {useSelectState} from '../../store/selectors';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'MainScreen'> {}

const WishlistScreen = (props: Props) => {
  const {bottom, top} = useSafeAreaInsets();

  const {request, favourites, authentication} = useSelectState();

  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    if (!authentication.isAuthenticated) {
      setIsLoading(false);
      return;
    }
    dispatch(favouritesAsyncActions.index());
  }, []);

  const [updatedAt] = React.useState(request.updatedAt);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(favouritesAsyncActions.index.typePrefix)) {
      RM.consume(favouritesAsyncActions.index.typePrefix);
      setIsLoading(false);
      return;
    }

    if (RM.isRejected(favouritesAsyncActions.index.typePrefix)) {
      RM.consume(favouritesAsyncActions.index.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: favourites.list.length === 0 ? top + normalizeY(12) : 0,
      }}>
      {favourites.list.length === 0 ? (
        <Typography
          variant="h3"
          fontWeight={500}
          color={colors.deepgrey}
          style={{paddingLeft: normalizeX(24)}}>
          Wishlist
        </Typography>
      ) : (
        <AppBar
          title="Wishlist"
          subTitle={
            favourites.list.length > 1
              ? `${favourites.list.length} items`
              : '1 item'
          }
          noBackButton
        />
      )}
      {isLoading ? (
        <View style={{paddingTop: normalizeY(120), alignItems: 'center'}}>
          <ActivityIndicator size="small" color={colors.deepgrey} />
        </View>
      ) : (
        <>
          {authentication.isAuthenticated ? (
            <>
              <FlatList
                data={favourites.list}
                numColumns={2}
                ListEmptyComponent={
                  <View
                    style={{
                      paddingTop: normalizeY(120),
                    }}>
                    <Typography
                      variant="h1"
                      color={colors.deepgrey}
                      style={{marginBottom: normalizeY(12)}}>
                      Your wishlist is empty
                    </Typography>
                    <Button label="Explore" onPress={() => {}} variant="flat" />
                  </View>
                }
                style={{backgroundColor: colors.white}}
                contentContainerStyle={{
                  paddingHorizontal: normalizeX(18),
                  paddingTop: normalizeY(12),
                  paddingBottom: bottom,
                }}
                columnWrapperStyle={{
                  width: '100%',
                  justifyContent: 'space-between',
                }}
                keyExtractor={() => Math.random().toString()}
                renderItem={({item}) => (
                  <ProductCard
                    product={item}
                    onPress={() =>
                      props.navigation.navigate('ProductScreen', {
                        productId: item.id,
                      })
                    }
                  />
                )}
              />
            </>
          ) : (
            <View
              style={{
                paddingTop: normalizeY(190),
                paddingHorizontal: normalizeX(24),
              }}>
              <Typography
                variant="h1"
                color={colors.deepgrey}
                style={{marginBottom: normalizeY(12)}}>
                Your wishlist is empty
              </Typography>

              <Typography
                variant="sm"
                color={colors.deepgrey}
                style={{marginBottom: normalizeY(12)}}>
                Sign in to view your previously saved items
              </Typography>
              <Button
                label="Sign in"
                onPress={() => props.navigation.navigate('SignInScreen')}
                variant="flat"
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default WishlistScreen;
