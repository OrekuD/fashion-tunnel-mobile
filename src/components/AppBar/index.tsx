import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import {ChevronRightIcon} from '../Icons';
import Typography from '../Typography';

const styles = StyleSheet.create({
  container: {
    width: screenwidth,
    paddingHorizontal: normalizeX(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingBottom: normalizeY(12),
    zIndex: 100,
  },
  title: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: screenwidth,
    alignItems: 'center',
    paddingHorizontal: normalizeX(60),
    transform: [{translateY: -normalizeY(4)}],
    // backgroundColor: colors.error,
  },
});

interface Props {
  title: string;
  subTitle?: string;
  onBackButtonPressed?: () => void;
}

const AppBar = (props: Props) => {
  const navigate = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: top + normalizeY(10),
        height: top + normalizeY(10) + normalizeY(26) + normalizeY(12),
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onBackButtonPressed || navigate.goBack}>
        <ChevronRightIcon
          width={normalizeY(26)}
          height={normalizeY(26)}
          color={colors.black}
          style={{transform: [{rotate: '180deg'}]}}
        />
      </TouchableOpacity>
      <View
        pointerEvents="none"
        style={{
          ...styles.title,
          paddingTop:
            props?.subTitle && props.subTitle.length > 0
              ? top
              : top + normalizeY(14),
        }}>
        <Typography
          variant="sm"
          fontWeight={600}
          color={colors.deepgrey}
          numberOfLines={1}>
          {props.title}
        </Typography>
        {props?.subTitle && props.subTitle.length > 0 && (
          <Typography variant="sm" color={colors.deepgrey} numberOfLines={1}>
            {props.subTitle}
          </Typography>
        )}
      </View>
      {/* <ChevronRightIcon
        width={normalizeY(24)}
        height={normalizeY(24)}
        color={colors.black}
      /> */}
    </View>
  );
};

export default AppBar;
