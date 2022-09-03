import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Animated,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import {EditIcon, TrashIcon} from '../../components/Icons';
import RadioButton from '../../components/RadioButton';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import userAsyncActions from '../../store/actions/user.action';
import userAddressAsyncActions from '../../store/actions/userAddress.action';
import RequestManager from '../../store/request-manager';
import {useSelectState} from '../../store/selectors';
import {userAddressActions} from '../../store/slices/userAddress.slice';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sideButton: {
    height: '100%',
    width: normalizeX(60),
    backgroundColor: 'rgba(244, 43, 38, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  address: {
    paddingVertical: normalizeY(12),
    borderColor: colors.lightergrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface Props
  extends StackScreenProps<RootStackParams, 'AddressBookScreen'> {}

const AddressBookScreen = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const {request, userAddress, user} = useSelectState();

  const [updatedAt] = React.useState(request.updatedAt);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userAddressAsyncActions.index());
  }, []);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(userAddressAsyncActions.index.typePrefix)) {
      RM.consume(userAddressAsyncActions.index.typePrefix);
      setIsLoading(false);
      return;
    }

    if (RM.isRejected(userAddressAsyncActions.index.typePrefix)) {
      RM.consume(userAddressAsyncActions.index.typePrefix);
      setIsLoading(false);
      return;
    }
    if (RM.isFulfilled(userAddressAsyncActions.deleteAddress.typePrefix)) {
      RM.consume(userAddressAsyncActions.deleteAddress.typePrefix);
      setIsDeleting(false);
      return;
    }

    if (RM.isRejected(userAddressAsyncActions.deleteAddress.typePrefix)) {
      RM.consume(userAddressAsyncActions.deleteAddress.typePrefix);
      setIsDeleting(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const renderButtons = React.useCallback(
    (
      progressAnimatedValue: Animated.AnimatedInterpolation,
      _: any,
      id: string,
    ) => {
      const opacity = progressAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });
      const translateX = progressAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [normalizeX(136), 0],
      });
      return (
        <Animated.View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            // opacity,
            transform: [{translateX}],
            paddingLeft: normalizeY(5),
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={isDeleting}
            style={{...styles.sideButton, backgroundColor: colors.blue}}
            onPress={() =>
              props.navigation.navigate('EditAddressScreen', {
                userAddressId: id,
              })
            }>
            <EditIcon
              width={normalizeY(22)}
              height={normalizeY(22)}
              color={colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.sideButton}
            disabled={isDeleting}
            onPress={() => {
              Alert.alert(
                'Delete address',
                'Are you sure you want to delete this address?',
                [
                  {
                    style: 'default',
                    onPress: () => {
                      setIsDeleting(true);
                      dispatch(userAddressAsyncActions.deleteAddress(id));
                    },
                    text: 'Yes',
                  },
                  {style: 'destructive', text: 'No'},
                ],
              );
            }}>
            <TrashIcon
              width={normalizeY(22)}
              height={normalizeY(22)}
              color={colors.white}
            />
          </TouchableOpacity>
        </Animated.View>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <AppBar title="Address Book" />
      {isLoading ? (
        <View style={{paddingTop: normalizeY(140), alignItems: 'center'}}>
          <ActivityIndicator size="small" color={colors.deepgrey} />
        </View>
      ) : (
        <ScrollView
          style={{backgroundColor: colors.white}}
          contentContainerStyle={{paddingHorizontal: normalizeX(24)}}>
          {userAddress.list.length === 0 ? (
            <View style={{paddingTop: normalizeY(24)}}>
              <Typography variant="h2" color={colors.deepgrey}>
                You currently have no saved addresses.
              </Typography>
              <Button
                variant="flat"
                label="Add one"
                onPress={() => props.navigation.navigate('AddNewAddressScreen')}
                style={{marginTop: normalizeY(16)}}
              />
            </View>
          ) : (
            <>
              <Typography
                variant="h2"
                color={colors.deepgrey}
                style={{
                  marginTop: normalizeY(12),
                  marginBottom: normalizeY(12),
                }}>
                Your addresses
              </Typography>
              {userAddress.list.map(
                ({addressLine, id, name, postalCode}, index) => {
                  const isActiveAddress = id === userAddress.activeAddressId;
                  return (
                    <Swipeable
                      renderRightActions={(progress, dragX) =>
                        renderButtons(progress, dragX, id)
                      }
                      key={index}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                          dispatch(
                            userAddressActions.setActiveAddress({
                              userAddressId: id,
                            }),
                          );
                          dispatch(
                            userAsyncActions.updateDetails({
                              activeAddressId: id,
                              email: user.email,
                              lastname: user.lastname,
                              firstname: user.firstname,
                            }),
                          );
                        }}
                        style={{
                          ...styles.address,
                          borderBottomWidth:
                            index === userAddress.list.length - 1 ? 0 : 1,
                        }}>
                        <View style={{flex: 1}}>
                          <Typography
                            variant="sm"
                            fontWeight={500}
                            color={colors.deepgrey}>
                            {name}
                          </Typography>
                          <Typography variant="sm" color={colors.deepgrey}>
                            {addressLine}
                          </Typography>
                          <Typography variant="sm" color={colors.deepgrey}>
                            {postalCode}
                          </Typography>
                        </View>
                        <RadioButton
                          isChecked={isActiveAddress}
                          onPress={() => {
                            dispatch(
                              userAddressActions.setActiveAddress({
                                userAddressId: id,
                              }),
                            );
                            dispatch(
                              userAsyncActions.updateDetails({
                                activeAddressId: id,
                                email: user.email,
                                lastname: user.lastname,
                                firstname: user.firstname,
                              }),
                            );
                          }}
                        />
                      </TouchableOpacity>
                    </Swipeable>
                  );
                },
              )}
              <Button
                variant="flat"
                label="Add new address"
                isLoading={isDeleting}
                isDisabled={isDeleting}
                onPress={() => props.navigation.navigate('AddNewAddressScreen')}
                style={{marginTop: normalizeY(16)}}
              />
            </>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default AddressBookScreen;
