import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import {ArrowLeftIcon, ArrowRightIcon} from '../Icons';

const styles = StyleSheet.create({
  container: {
    width: normalizeY(42),
    height: normalizeY(42),
    borderRadius: normalizeY(42 / 2),
    backgroundColor: colors.deepgrey,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: normalizeX(24),
    zIndex: 10,
  },
});

interface Props {
  onPress: () => void;
}

const BackButton = (props: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={{
        ...styles.container,
        top: (top || normalizeY(12)) + normalizeY(8),
      }}>
      <ArrowRightIcon
        width={normalizeY(24)}
        height={normalizeY(24)}
        color={colors.white}
        style={{
          transform: [{rotate: '180deg'}],
        }}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
