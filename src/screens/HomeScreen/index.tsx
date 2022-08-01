import React from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Typography from '../../components/Typography';
import {normalizeX, normalizeY} from '../../utils/normalize';
import colors from '../../constants/colors';
import {screenheight} from '../../constants';

const HomeScreen = () => {
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
          HomeScreen
        </Typography>
        {/* {Array(10)
          .fill('9')
          .map(() => (
            <View
              style={{width: screenheight, height: 300, backgroundColor: 'red'}}
            />
          ))} */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
