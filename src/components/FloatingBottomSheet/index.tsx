import GBottomSheet from '@gorhom/bottom-sheet';
import {Portal} from '@gorhom/portal';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {screenheight, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {normalizeX, normalizeY} from '../../utils/normalize';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  snapPoints: Array<number>;
  noPadding?: boolean;
  backdropColor?: string;
  backgroundColor?: string;
  handleColor?: string;
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

const FloatingBottomSheet: React.FC<Props> = props => {
  const [index, setIndex] = React.useState<number>(-1);
  const {bottom} = useSafeAreaInsets();

  const snapPoints = React.useMemo(() => props.snapPoints, [props.snapPoints]);

  const backgroundColor = React.useMemo(
    () => props.backdropColor || colors.white,
    [props.backgroundColor],
  );

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
        // pointerEvents={index === -1 ? 'none' : 'auto'}
        pointerEvents={'none'}
        style={{
          position: 'absolute',
          bottom: 0,
          flex: 1,
          width: screenwidth,
          height: screenheight,
          backgroundColor: props?.backdropColor
            ? props.backdropColor
            : index === -1
            ? undefined
            : 'rgba(0, 0, 0, 0.05)',
        }}
      />
      <GBottomSheet
        index={index}
        onChange={onChange}
        // enablePanDownToClose
        style={{
          overflow: 'hidden',
          borderTopLeftRadius: normalizeY(24),
          borderTopRightRadius: normalizeY(24),
          backgroundColor: backgroundColor,
        }}
        snapPoints={snapPoints}
        enableContentPanningGesture
        handleIndicatorStyle={{
          ...styles.handle,
          backgroundColor: '#E8E8E8',
        }}
        handleStyle={{
          backgroundColor: backgroundColor,
        }}
        backgroundStyle={{
          backgroundColor: colors.white,
        }}>
        <View
          style={{
            height:
              props.snapPoints[props.snapPoints.length - 1] - normalizeY(24),
            backgroundColor: backgroundColor,
            paddingBottom: bottom,
            paddingHorizontal: props?.noPadding ? 0 : normalizeX(18),
          }}>
          {props.children}
        </View>
      </GBottomSheet>
    </Portal>
  );
};

export default FloatingBottomSheet;
