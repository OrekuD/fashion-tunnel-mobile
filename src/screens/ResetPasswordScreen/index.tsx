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
import {isAndroid, screenheight} from '../../constants';
import authenticationAsyncActions from '../../store/actions/authentication.action';
import {useSelectState} from '../../store/selectors';
import RequestManager from '../../store/request-manager';
import BackButton from '../../components/BackButton';
import ResetPasswordRequest from '../../network/requests/ResetPasswordRequest';
import forgotPasswordAsyncActions from '../../store/actions/forgotPassword.action';
import {CommonActions} from '@react-navigation/native';

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

interface Props
  extends StackScreenProps<RootStackParams, 'ResetPasswordScreen'> {}

const ResetPasswordScreen = (props: Props) => {
  const [passwordError, setPasswordError] = React.useState('');
  const [codeError, setCodeError] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const {top} = useSafeAreaInsets();
  const {forgotPassword} = useSelectState();

  const dispatch = useDispatch();
  const {request} = useSelectState();
  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(forgotPasswordAsyncActions.resetPassword.typePrefix)) {
      RM.consume(forgotPasswordAsyncActions.resetPassword.typePrefix);
      setIsLoading(false);
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'MainScreen',
              state: {
                routes: [
                  {
                    name: 'ProfileScreen',
                  },
                ],
              },
            },
          ],
        }),
      );
      return;
    }

    if (RM.isRejected(forgotPasswordAsyncActions.resetPassword.typePrefix)) {
      RM.consume(forgotPasswordAsyncActions.resetPassword.typePrefix);
      setIsLoading(false);
      setCodeError('Your code is invalid');
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    return !isAnyEmpty([confirmPassword, password]);
  }, [confirmPassword, password]);

  const handleSubmit = () => {
    if (!canProceed || isLoading) {
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setIsLoading(true);

    const payload: ResetPasswordRequest = {
      code: forgotPassword.code,
      email: forgotPassword.email,
      password: password,
    };
    dispatch(forgotPasswordAsyncActions.resetPassword(payload));
  };

  return (
    <>
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
              Reset your password
            </Typography>
            <TextField
              name="Password"
              textInputProps={{
                placeholder: 'Enter your password',
                value: password,
                onChangeText: text => {
                  setPassword(text);
                  setPasswordError('');
                },
                autoCapitalize: 'none',
                secureTextEntry: showPassword,
              }}
              rightIcon={
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setShowPassword(prevValue => !prevValue)}>
                  {showPassword ? (
                    <EyeCancelIcon
                      width={normalizeY(24)}
                      height={normalizeY(24)}
                      color={colors.grey}
                    />
                  ) : (
                    <EyeIcon
                      width={normalizeY(24)}
                      height={normalizeY(24)}
                      color={colors.grey}
                    />
                  )}
                </TouchableOpacity>
              }
              error={passwordError}
            />

            <TextField
              name="Confirm password"
              textInputProps={{
                placeholder: 'Enter password confirmation',
                value: confirmPassword,
                onChangeText: text => {
                  setConfirmPassword(text);
                  setPasswordError('');
                },
                autoCapitalize: 'none',
                secureTextEntry: showConfirmPassword,
              }}
              rightIcon={
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    setShowConfirmPassword(prevValue => !prevValue)
                  }>
                  {showConfirmPassword ? (
                    <EyeCancelIcon
                      width={normalizeY(24)}
                      height={normalizeY(24)}
                      color={colors.grey}
                    />
                  ) : (
                    <EyeIcon
                      width={normalizeY(24)}
                      height={normalizeY(24)}
                      color={colors.grey}
                    />
                  )}
                </TouchableOpacity>
              }
            />
            {codeError.length > 0 && (
              <Typography variant="sm" color={colors.error}>
                {codeError}
              </Typography>
            )}
            <Button
              label="Submit"
              variant="rounded"
              onPress={handleSubmit}
              isDisabled={isLoading || !canProceed}
              isLoading={isLoading}
              style={{marginTop: normalizeY(16)}}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ResetPasswordScreen;
