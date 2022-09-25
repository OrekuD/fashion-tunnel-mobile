import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {DeviceTypes, RootStackParams} from '../../../types';
import Button from '../../components/Button';
import {MailIcon, EyeCancelIcon, EyeIcon} from '../../components/Icons';
import TextField from '../../components/TextField';
import Typography from '../../components/Typography';
import isAnyEmpty from '../../utils/isAnyEmpty';
import {normalizeX, normalizeY} from '../../utils/normalize';
import SignInRequest from '../../network/requests/SignInRequest';
import colors from '../../constants/colors';
import {isAndroid, screenheight, screenwidth} from '../../constants';
import authenticationAsyncActions from '../../store/actions/authentication.action';
import {useSelectState} from '../../store/selectors';
import RequestManager from '../../store/request-manager';
import BackButton from '../../components/BackButton';
import OtpInputs from 'react-native-otp-inputs';
import userAddressAsyncActions from '../../store/actions/userAddress.action';
import {forgotPasswordActions} from '../../store/slices/forgotPassword.slice';
import CodeNotReceivedBottomSheet from './CodeNotReceivedBottomSheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalizeX(24),
    paddingBottom: normalizeY(100),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalizeY(16),
  },
});

interface Props extends StackScreenProps<RootStackParams, 'EnterCodeScreen'> {}

const EnterCodeScreen = (props: Props) => {
  const [code, setCode] = React.useState('');
  const {top} = useSafeAreaInsets();
  const [showBottomSheet, setShowBottomSheet] = React.useState(false);

  const dispatch = useDispatch();

  const canProceed = React.useMemo(() => {
    return !isAnyEmpty([code]);
  }, [code]);

  const handleSubmit = () => {
    if (!canProceed) {
      return;
    }
    dispatch(forgotPasswordActions.addCode({code}));
    props.navigation.navigate('ResetPasswordScreen');
  };

  return (
    <>
      <CodeNotReceivedBottomSheet
        isVisible={showBottomSheet}
        onClose={() => setShowBottomSheet(false)}
        navigation={props.navigation}
      />
      <BackButton
        onPress={() => {
          if (props.navigation.canGoBack()) {
            props.navigation.goBack();
          }
        }}
      />
      <KeyboardAvoidingView style={{flex: 1}} behavior="height">
        <ScrollView
          contentContainerStyle={{
            // flex: 1,
            paddingTop: normalizeY(24) + top + screenheight * 0.15,
          }}
          style={{backgroundColor: colors.white}}>
          <View style={styles.container}>
            <Typography
              variant="h2"
              color={colors.deepgrey}
              fontWeight={600}
              textAlign="center"
              style={{marginBottom: normalizeY(24)}}>
              Enter 6 digit code
            </Typography>
            <OtpInputs
              handleChange={code => setCode(code)}
              numberOfInputs={6}
              autoFocus
              autofillFromClipboard={false}
              inputContainerStyles={{
                width: (screenwidth - normalizeX(100)) / 6,
                height: normalizeY(40),
                justifyContent: 'center',
                borderBottomColor: colors.grey,
                borderBottomWidth: 1,
                marginHorizontal: normalizeX(4),
              }}
              inputStyles={{
                color: colors.deepgrey,
                fontSize: normalizeY(24),
              }}
              placeholder="*"
              placeholderTextColor={colors.grey}
              textAlign="center"
              keyboardType="phone-pad"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{marginVertical: normalizeY(16)}}
              onPress={() => setShowBottomSheet(true)}>
              <Typography
                variant="sm"
                color={colors.primary}
                textAlign="center">
                Code not received?
              </Typography>
            </TouchableOpacity>
            <Button
              label="Continue"
              variant="rounded"
              onPress={handleSubmit}
              isDisabled={!canProceed}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default EnterCodeScreen;
