import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParams} from '../../../types';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import BottomSheet from '../BottomSheet';
import Button from '../Button';
import Typography from '../Typography';

const styles = StyleSheet.create({
  bottomTab: {
    paddingHorizontal: normalizeX(24),
    flex: 1,
    paddingTop: normalizeY(12),
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});

interface Props {
  isVisible: boolean;
  onClose: () => void;
  navigation: StackNavigationProp<RootStackParams>;
}

const SignInRequiredBottomSheet = (props: Props) => {
  return (
    <BottomSheet
      isOpen={props.isVisible}
      onClose={props.onClose}
      height={normalizeY(240)}>
      <View style={styles.bottomTab}>
        <Typography
          variant="h1"
          color={colors.deepgrey}
          style={{
            paddingBottom: normalizeY(12),
          }}>
          Wishlist
        </Typography>
        <Typography variant="sm" color={colors.deepgrey}>
          To add an item to your wishlist, you need to sign into your account
        </Typography>
        <View style={styles.row}>
          <Button
            label="Create one"
            onPress={() => {
              props.onClose();
              props.navigation.navigate('SignUpScreen');
            }}
            variant="transparent"
            style={{width: '48%'}}
          />
          <Button
            label="Sign in"
            onPress={() => {
              props.onClose();
              props.navigation.navigate('SignInScreen');
            }}
            variant="flat"
            style={{width: '48%'}}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default SignInRequiredBottomSheet;
