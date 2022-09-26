import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import BottomSheet from '../../components/BottomSheet';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import forgotPasswordAsyncActions from '../../store/actions/forgotPassword.action';
import RequestManager from '../../store/request-manager';
import {useSelectState} from '../../store/selectors';
import {forgotPasswordActions} from '../../store/slices/forgotPassword.slice';
import {normalizeX, normalizeY} from '../../utils/normalize';

const styles = StyleSheet.create({
  bottomTab: {
    paddingHorizontal: normalizeX(24),
    flex: 1,
    paddingTop: normalizeY(12),
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
});

interface Props {
  isVisible: boolean;
  onClose: () => void;
  navigation: StackNavigationProp<RootStackParams>;
}

const CodeNotReceivedBottomSheet = (props: Props) => {
  const {forgotPassword, request} = useSelectState();
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useDispatch();
  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(forgotPasswordAsyncActions.forgotPassword.typePrefix)) {
      RM.consume(forgotPasswordAsyncActions.forgotPassword.typePrefix);
      setIsLoading(false);
      props.onClose();
      return;
    }

    if (RM.isRejected(forgotPasswordAsyncActions.forgotPassword.typePrefix)) {
      RM.consume(forgotPasswordAsyncActions.forgotPassword.typePrefix);
      setIsLoading(false);
      Alert.alert('Reset code', 'There was an issue sending your reset code');
      return;
    }
  }, [updatedAt, request.updatedAt]);

  return (
    <BottomSheet
      isOpen={props.isVisible}
      onClose={props.onClose}
      height={normalizeY(280)}>
      <View style={styles.bottomTab}>
        <Typography
          variant="h1"
          color={colors.deepgrey}
          style={{
            paddingBottom: normalizeY(12),
          }}>
          Reset code
        </Typography>
        <Typography variant="sm" color={colors.deepgrey}>
          Having problems receiving the 6 digit OTP code? The email registered
          is
          <Typography variant="sm" color={colors.primary}>
            {` ${forgotPassword.email} `}.
          </Typography>
        </Typography>
        <Typography
          variant="sm"
          color={colors.deepgrey}
          style={{marginTop: normalizeY(4)}}>
          Is that correct?
        </Typography>
        <View style={styles.row}>
          <Button
            label="No, change email"
            onPress={() => {
              props.onClose();
              props.navigation.goBack();
            }}
            variant="transparent"
            style={{width: '48%'}}
          />
          <Button
            label="Yes, resend code"
            onPress={() => {
              setIsLoading(true);
              dispatch(
                forgotPasswordAsyncActions.forgotPassword({
                  email: forgotPassword.email,
                }),
              );
            }}
            isDisabled={isLoading}
            isLoading={isLoading}
            variant="flat"
            style={{width: '48%'}}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default CodeNotReceivedBottomSheet;
