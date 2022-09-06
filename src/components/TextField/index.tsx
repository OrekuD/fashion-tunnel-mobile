import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';
import Typography from '../Typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: normalizeY(16),
  },
  roundedTextInputContainer: {
    width: '100%',
    height: normalizeY(52),
    borderRadius: normalizeY(52 / 2),
    backgroundColor: colors.lightgrey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalizeX(16),
  },
  roundedTextInput: {
    flex: 1,
    height: '90%',
    marginRight: normalizeX(16),
    color: colors.black,
    fontSize: normalizeY(14),
    fontFamily: 'Poppins-Regular',
  },
  textInputContainer: {
    width: '100%',
    height: normalizeY(48),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.darkgrey,
  },
  textInput: {
    flex: 1,
    height: '94%',
    marginRight: normalizeX(16),
    color: colors.black,
    fontSize: normalizeY(14),
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 0,
  },
});

interface Props {
  textInputProps?: TextInputProps;
  containerStyle?: ViewStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  name: string;
  rounded?: boolean;
}

const TextField = (props: Props) => {
  if (props.rounded) {
    return (
      <View style={{...styles.container, ...props.containerStyle}}>
        <View style={styles.roundedTextInputContainer}>
          {props.leftIcon}
          <TextInput
            style={styles.roundedTextInput}
            placeholderTextColor="#B8B8B8"
            {...props.textInputProps}
          />
          {props.rightIcon}
        </View>
        {props?.error && props.error.length > 0 && (
          <Typography
            variant="sm"
            color={colors.error}
            style={{marginLeft: normalizeX(4), marginTop: normalizeY(4)}}>
            {props.error}
          </Typography>
        )}
      </View>
    );
  }
  return (
    <View style={{...styles.container, ...props.containerStyle}}>
      <Typography variant="sm" color={colors.deepgrey}>
        {props.name}
      </Typography>
      <View
        style={{
          ...styles.textInputContainer,
          borderColor: props?.error ? colors.error : colors.darkgrey,
          borderBottomWidth: props?.error ? 1.5 : 1,
        }}>
        <TextInput
          style={{
            ...styles.textInput,
          }}
          placeholderTextColor="#B8B8B8"
          {...props.textInputProps}
        />
        {props.rightIcon}
      </View>
      {props?.error && props.error.length > 0 && (
        <Typography
          variant="sm"
          color={colors.error}
          style={{marginLeft: normalizeX(4), marginTop: normalizeY(4)}}>
          {props.error}
        </Typography>
      )}
    </View>
  );
};

export default TextField;
