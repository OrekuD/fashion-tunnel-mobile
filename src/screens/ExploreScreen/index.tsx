import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Typography from '../../components/Typography';
import {normalizeX, normalizeY} from '../../utils/normalize';
import colors from '../../constants/colors';
import CachedImage from '../../components/CachedImage';
import {Logo, NotificationIcon, SearchIcon} from '../../components/Icons';
import TextField from '../../components/TextField';
import LinearGradient from 'react-native-linear-gradient';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../types';
import ProductCategories from '../../namespaces/ProductCategories';
import {useDispatch} from 'react-redux';
import {searchActions} from '../../store/slices/search.slice';
import searchAsyncActions from '../../store/actions/search.action';
import {useSelectState} from '../../store/selectors';
// @ts-ignore
import avatar from '../../assets/images/avatar.webp';
import AppBar from '../../components/AppBar';

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
  },
  profileImage: {
    width: normalizeY(48),
    height: normalizeY(48),
    borderRadius: normalizeY(48 / 2),
    // marginLeft: normalizeX(16),
    marginLeft: 'auto',
  },
  category: {
    width: '100%',
    height: normalizeY(140),
    borderRadius: normalizeY(24),
    marginBottom: normalizeY(14),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: normalizeY(24),
  },
  gradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: normalizeY(24),
    zIndex: 5,
  },
  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: normalizeY(24),
    zIndex: 6,
    justifyContent: 'flex-end',
    paddingHorizontal: normalizeX(24),
    paddingVertical: normalizeY(16),
  },
});

interface Props extends StackScreenProps<RootStackParams, 'CategoryScreen'> {}

const ExploreScreen = (props: Props) => {
  const {top} = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();
  const {user} = useSelectState();

  const search = () => {
    dispatch(searchActions.addQuery({query: searchQuery}));
    dispatch(searchAsyncActions.index({query: searchQuery}));
    props.navigation.navigate('SearchScreen');
    setSearchQuery('');
  };

  const categories = React.useMemo(
    () => [
      {
        id: ProductCategories.Status.TSHIRT,
        name: 't-shirt',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      },
      {
        id: ProductCategories.Status.SHOES,
        name: 'shoes',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
      {
        id: ProductCategories.Status.HOODIE,
        name: 'hoodie',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
      {
        id: ProductCategories.Status.DRESSES,
        name: 'dresses',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      },
    ],
    [],
  );

  return (
    <>
      <AppBar title="Explore" noBackButton />
      <ScrollView
        contentContainerStyle={{
          // paddingTop: top,
          // paddingHorizontal: normalizeX(24),
          paddingBottom: normalizeY(120),
        }}
        style={{backgroundColor: colors.white}}>
        {/* <View style={styles.header}>
        <Typography variant="h2" fontWeight={500} color={colors.deepgrey}>
          Explore
        </Typography>
        <CachedImage
          source={
            user?.profilePicture
              ? {
                  // uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
                  uri: user.profilePicture,
                }
              : avatar
          }
          style={styles.profileImage}
        />
      </View> */}
        <View style={{paddingHorizontal: normalizeX(24)}}>
          <TextField
            name=""
            rounded
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
          <View style={{marginTop: normalizeY(8)}}>
            {categories.map(({name, productsLength, uri, id}, index) => (
              <TouchableOpacity
                style={styles.category}
                activeOpacity={0.9}
                onPress={() =>
                  props.navigation.navigate('CategoryScreen', {
                    categoryId: id,
                  })
                }
                key={index}>
                <CachedImage source={{uri}} style={styles.image} />
                <View style={styles.content}>
                  <Typography
                    variant="h2"
                    color={colors.white}
                    fontWeight={600}>
                    {name.toUpperCase()}
                  </Typography>
                  <Typography variant="sm" color={colors.white}>
                    {productsLength} products
                  </Typography>
                </View>
                <LinearGradient
                  style={styles.gradient}
                  colors={[
                    'rgba(26, 26, 26, 0.15)',
                    'rgba(26, 26, 26, 0.1)',
                    'rgba(26, 26, 26, 0.1)',
                    'rgba(26, 26, 26, 0.4)',
                    'rgba(26, 26, 26, 0.6)',
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ExploreScreen;
