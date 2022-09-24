import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {isAndroid, screenwidth} from '../../constants';
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
    // backgroundColor: colors.orange,
    paddingBottom: normalizeY(12),
    zIndex: 100,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: screenwidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalizeX(60),
    transform: [{translateY: -normalizeY(4)}],
  },
});

interface Props {
  title: string;
  subTitle?: string;
  onBackButtonPressed?: () => void;
  noBackButton?: boolean;
}

const AppBar = (props: Props) => {
  const navigate = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: top + normalizeY(10),
        height: top + (isAndroid ? normalizeY(64) : normalizeY(48)),
      }}>
      {props?.noBackButton ? null : (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginBottom: normalizeY(6)}}
          onPress={props.onBackButtonPressed || navigate.goBack}>
          <ChevronRightIcon
            width={normalizeY(26)}
            height={normalizeY(26)}
            color={colors.black}
            style={{transform: [{rotate: '180deg'}]}}
          />
        </TouchableOpacity>
      )}
      <View
        pointerEvents="none"
        style={{
          ...styles.title,
          paddingTop: top + (isAndroid ? normalizeY(2) : normalizeY(0)),
          height: top + (isAndroid ? normalizeY(64) : normalizeY(48)),
          // paddingTop:
          //   props?.subTitle && props.subTitle.length > 0
          //     ? top
          //     : top + normalizeY(14),
        }}>
        <Typography
          variant="sm"
          fontWeight={600}
          color={colors.deepgrey}
          numberOfLines={1}>
          {props.title}
        </Typography>
        {props?.subTitle && props.subTitle.length > 0 && (
          <Typography
            variant="sm"
            color={colors.deepgrey}
            numberOfLines={1}
            style={{marginTop: isAndroid ? normalizeY(4) : 0}}>
            {props.subTitle}
          </Typography>
        )}
      </View>
    </View>
  );
};

export default AppBar;
