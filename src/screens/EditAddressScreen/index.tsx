import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import UpdateAddressRequest from '../../network/requests/UpdateAddressRequest';
import userAddressAsyncActions from '../../store/actions/userAddress.action';
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
  extends StackScreenProps<RootStackParams, 'EditAddressScreen'> {}

const EditAddressScreen = (props: Props) => {
  const {request, userAddress} = useSelectState();
  const address = React.useMemo(
    () =>
      userAddress.list.find(({id}) => id === props.route.params.userAddressId),
    [userAddress.list],
  );
  const [name, setName] = React.useState(address?.name || '');
  const [addressLine, setAddressLine] = React.useState(
    address?.addressLine || '',
  );
  const [postalCode, setPostalCode] = React.useState(address?.postalCode || '');

  const {bottom} = useSafeAreaInsets();
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useDispatch();
  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(userAddressAsyncActions.updateAddress.typePrefix)) {
      RM.consume(userAddressAsyncActions.updateAddress.typePrefix);
      setIsLoading(false);
      // Alert.alert('Password', 'Your password change was succcessful');
      props.navigation.goBack();
      return;
    }

    if (RM.isRejected(userAddressAsyncActions.updateAddress.typePrefix)) {
      RM.consume(userAddressAsyncActions.updateAddress.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    return !isAnyEmpty([name, addressLine, postalCode]);
  }, [name, addressLine, postalCode]);

  const updateAddress = () => {
    if (!canProceed || isLoading) {
      return;
    }
    setIsLoading(true);

    const payload: UpdateAddressRequest = {
      addressLine: addressLine.trim(),
      name: name.trim(),
      postalCode: postalCode.trim(),
      id: address?.id || '',
    };

    dispatch(userAddressAsyncActions.updateAddress(payload));
  };

  return (
    <View style={styles.container}>
      <AppBar title="Address Book" />
      <ScrollView
        style={{backgroundColor: colors.white}}
        contentContainerStyle={{
          paddingHorizontal: normalizeX(24),
          flex: 1,
          paddingBottom: (bottom || normalizeY(12)) + normalizeY(12),
        }}>
        <Typography
          variant="h2"
          color={colors.deepgrey}
          style={{marginTop: normalizeY(12), marginBottom: normalizeY(24)}}>
          Edit address
        </Typography>
        <TextField
          name="Address name"
          textInputProps={{
            placeholder: 'Enter the address name',
            value: name,
            onChangeText: setName,
            autoCapitalize: 'none',
          }}
        />
        <TextField
          name="Address line"
          textInputProps={{
            placeholder: 'Enter the address line',
            value: addressLine,
            onChangeText: setAddressLine,
            autoCapitalize: 'none',
          }}
        />
        <TextField
          name="Postal code"
          textInputProps={{
            placeholder: 'Enter the postal code',
            value: postalCode,
            onChangeText: setPostalCode,
            autoCapitalize: 'none',
          }}
        />

        <Button
          label="Update"
          variant="flat"
          onPress={updateAddress}
          isDisabled={isLoading || !canProceed}
          isLoading={isLoading}
          style={{marginTop: 'auto'}}
        />
      </ScrollView>
    </View>
  );
};

export default EditAddressScreen;
