import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RootStackParams} from '../../../types';
import colors from '../../constants/colors';

const styles = StyleSheet.create({});

interface Props extends StackScreenProps<RootStackParams, 'Screen'> {}

const Screen = (props: Props) => {
  return <ScrollView style={{backgroundColor: colors.white}}></ScrollView>;
};

export default Screen;
