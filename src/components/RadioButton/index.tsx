import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../../constants/colors';
import {normalizeY} from '../../utils/normalize';

interface Props {
  isChecked: boolean;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    width: normalizeY(24),
    height: normalizeY(24),
    borderWidth: 2,
    borderRadius: normalizeY(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.grey,
  },
  checked: {
    width: normalizeY(14),
    height: normalizeY(14),
    borderRadius: normalizeY(7),
    backgroundColor: colors.deepgrey,
  },
});

const RadioButton = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.container}>
        {props.isChecked && <View style={styles.checked} />}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
