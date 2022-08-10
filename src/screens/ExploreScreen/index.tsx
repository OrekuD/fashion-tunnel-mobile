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

const ExploreScreen = () => {
  const {top} = useSafeAreaInsets();
  const categories = React.useMemo(
    () => [
      {
        name: 't-shirt',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      },
      {
        name: 'shoes',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
      {
        name: 'hoodie',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9vZGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
      {
        name: 't-shirt',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      },
      {
        name: 't-shirt',
        productsLength: 3,
        uri: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      },
    ],
    [],
  );
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: top,
        paddingHorizontal: normalizeX(24),
        paddingBottom: normalizeY(120),
      }}
      style={{backgroundColor: colors.white}}>
      <View style={styles.header}>
        <Typography variant="h2" fontWeight={500} color={colors.deepgrey}>
          Category
        </Typography>
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
      <TextField
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
      <View style={{marginTop: normalizeY(8)}}>
        {categories.map(({name, productsLength, uri}, index) => (
          <TouchableOpacity
            style={styles.category}
            activeOpacity={0.9}
            key={index}>
            <CachedImage source={{uri}} style={styles.image} />
            <View style={styles.content}>
              <Typography variant="h2" color={colors.white} fontWeight={600}>
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
    </ScrollView>
  );
};

export default ExploreScreen;
