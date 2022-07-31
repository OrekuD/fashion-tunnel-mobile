import React from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Typography from '../../components/Typography';
import {normalizeX, normalizeY} from '../../utils/normalize';
import colors from '../../constants/colors';

const OrdersScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height">
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingTop: normalizeY(24) + top,
          paddingHorizontal: normalizeX(24),
        }}
        style={{backgroundColor: colors.white}}>
        <Typography variant="h2" color={colors.primary} fontWeight={600}>
          OrdersScreen
        </Typography>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OrdersScreen;
