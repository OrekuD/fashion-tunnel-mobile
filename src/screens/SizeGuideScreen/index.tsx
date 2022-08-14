import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RootStackParams} from '../../../types';
import BackButton from '../../components/BackButton';
import colors from '../../constants/colors';

const styles = StyleSheet.create({});

interface Props extends StackScreenProps<RootStackParams, 'SizeGuideScreen'> {}

const SizeGuideScreen = (props: Props) => {
  return (
    <>
      <BackButton onPress={props.navigation.goBack} />
      <ScrollView style={{backgroundColor: colors.white}}></ScrollView>
    </>
  );
};

export default SizeGuideScreen;
