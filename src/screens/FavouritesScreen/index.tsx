import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'MainScreen'> {}

const FavouritesScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <AppBar title="FavouritesScreen" />
      <ScrollView style={{backgroundColor: colors.white}}></ScrollView>
    </View>
  );
};

export default FavouritesScreen;
