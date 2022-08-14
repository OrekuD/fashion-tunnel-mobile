import React from 'react';
import {
  Animated,
  KeyboardAvoidingView,
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
import {wrapText} from '../../utils/wrapText';
import Section from '../../components/Section';

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
        <Section
          sectionTitle="New Arrivals"
          navigation={props.navigation}
          products={images}
          sectionDescription=""
        />
        <Section
          sectionTitle="New Summer Arrivals"
          navigation={props.navigation}
          products={images}
          sectionDescription=""
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
