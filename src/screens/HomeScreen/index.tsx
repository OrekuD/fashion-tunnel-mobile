import React from 'react';
import {
  Animated,
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
import {screenheight, screenwidth} from '../../constants';
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
    marginLeft: normalizeX(16),
  },
  card: {
    width: screenwidth * 0.3,
    height: screenwidth * 0.3,
    // backgroundColor: 'red',
    // marginRight: normalizeX(16),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});

interface Props extends StackScreenProps<RootStackParams, 'MainScreen'> {}

const HomeScreen = (props: Props) => {
  const {top} = useSafeAreaInsets();

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const itemWidth = React.useMemo(() => screenwidth * 0.5, []);
  const spacerWidth = React.useMemo(() => (screenwidth - itemWidth) / 2, []);

  const products = [
    {key: '87'},
    {id: '0'},
    {id: '0'},
    {id: '0'},
    {id: '0'},
    {id: '0'},
    {id: '0'},
    {key: '8'},
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingTop: top,
        // paddingHorizontal: normalizeX(24),
      }}
      style={{backgroundColor: colors.white}}>
      <View style={{paddingHorizontal: normalizeX(24)}}>
        <View style={styles.header}>
          <Logo scale={2} color={colors.deepgrey} />
          <TouchableOpacity style={styles.iconButton}>
            <NotificationIcon
              width={normalizeY(24)}
              height={normalizeY(24)}
              color={colors.deepgrey}
            />
          </TouchableOpacity>
          <CachedImage
            source={{
              uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            }}
            style={styles.profileImage}
          />
        </View>
        <View style={{...styles.row, marginBottom: normalizeY(12)}}>
          <View style={{flex: 1, marginRight: normalizeX(12)}}>
            <TextField
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
          </TouchableOpacity>
        </View>
      </View>
      {/* <View> */}
      <Animated.ScrollView
        snapToAlignment="center"
        snapToInterval={itemWidth + normalizeX(24)}
        contentContainerStyle={{
          paddingHorizontal: normalizeX(24),
          paddingTop: normalizeY(12),
        }}
        decelerationRate="fast"
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}>
        {products.map(({id, key}, index) => {
          return (
            <Animated.View
              style={{
                width: itemWidth,
                height: itemWidth * 1.2,
                backgroundColor: 'white',
                shadowColor: 'rgba(179, 180, 187, 0.6)',
                shadowOffset: {width: -1, height: -0.8},
                shadowOpacity: 0.3,
                shadowRadius: 5,
                marginRight: normalizeX(18),
                borderRadius: normalizeY(16),
              }}
              key={index}>
              <View
                style={{
                  width: itemWidth - normalizeX(18),
                  height: '100%',
                  // backgroundColor: 'white',
                  // shadowColor: colors.grey,
                  // shadowOffset: {width: 10, height: 10},
                  // shadowOpacity: 0.3,
                  // shadowRadius: 8,
                }}
              />
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
      {/* </View> */}
    </ScrollView>
  );
};

export default HomeScreen;
