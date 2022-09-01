import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Alert,
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
import {EyeCancelIcon, EyeIcon} from '../../components/Icons';
import TextField from '../../components/TextField';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import ChangePasswordRequest from '../../network/requests/ChangePasswordRequest';
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
});

interface Props
  extends StackScreenProps<RootStackParams, 'ChangePasswordScreen'> {}

const ChangePasswordScreen = (props: Props) => {
  const [passwordError, setPasswordError] = React.useState('');
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(true);
  const [showNewPassword, setShowNewPassword] = React.useState(true);
  const {bottom} = useSafeAreaInsets();
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useDispatch();
  const {request} = useSelectState();
  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(userAsyncActions.changePassword.typePrefix)) {
      RM.consume(userAsyncActions.changePassword.typePrefix);
      setIsLoading(false);
      setCurrentPassword('');
      setNewPassword('');
      Alert.alert('Password', 'Your password change was succcessful');
      return;
    }

    if (RM.isRejected(userAsyncActions.changePassword.typePrefix)) {
      RM.consume(userAsyncActions.changePassword.typePrefix);
      setIsLoading(false);
      setPasswordError('Your current password is incorrect');
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    return !isAnyEmpty([currentPassword, newPassword]);
  }, [currentPassword, newPassword]);

  const changePassword = () => {
    if (!canProceed || isLoading) {
      return;
    }
    setIsLoading(true);

    const payload: ChangePasswordRequest = {
      oldPassword: currentPassword,
      newPassword: newPassword,
    };
    dispatch(userAsyncActions.changePassword(payload));
  };

  return (
    <View style={styles.container}>
      <AppBar title="Change Password" />
      <ScrollView
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{
          paddingHorizontal: normalizeX(24),
          flex: 1,
          paddingBottom: bottom + normalizeY(12),
        }}>
        <Typography
          variant="h2"
          color={colors.deepgrey}
          style={{marginTop: normalizeY(12), marginBottom: normalizeY(24)}}>
          Change password
        </Typography>
        <TextField
          name="Current password"
          textInputProps={{
            placeholder: 'Enter your current password',
            value: currentPassword,
            onChangeText: text => {
              setCurrentPassword(text);
              setPasswordError('');
            },
            autoCapitalize: 'none',
            secureTextEntry: showCurrentPassword,
          }}
          rightIcon={
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowCurrentPassword(prevValue => !prevValue)}>
              {showCurrentPassword ? (
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
          name="New password"
          textInputProps={{
            placeholder: 'Enter your new password',
            value: newPassword,
            onChangeText: text => {
              setNewPassword(text);
              setPasswordError('');
            },
            autoCapitalize: 'none',
            secureTextEntry: showNewPassword,
          }}
          rightIcon={
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowNewPassword(prevValue => !prevValue)}>
              {showNewPassword ? (
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
        <Button
          label="Update"
          variant="flat"
          onPress={changePassword}
          isDisabled={isLoading || !canProceed}
          isLoading={isLoading}
          style={{marginTop: 'auto'}}
        />
      </ScrollView>
    </View>
  );
};

export default ChangePasswordScreen;
