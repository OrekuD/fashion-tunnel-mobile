import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {DeviceTypes, RootStackParams} from '../../../types';
import Button from '../../components/Button';
import {
  MailIcon,
  EyeCancelIcon,
  EyeIcon,
  UserIcon,
} from '../../components/Icons';
import TextField from '../../components/TextField';
import Typography from '../../components/Typography';
import isAnyEmpty from '../../utils/isAnyEmpty';
import {normalizeX, normalizeY} from '../../utils/normalize';
import SignUpRequest from '../../network/requests/SignUpRequest';
import BackButton from '../../components/BackButton';
import colors from '../../constants/colors';
import authenticationAsyncActions from '../../store/actions/authentication.action';
import {isAndroid} from '../../constants';
import {useSelectState} from '../../store/selectors';
import RequestManager from '../../store/request-manager';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalizeX(24),
    paddingBottom: normalizeY(100),
  },
});

interface Props extends StackScreenProps<RootStackParams, 'SignUpScreen'> {}

const SignUpScreen = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
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

    if (RM.isFulfilled(authenticationAsyncActions.signup.typePrefix)) {
      RM.consume(authenticationAsyncActions.signup.typePrefix);
      setIsLoading(false);
      return;
    }

    if (RM.isRejected(authenticationAsyncActions.signup.typePrefix)) {
      RM.consume(authenticationAsyncActions.signup.typePrefix);
      setIsLoading(false);
      setEmailError('There was an issue creating your account');
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    if (emailError.trim().length > 0) {
      return false;
    }
    return !isAnyEmpty([email, password, firstName, lastName]);
  }, [email, password, emailError, firstName, lastName]);

  const handleSubmit = () => {
    if (!canProceed || isLoading) {
      return;
    }
    setIsLoading(true);

    const payload: SignUpRequest = {
      email: email.trim().toLowerCase(),
      password: password.trim(),
      firstname: firstName.trim(),
      lastname: lastName.trim(),
      deviceType: isAndroid ? DeviceTypes.ANDROID : DeviceTypes.IOS,
    };
    dispatch(authenticationAsyncActions.signup(payload));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" translucent />
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
            paddingTop: normalizeY(90) + top,
          }}
          style={{backgroundColor: colors.white}}>
          <View style={styles.container}>
            <Typography
              variant="h2"
              color={colors.deepgrey}
              fontWeight={600}
              textAlign="center"
              style={{marginBottom: normalizeY(24)}}>
              Create a new account
            </Typography>
            <TextField
              name="First name"
              textInputProps={{
                placeholder: 'Enter your first name',
                value: firstName,
                onChangeText: setFirstName,
              }}
              rightIcon={
                <UserIcon
                  width={normalizeY(24)}
                  height={normalizeY(24)}
                  color={colors.grey}
                />
              }
            />
            <TextField
              name="Last name"
              textInputProps={{
                placeholder: 'Enter your last name',
                value: lastName,
                onChangeText: setLastName,
              }}
              rightIcon={
                <UserIcon
                  width={normalizeY(24)}
                  height={normalizeY(24)}
                  color={colors.grey}
                />
              }
            />
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
                onChangeText: setPassword,
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
            <Typography
              variant="sm"
              color={colors.black}
              textAlign="center"
              style={{marginBottom: normalizeY(16)}}>
              Already have an account?{' '}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => props.navigation.navigate('SignInScreen')}>
                <Typography
                  variant="sm"
                  color={colors.primary}
                  textAlign="center"
                  style={{marginTop: normalizeY(3)}}>
                  Sign in
                </Typography>
              </TouchableOpacity>
            </Typography>
            <Button
              label="Create account"
              variant="rounded"
              onPress={handleSubmit}
              isDisabled={isLoading || !canProceed}
              isLoading={isLoading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUpScreen;
