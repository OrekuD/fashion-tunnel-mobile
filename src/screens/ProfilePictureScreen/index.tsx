import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import CachedImage from '../../components/CachedImage';
import {UploadIcon} from '../../components/Icons';
import Typography from '../../components/Typography';
import colors from '../../constants/colors';
import uploadAsyncActions from '../../store/actions/upload.action';
import userAsyncActions from '../../store/actions/user.action';
import RequestManager from '../../store/request-manager';
import {useSelectState} from '../../store/selectors';
import {normalizeX, normalizeY} from '../../utils/normalize';
// @ts-ignore
import avatar from '../../assets/images/avatar.webp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profilePictureContainer: {
    width: normalizeY(160),
    height: normalizeY(160),
    borderRadius: normalizeY(160 / 2),
    position: 'relative',
    alignSelf: 'center',
    marginTop: normalizeY(24),
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    borderRadius: normalizeY(160 / 2),
  },
  uploadButton: {
    position: 'absolute',
    right: normalizeY(6),
    bottom: normalizeY(6),
    width: normalizeY(38),
    height: normalizeY(38),
    borderRadius: normalizeY(38 / 2),
    zIndex: 10,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props
  extends StackScreenProps<RootStackParams, 'ProfilePictureScreen'> {}

const ProfilePictureScreen = (props: Props) => {
  const {request, user, upload} = useSelectState();
  const [profileImage, setProfileImage] = React.useState<Asset>();
  const [isLoading, setIsLoading] = React.useState(false);
  const {bottom} = useSafeAreaInsets();

  const dispatch = useDispatch();
  const [updatedAt] = React.useState(request.updatedAt);

  React.useEffect(() => {
    if (updatedAt === request.updatedAt) {
      return;
    }
    const RM = new RequestManager(request, dispatch);

    if (RM.isFulfilled(uploadAsyncActions.index.typePrefix)) {
      RM.consume(uploadAsyncActions.index.typePrefix);
      dispatch(
        userAsyncActions.updateProfilePicture({profilePicture: upload.image}),
      );
      return;
    }

    if (RM.isRejected(uploadAsyncActions.index.typePrefix)) {
      RM.consume(uploadAsyncActions.index.typePrefix);
      setIsLoading(false);
      Alert.alert(
        'Profile Picture',
        'There was an issue updating your profile picture',
      );
      return;
    }

    if (RM.isFulfilled(userAsyncActions.updateProfilePicture.typePrefix)) {
      RM.consume(userAsyncActions.updateProfilePicture.typePrefix);
      setIsLoading(false);
      setProfileImage(undefined);
      return;
    }

    if (RM.isRejected(userAsyncActions.updateProfilePicture.typePrefix)) {
      RM.consume(userAsyncActions.updateProfilePicture.typePrefix);
      setIsLoading(false);
      return;
    }
  }, [updatedAt, request.updatedAt]);

  const canProceed = React.useMemo(() => {
    return Boolean(profileImage);
  }, [profileImage]);

  const updateProfilePicture = () => {
    if (!canProceed || isLoading) {
      return;
    }

    if (!profileImage?.uri) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append('images', {
      uri: `file://${profileImage.uri}`,
      type: profileImage?.type,
      name: profileImage.fileName?.split('/').pop(),
    });

    dispatch(uploadAsyncActions.index(formData));
  };

  const selectPhoto = React.useCallback(() => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 0.6, selectionLimit: 1},
      response => {
        if (response.assets) {
          setProfileImage(response.assets[0]);
        }
      },
    );
  }, []);

  return (
    <View style={styles.container}>
      <AppBar title="Profile Picture" />
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
          Change Profile picture
        </Typography>
        <View style={styles.profilePictureContainer}>
          <CachedImage
            source={{
              uri: profileImage
                ? profileImage.uri
                : user?.profilePicture
                ? user.profilePicture
                : avatar,
            }}
            style={styles.profilePicture}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.uploadButton}
            onPress={selectPhoto}>
            <UploadIcon
              width={normalizeY(18)}
              height={normalizeY(18)}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
        <Typography
          variant="sm"
          textAlign="center"
          style={{marginTop: 'auto', marginBottom: normalizeY(12)}}>
          Max file size: 3 Mb
        </Typography>
        <Button
          label="Update"
          variant="flat"
          onPress={updateProfilePicture}
          isDisabled={isLoading || !canProceed}
          isLoading={isLoading}
        />
      </ScrollView>
    </View>
  );
};

export default ProfilePictureScreen;
