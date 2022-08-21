import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
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
import API from '../../constants/api';
import SignInRequest from '../../network/requests/SignInRequest';
import {AxiosResponse} from 'axios';
import AuthenticationResponse from '../../network/responses/AuthenticationResponse';
import {authenticationActions} from '../../store/slices/authentication.slice';
import {userActions} from '../../store/slices/user.slice';
import ErrorResponse from '../../network/responses/ErrorResponse';
import colors from '../../constants/colors';
import {isAndroid, screenheight} from '../../constants';
import authenticationAsyncActions from '../../store/actions/authentication.action';
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
      setIsLoading(false);
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
    <KeyboardAvoidingView style={{flex: 1}} behavior="height">
      <ScrollView
        contentContainerStyle={{
          // flex: 1,
          paddingTop: normalizeY(24) + top + screenheight * 0.2,
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
            textInputProps={{
              placeholder: 'Email',
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
            textInputProps={{
              placeholder: 'Password',
              secureTextEntry: !showPassword,
              value: password,
              onChangeText: text => {
                setPassword(text);
                setEmailError('');
              },
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
            Don't have an account?{' '}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.navigate('SignUpScreen')}>
              <Typography
                variant="sm"
                color={colors.primary}
                textAlign="center"
                style={{marginTop: normalizeY(3)}}>
                Create one
              </Typography>
            </TouchableOpacity>
          </Typography>
          <Button
            label="Sign in"
            onPress={handleSubmit}
            isDisabled={isLoading || !canProceed}
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
