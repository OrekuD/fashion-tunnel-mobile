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
import userAddressAsyncActions from '../../store/actions/userAddress.action';

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

interface Props extends StackScreenProps<RootStackParams, 'SignInScreen'> {}

const SignInScreen = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const {top} = useSafeAreaInsets();

  const dispatch = useDispatch();
  const {request} = useSelectState();
  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(authenticationAsyncActions.signin.typePrefix)) {
      RM.consume(authenticationAsyncActions.signin.typePrefix);
      dispatch(userAddressAsyncActions.index());
      setIsLoading(false);
      if (props.navigation.canGoBack()) {
        props.navigation.goBack();
      } else {
        props.navigation.navigate('MainScreen');
      }
      return;
    }

    if (RM.isRejected(authenticationAsyncActions.signin.typePrefix)) {
      RM.consume(authenticationAsyncActions.signin.typePrefix);
      setIsLoading(false);
      setEmailError('Your credentials are invalid');
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    if (emailError.trim().length > 0) {
      return false;
    }
    return !isAnyEmpty([email, password]);
  }, [email, password, emailError]);

  const handleSubmit = () => {
    if (!canProceed || isLoading) {
      return;
    }
    setIsLoading(true);

    const payload: SignInRequest = {
      email: email.trim().toLowerCase(),
      password: password.trim(),
      deviceType: isAndroid ? DeviceTypes.ANDROID : DeviceTypes.IOS,
    };
    dispatch(authenticationAsyncActions.signin(payload));
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
              Welcome back
            </Typography>
            <TextField
              name="E-mail"
              textInputProps={{
                placeholder: 'Enter your e-mail',
                keyboardType: 'email-address',
                value: email,
                onChangeText: text => {
                  setEmail(text);
                  setEmailError('');
                },
                autoCapitalize: 'none',
              }}
              rightIcon={
                <MailIcon
                  width={normalizeY(24)}
                  height={normalizeY(24)}
                  color={colors.grey}
                />
              }
              error={emailError}
            />
            <TextField
              name="Password"
              textInputProps={{
                placeholder: 'Enter your password',
                secureTextEntry: !showPassword,
                value: password,
                onChangeText: text => {
                  setPassword(text);
                  setEmailError('');
                },
                autoCapitalize: 'none',
              }}
              rightIcon={
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setShowPassword(!showPassword)}>
                  {!showPassword ? (
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
            <TouchableOpacity
              activeOpacity={0.8}
              style={{marginBottom: normalizeY(16)}}
              onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
              <Typography
                variant="sm"
                color={colors.primary}
                textAlign="center">
                Forgot Password?
              </Typography>
            </TouchableOpacity>
            <Button
              label="Sign in"
              variant="rounded"
              onPress={handleSubmit}
              isDisabled={isLoading || !canProceed}
              isLoading={isLoading}
            />
            <View style={styles.row}>
              <Typography variant="sm" color={colors.black} textAlign="center">
                Don't have an account?{' '}
              </Typography>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => props.navigation.replace('SignUpScreen')}>
                <Typography
                  variant="sm"
                  color={colors.primary}
                  textAlign="center">
                  Create one
                </Typography>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignInScreen;
