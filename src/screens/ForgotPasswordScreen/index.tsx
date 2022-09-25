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
import ForgotPasswordRequest from '../../network/requests/ForgotPasswordRequest';
import forgotPasswordAsyncActions from '../../store/actions/forgotPassword.action';
import {forgotPasswordActions} from '../../store/slices/forgotPassword.slice';

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
    marginBottom: normalizeY(16),
  },
});

interface Props
  extends StackScreenProps<RootStackParams, 'ForgotPasswordScreen'> {}

const ForgotPasswordScreen = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
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

    if (RM.isFulfilled(forgotPasswordAsyncActions.forgotPassword.typePrefix)) {
      RM.consume(forgotPasswordAsyncActions.forgotPassword.typePrefix);
      setIsLoading(false);
      dispatch(forgotPasswordActions.addEmail({email}));
      props.navigation.navigate('EnterCodeScreen');
      return;
    }

    if (RM.isRejected(forgotPasswordAsyncActions.forgotPassword.typePrefix)) {
      RM.consume(forgotPasswordAsyncActions.forgotPassword.typePrefix);
      setIsLoading(false);
      setEmailError("Your e-mail doesn't exist");
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    if (emailError.trim().length > 0) {
      return false;
    }
    return !isAnyEmpty([email]);
  }, [email, emailError]);

  const handleSubmit = () => {
    if (!canProceed || isLoading) {
      return;
    }
    setIsLoading(true);

    const payload: ForgotPasswordRequest = {
      email: email.trim().toLowerCase(),
    };
    dispatch(forgotPasswordAsyncActions.forgotPassword(payload));
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
              Recover password
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

            <Button
              label="Continue"
              variant="rounded"
              onPress={handleSubmit}
              isDisabled={isLoading || !canProceed}
              isLoading={isLoading}
              style={{marginTop: normalizeY(20)}}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ForgotPasswordScreen;
