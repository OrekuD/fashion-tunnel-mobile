import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import Typography from '../Typography';

const styles = StyleSheet.create({
  roundedContainer: {
    width: screenwidth - normalizeX(48),
    height: normalizeY(54),
    borderRadius: normalizeY(54 / 2),
    backgroundColor: colors.deepgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatContainer: {
    width: screenwidth - normalizeX(48),
    height: normalizeY(44),
    borderRadius: normalizeY(4),
    backgroundColor: colors.deepgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentContainer: {
    width: screenwidth - normalizeX(48),
    height: normalizeY(44),
    borderRadius: normalizeY(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.deepgrey,
  },
});

interface Props {
  label: string;
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  style?: ViewStyle;
  variant: 'rounded' | 'flat' | 'transparent';
}

const Button = (props: Props) => {
  if (props.variant === 'flat') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onPress}
        style={{
          ...styles.flatContainer,
          backgroundColor:
            props.isDisabled || props.isLoading
              ? 'rgba(41, 37, 37, 0.5)'
              : colors.deepgrey,
          ...props.style,
        }}
        disabled={props.isDisabled}>
        {props.isLoading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Typography variant="sm" color="white" style={{fontWeight: '600'}}>
            {props.label}
          </Typography>
        )}
      </TouchableOpacity>
    );
  }

  if (props.variant === 'transparent') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onPress}
        style={{
          ...styles.transparentContainer,
          ...props.style,
        }}
        disabled={props.isDisabled}>
        {props.isLoading ? (
          <ActivityIndicator size="small" color={colors.deepgrey} />
        ) : (
          <Typography
            variant="sm"
            color={colors.deepgrey}
            style={{fontWeight: '600'}}>
            {props.label}
          </Typography>
        )}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onPress}
      style={{
        ...styles.roundedContainer,
        backgroundColor:
          props.isDisabled || props.isLoading
            ? 'rgba(41, 37, 37, 0.5)'
            : colors.deepgrey,
        ...props.style,
      }}
      disabled={props.isDisabled}>
      {props.isLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Typography variant="sm" color="white" style={{fontWeight: '600'}}>
          {props.label}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

export default Button;
