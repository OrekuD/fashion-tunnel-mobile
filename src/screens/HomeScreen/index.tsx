import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Typography from '../../components/Typography';
import {normalizeX, normalizeY} from '../../utils/normalize';
import colors from '../../constants/colors';
import {cedi, images, screenheight, screenwidth} from '../../constants';
import {
  CartIcon,
  Logo,
  NotificationIcon,
  SearchIcon,
} from '../../components/Icons';
import CachedImage from '../../components/CachedImage';
import TextField from '../../components/TextField';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../types';
import Section from '../../components/Section';
import productsAsyncActions from '../../store/actions/products.action';
import {useSelectState} from '../../store/selectors';
import {useDispatch} from 'react-redux';
import RequestManager from '../../store/request-manager';
import searchAsyncActions from '../../store/actions/search.action';
import {searchActions} from '../../store/slices/search.slice';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: normalizeY(8),
    marginBottom: normalizeY(8),
  },
  iconButton: {
    width: normalizeY(48),
    height: normalizeY(48),
    borderRadius: normalizeY(48 / 2),
    backgroundColor: colors.lightgrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    position: 'relative',
  },
  profileImage: {
    width: normalizeY(48),
    height: normalizeY(48),
    borderRadius: normalizeY(48 / 2),
    // marginLeft: normalizeX(16),
    marginLeft: 'auto',
  },
  card: {
    width: screenwidth * 0.3,
    height: screenwidth * 0.3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    position: 'absolute',
    right: normalizeY(-6),
    top: normalizeY(-6),
    width: normalizeY(24),
    height: normalizeY(24),
    borderRadius: normalizeY(24 / 2),
    zIndex: 10,
    backgroundColor: colors.primary,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'MainScreen'> {}

const HomeScreen = (props: Props) => {
  const {top} = useSafeAreaInsets();
  const {products, request, user, cart} = useSelectState();

  const [isLoading, setIsLoading] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(productsAsyncActions.index());
  }, []);

  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(productsAsyncActions.index.typePrefix)) {
      RM.consume(productsAsyncActions.index.typePrefix);
      setIsLoading(false);
      return;
    }

    if (RM.isRejected(productsAsyncActions.index.typePrefix)) {
      RM.consume(productsAsyncActions.index.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const search = () => {
    dispatch(searchActions.addQuery({query: searchQuery}));
    dispatch(searchAsyncActions.index({query: searchQuery}));
    props.navigation.navigate('SearchScreen');
    setSearchQuery('');
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" translucent />
      <View
        style={{
          width: screenwidth,
          height: top,
          backgroundColor: colors.white,
        }}
      />
      <ScrollView
        contentContainerStyle={{
          // paddingHorizontal: normalizeX(24),
          paddingBottom: normalizeY(200),
        }}
        style={{backgroundColor: colors.white}}>
        <View style={{paddingHorizontal: normalizeX(24)}}>
          <View style={styles.header}>
            <Logo scale={2} color={colors.deepgrey} />
            {/* <TouchableOpacity style={styles.iconButton}>
              <NotificationIcon
                width={normalizeY(24)}
                height={normalizeY(24)}
                color={colors.deepgrey}
              />
            </TouchableOpacity> */}
            <CachedImage
              source={{
                // uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
                uri: user.profilePicture,
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={{...styles.row, marginBottom: normalizeY(12)}}>
            <View style={{flex: 1, marginRight: normalizeX(12)}}>
              <TextField
                name=""
                rounded
                containerStyle={{
                  marginBottom: 0,
                }}
                leftIcon={
                  <SearchIcon
                    width={normalizeY(24)}
                    height={normalizeY(24)}
                    color={colors.deepgrey}
                    style={{marginRight: normalizeX(12)}}
                  />
                }
                textInputProps={{
                  placeholder: 'Search Product',
                  keyboardType: 'web-search',
                  onSubmitEditing: search,
                  value: searchQuery,
                  onChangeText: setSearchQuery,
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => props.navigation.navigate('CartScreen')}>
              <CartIcon
                width={normalizeY(24)}
                height={normalizeY(24)}
                color={colors.deepgrey}
              />
              {cart.products.length > 0 && (
                <View style={styles.count}>
                  <Typography
                    variant="sm"
                    color={colors.white}
                    textAlign="center">
                    {cart.products.length}
                  </Typography>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
        {isLoading ? (
          <View style={{paddingTop: normalizeY(24), alignItems: 'center'}}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        ) : (
          <>
            <Section
              sectionTitle="New Arrivals"
              navigation={props.navigation}
              products={products.list}
              sectionDescription=""
            />
            <Section
              sectionTitle="New Summer Arrivals"
              navigation={props.navigation}
              products={products.list}
              sectionDescription=""
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
