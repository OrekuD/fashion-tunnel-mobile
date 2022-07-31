import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('screen');

const screenwidth = width;
const screenheight = height;
const isAndroid = Platform.OS === 'android';

export {screenheight, screenwidth, isAndroid};
