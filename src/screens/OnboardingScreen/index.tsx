import {StackScreenProps} from '@react-navigation/stack';
import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {RootStackParams} from '../../../types';
import {ArrowRightIcon, Logo} from '../../components/Icons';
import Typography from '../../components/Typography';
import {screenheight, screenwidth} from '../../constants';
import colors from '../../constants/colors';
import {uiActions} from '../../store/slices/ui.slice';
import {normalizeX, normalizeY} from '../../utils/normalize';

const slides = [
  {
    title: 'Find dispensaries\nnear you!Your ',
    caption: 'Discover you new favorite shop right around the corner!',
    image:
      'https://images.unsplash.com/photo-1620298110143-b09a489a29a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Discover\nProducts!',
    caption: 'Discover you new favorite shop right around the corner!',
    image:
      'https://images.unsplash.com/photo-1620481355305-37eb0a889a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Contact the\nDispensaries!',
    caption:
      'Chat with the dispensaries directly and find your answer to any questions!',
    image:
      'https://images.unsplash.com/photo-1658654834545-ee608ef93679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
];

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.white,
  },
  slide: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: normalizeX(10),
  },
  button: {
    position: 'absolute',
    left: normalizeX(24),
    width: screenwidth - normalizeX(48),
    height: normalizeY(60),
    borderRadius: normalizeY(60 / 2),
    backgroundColor: colors.deepgrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: normalizeY(40),
    shadowColor: colors.grey,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // transform: [{translateX: -normalizeY(55 / 2)}],
  },
  buttonIcon: {
    width: normalizeX(12),
    height: normalizeY(12),
    marginBottom: normalizeY(2),
  },
  slideIndexIndicator: {
    position: 'absolute',
    left: 0,
    zIndex: 100,
    height: normalizeY(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    height: normalizeY(5),
    width: normalizeX(10),
    borderRadius: normalizeY(4),
    backgroundColor: colors.orange,
    marginHorizontal: normalizeX(2),
  },
  bottomLeftCurve: {
    position: 'absolute',
    bottom: -normalizeY(42.0),
    left: 0,
    width: normalizeY(42.0),
    height: normalizeY(42.0),
    zIndex: 20,
  },
  topContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2,
    borderBottomEndRadius: normalizeY(42),
  },
  topLinearGradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: screenwidth,
    height: normalizeY(200),
    zIndex: 10,
  },
  bottomLinearGradient: {
    position: 'absolute',
    left: 0,
    top: screenheight * 0.55 - normalizeY(200),
    width: screenwidth,
    height: normalizeY(200),
    zIndex: 10,
  },
  logo: {
    position: 'absolute',
    left: 0,
    width: screenwidth,
    // height: normalizeY(200),
    zIndex: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface Props extends StackScreenProps<RootStackParams, 'OnboardingScreen'> {}

const OnboardingScreen = (props: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const {bottom, top} = useSafeAreaInsets();

  const handleNext = () => {
    if (slideIndex === 2) {
      dispatch(uiActions.disableOnboarding());
      props.navigation.navigate('SignUpScreen');
    } else {
      setSlideIndex(slideIndex + 1);
      sliderRef.current?.scrollTo({
        x: (slideIndex + 1) * screenwidth,
        animated: true,
      });
    }
  };

  const animate = (index: number) => {
    const inputRange = [
      (index - 1) * screenwidth,
      index * screenwidth,
      (index + 1) * screenwidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });
    const indicatorWidth = scrollX.interpolate({
      inputRange,
      outputRange: [normalizeY(5), normalizeX(22), normalizeY(5)],
      extrapolate: 'clamp',
    });
    return {opacity, width: indicatorWidth};
  };

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const currentSlide = Math.round(
      event.nativeEvent.contentOffset.x / screenwidth,
    );
    setSlideIndex(currentSlide);
  };

  const imageTranslateX = useRef(
    scrollX.interpolate({
      inputRange: [0, screenwidth, screenwidth * 3],
      outputRange: [0, -screenwidth, -screenwidth * 3],
      extrapolate: 'clamp',
    }),
  ).current;

  return (
    <View style={styles.parent}>
      <StatusBar barStyle="light-content" translucent />
      <View
        style={{
          ...styles.logo,
          top: top + normalizeY(0),
        }}>
        <Logo scale={2} color={colors.white} />
      </View>
      <View
        style={{
          ...styles.slideIndexIndicator,
          bottom: bottom + normalizeY(90),
          width: screenwidth,
        }}>
        {slides.map((_, index) => {
          const {width, opacity} = animate(index);
          return (
            <Animated.View
              style={{...styles.indicator, width, opacity}}
              key={index}
            />
          );
        })}
      </View>
      <LinearGradient
        colors={[
          'rgba(41, 37, 37, 1)',
          'rgba(41, 37, 37, 0.5)',
          'rgba(41, 37, 37, 0)',
        ]}
        style={styles.topLinearGradient}
      />
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0)',
          'rgba(255, 255, 255, 0.5)',
          'rgba(255, 255, 255, 1)',
        ]}
        style={styles.bottomLinearGradient}
      />
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 5,
          width: screenwidth * 3,
          height: screenheight * 0.55,
          flexDirection: 'row',
        }}
        pointerEvents="none">
        {slides.map(({image}, index) => (
          <Animated.View
            style={{
              width: screenwidth,
              height: '100%',
              transform: [{translateX: imageTranslateX}],
            }}
            key={index}>
            <Image
              source={{uri: image}}
              style={{
                width: screenwidth,
                height: '100%',
                resizeMode: 'cover',
              }}
            />
          </Animated.View>
        ))}
      </Animated.View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...styles.button,
          bottom: 0,
          zIndex: 4,
        }}
        onPress={handleNext}>
        {slideIndex === 2 ? (
          <Typography variant="sm" color={colors.white}>
            Sign up with Email
          </Typography>
        ) : (
          <ArrowRightIcon
            width={normalizeY(24)}
            height={normalizeY(24)}
            color={colors.white}
            strokeWidth={1}
          />
        )}
      </TouchableOpacity>
      <Animated.ScrollView
        horizontal
        ref={sliderRef}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onMomentumScrollEnd={onMomentumScrollEnd}>
        {slides.map(({caption, title}) => {
          return (
            <View
              style={{
                ...styles.slide,
                width: screenwidth,
                paddingTop: screenheight * 0.55,
              }}
              key={title}>
              <View style={styles.container}>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  color={colors.deepgrey}
                  textAlign="center"
                  style={{
                    marginTop: normalizeY(72),
                  }}>
                  {title}
                </Typography>
                <Typography
                  variant="h1"
                  color={colors.deepgrey}
                  textAlign="center"
                  style={{
                    marginTop: normalizeY(14),
                    width: '95%',
                    alignSelf: 'center',
                  }}>
                  {caption}
                </Typography>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default OnboardingScreen;
