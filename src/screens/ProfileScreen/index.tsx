import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import OkResponse from '../../network/responses/OkResponse';
import {normalizeX, normalizeY} from '../../utils/normalize';
import API from '../../constants/api';
import {AxiosResponse} from 'axios';
import ErrorResponse from '../../network/responses/ErrorResponse';
import {authenticationActions} from '../../store/slices/authentication.slice';
import {userActions} from '../../store/slices/user.slice';
import {
  ChevronRightIcon,
  LogoutIcon,
  SettingsIcon,
  UserIcon,
} from '../../components/Icons';
import {useSelectState} from '../../store/selectors';
import colors from '../../constants/colors';
import authenticationAsyncActions from '../../store/actions/authentication.action';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalizeX(24),
    paddingBottom: normalizeY(100),
  },
  rowItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: normalizeY(12),
    backgroundColor: colors.white,
    borderBottomColor: colors.lightgrey,
    borderBottomWidth: 1,
  },
});

interface Props extends StackScreenProps<RootStackParams, 'MainScreen'> {}

const ProfileScreen = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {user} = useSelectState();

  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();

  const signOut = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    dispatch(authenticationAsyncActions.signout());
  };
  const settings = React.useMemo(
    () => [
      {
        label: 'Orders',
        onPress: () => props.navigation.navigate('AddressBookScreen'),
      },
      {
        label: 'Account Details',
        onPress: () => props.navigation.navigate('ChangeDetailsScreen'),
      },
      {
        label: 'Address Book',
        onPress: () => props.navigation.navigate('AddressBookScreen'),
      },
    ],
    [],
  );

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height">
      <ScrollView
        contentContainerStyle={{
          paddingTop: normalizeY(24) + top,
          paddingHorizontal: normalizeX(24),
        }}
        style={{backgroundColor: colors.white}}>
        <Typography
          variant="h2"
          fontWeight={500}
          style={{textTransform: 'capitalize'}}>
          {user.firstname}
        </Typography>
        <View style={{paddingTop: normalizeY(60)}}>
          {settings.map(({label, onPress}, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.rowItem}
              key={index}
              onPress={onPress}>
              <Typography variant="sm" color={colors.black}>
                {label}
              </Typography>
              <ChevronRightIcon
                width={normalizeY(18)}
                height={normalizeY(18)}
                color={colors.black}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.rowItem}
            onPress={signOut}>
            <Typography variant="sm" color={colors.black}>
              Log out
            </Typography>
            {isLoading ? (
              <ActivityIndicator size="small" color={colors.black} />
            ) : (
              <ChevronRightIcon
                width={normalizeY(18)}
                height={normalizeY(18)}
                color={colors.black}
              />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;
