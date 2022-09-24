import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import Typography from '../../components/Typography';
import {normalizeX, normalizeY} from '../../utils/normalize';
import {ChevronRightIcon} from '../../components/Icons';
import {useSelectState} from '../../store/selectors';
import colors from '../../constants/colors';
import authenticationAsyncActions from '../../store/actions/authentication.action';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../types';
import RequestManager from '../../store/request-manager';
import Button from '../../components/Button';

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
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

interface Props extends StackScreenProps<RootStackParams, 'MainScreen'> {}

const ProfileScreen = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {user, request, authentication} = useSelectState();

  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }

    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(authenticationAsyncActions.signout.typePrefix)) {
      RM.consume(authenticationAsyncActions.signout.typePrefix);
      setIsLoading(false);
      props.navigation.navigate('MainScreen');
      return;
    }

    if (RM.isRejected(authenticationAsyncActions.signout.typePrefix)) {
      RM.consume(authenticationAsyncActions.signout.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

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
        onPress: () => props.navigation.navigate('OrdersScreen'),
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

  if (!authentication.isAuthenticated) {
    return (
      <View
        style={{
          paddingHorizontal: normalizeX(24),
          flex: 1,
          backgroundColor: colors.white,
          justifyContent: 'center',
          paddingBottom: normalizeY(120),
        }}>
        <Typography
          variant="h1"
          color={colors.deepgrey}
          style={{marginBottom: normalizeY(12)}}>
          Sign in to view your details and previous orders
        </Typography>
        <View style={styles.row}>
          <Button
            label="Create one"
            onPress={() => props.navigation.navigate('SignUpScreen')}
            variant="transparent"
            style={{width: '48%'}}
          />
          <Button
            label="Sign in"
            onPress={() => props.navigation.navigate('SignInScreen')}
            variant="flat"
            style={{width: '48%'}}
          />
        </View>
      </View>
    );
  }

  return (
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
        {`${user.firstname} ${user.lastname}`}
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
  );
};

export default ProfileScreen;
