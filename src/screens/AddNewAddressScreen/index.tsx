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
import AddNewAddressRequest from '../../network/requests/AddNewAddressRequest';
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
  extends StackScreenProps<RootStackParams, 'AddNewAddressScreen'> {}

const AddNewAddressScreen = (props: Props) => {
  const [name, setName] = React.useState('');
  const [addressLine, setAddressLine] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');

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

    if (RM.isFulfilled(userAddressAsyncActions.addNewAddress.typePrefix)) {
      RM.consume(userAddressAsyncActions.addNewAddress.typePrefix);
      setIsLoading(false);
      // Alert.alert('Password', 'Your password change was succcessful');
      props.navigation.goBack();
      return;
    }

    if (RM.isRejected(userAddressAsyncActions.addNewAddress.typePrefix)) {
      RM.consume(userAddressAsyncActions.addNewAddress.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    return !isAnyEmpty([name, addressLine, postalCode]);
  }, [name, addressLine, postalCode]);

  const addNewAddress = () => {
    if (!canProceed || isLoading) {
      return;
    }
    setIsLoading(true);

    const payload: AddNewAddressRequest = {
      addressLine: addressLine.trim(),
      name: name.trim(),
      postalCode: postalCode.trim(),
    };

    dispatch(userAddressAsyncActions.addNewAddress(payload));
  };

  return (
    <View style={styles.container}>
      <AppBar title="Address Book" />
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
          Add new address
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
          label="Add"
          variant="flat"
          onPress={addNewAddress}
          isDisabled={isLoading || !canProceed}
          isLoading={isLoading}
          style={{marginTop: 'auto'}}
        />
      </ScrollView>
    </View>
  );
};

export default AddNewAddressScreen;
