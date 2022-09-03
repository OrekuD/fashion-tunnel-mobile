import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import {ChevronRightIcon, MailIcon, UserIcon} from '../../components/Icons';
import TextField from '../../components/TextField';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import UpdateUserRequest from '../../network/requests/UpdateUserRequest';
import userAsyncActions from '../../store/actions/user.action';
import RequestManager from '../../store/request-manager';
import {useSelectState} from '../../store/selectors';
import isAnyEmpty from '../../utils/isAnyEmpty';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rowItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalizeY(14),
    backgroundColor: colors.white,
    borderBottomColor: colors.lightergrey,
    borderBottomWidth: 1,
  },
});

interface Props
  extends StackScreenProps<RootStackParams, 'ChangeDetailsScreen'> {}

const ChangeDetailsScreen = (props: Props) => {
  const {top, bottom} = useSafeAreaInsets();
  const {user, userAddress} = useSelectState();
  const [emailError, setEmailError] = React.useState('');
  const [firstName, setFirstName] = React.useState(user?.firstname || '');
  const [lastName, setLastName] = React.useState(user?.lastname || '');
  const [email, setEmail] = React.useState(user?.email || '');

  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useDispatch();
  const {request} = useSelectState();
  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(userAsyncActions.updateDetails.typePrefix)) {
      RM.consume(userAsyncActions.updateDetails.typePrefix);
      setIsLoading(false);
      Alert.alert('Details', 'Your details was updated successfully');
      return;
    }

    if (RM.isRejected(userAsyncActions.updateDetails.typePrefix)) {
      RM.consume(userAsyncActions.updateDetails.typePrefix);
      setIsLoading(false);
      const error = RM.getRequest(userAsyncActions.updateDetails.typePrefix);
      if (error?.payload.status === 409) {
        setEmailError('E-mail is taken');
      } else {
        Alert.alert('Details', 'There was an issue updating your profile');
      }
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    return !isAnyEmpty([lastName, firstName, email]);
  }, [lastName, firstName, email]);

  const updateDetails = () => {
    if (!canProceed || isLoading) {
      return;
    }
    setIsLoading(true);

    const payload: UpdateUserRequest = {
      email: email.trim().toLowerCase(),
      firstname: firstName.trim(),
      lastname: lastName.trim(),
      activeAddressId: userAddress.activeAddressId,
    };
    dispatch(userAsyncActions.updateDetails(payload));
  };

  return (
    <View style={styles.container}>
      <AppBar title="Change Details" />
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <ScrollView
          style={{backgroundColor: colors.white}}
          contentContainerStyle={{
            paddingHorizontal: normalizeX(24),
            paddingBottom: bottom + normalizeY(12),
          }}>
          <Typography
            variant="h2"
            color={colors.deepgrey}
            style={{marginTop: normalizeY(12), marginBottom: normalizeY(24)}}>
            Your details
          </Typography>
          <TextField
            name="First name"
            textInputProps={{
              placeholder: 'Enter your first name',
              value: firstName,
              onChangeText: setFirstName,
              autoCapitalize: 'none',
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
              autoCapitalize: 'none',
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

          <Typography
            variant="h2"
            color={colors.deepgrey}
            style={{marginTop: normalizeY(12), marginBottom: normalizeY(24)}}>
            Password
          </Typography>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.rowItem}
            onPress={() => props.navigation.navigate('ChangePasswordScreen')}>
            <Typography variant="sm" color={colors.black}>
              Change password
            </Typography>
            <ChevronRightIcon
              width={normalizeY(18)}
              height={normalizeY(18)}
              color={colors.black}
            />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button
        label="Update"
        variant="flat"
        isDisabled={isLoading || !canProceed}
        isLoading={isLoading}
        onPress={updateDetails}
        style={{
          marginTop: 'auto',
          alignSelf: 'center',
          marginBottom: bottom + normalizeY(12),
        }}
      />
    </View>
  );
};

export default ChangeDetailsScreen;
