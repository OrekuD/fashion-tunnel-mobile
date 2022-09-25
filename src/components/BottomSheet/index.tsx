import GBottomSheet from '@gorhom/bottom-sheet';
import {Portal} from '@gorhom/portal';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {screenheight, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  height: number;
  initialSnapIndex?: number;
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  handle: {
    width: normalizeX(100),
    height: normalizeY(5),
    borderRadius: normalizeY(3),
    marginTop: normalizeY(4),
    alignSelf: 'center',
  },
});

const BottomSheet: React.FC<Props> = props => {
  const [index, setIndex] = React.useState<number>(-1);
  const {bottom} = useSafeAreaInsets();

  const snapPoints = React.useMemo(() => [props.height], [props.height]);

  const onChange = React.useCallback(
    (index: number) => {
      setIndex(index);

      if (index === -1) {
        props.onClose();
      }
    },
    [props],
  );

  React.useEffect(() => {
    if (props.isOpen) {
      setIndex(0);
    } else {
      setIndex(-1);
    }

    return () => {
      setIndex(-1);
    };
  }, [props.isOpen]);

  return !props.isOpen ? (
    <View />
  ) : (
    <Portal>
      <View
        pointerEvents={index === -1 ? 'none' : 'auto'}
        style={{
          position: 'absolute',
          bottom: 0,
          flex: 1,
          width: screenwidth,
          height: screenheight,
          backgroundColor: index === -1 ? undefined : 'rgba(0, 0, 0, 0.4)',
        }}>
        <TouchableOpacity style={{flex: 1}} onPress={props.onClose} />
        <GBottomSheet
          index={index}
          onChange={onChange}
          enablePanDownToClose
          style={{
            overflow: 'hidden',
            backgroundColor: colors.white,
          }}
          snapPoints={snapPoints}
          enableContentPanningGesture
          handleIndicatorStyle={{
            ...styles.handle,
            backgroundColor: '#E8E8E8',
          }}
          handleStyle={{
            backgroundColor: colors.white,
          }}
          backgroundStyle={{
            backgroundColor: colors.white,
          }}>
          <View
            style={{
              height: props.height - normalizeY(24),
              backgroundColor: colors.white,
              paddingBottom: (bottom || normalizeY(12)) + normalizeY(12),
            }}>
            {props.children}
          </View>
        </GBottomSheet>
      </View>
    </Portal>
  );
};

export default BottomSheet;
