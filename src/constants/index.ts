import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('screen');

const screenwidth = width;
const screenheight = height;
const isAndroid = Platform.OS === 'android';
const cedi = 'GH₵';

export const images = [
  'https://cdn-images.farfetch-contents.com/18/49/36/17/18493617_39736957_1000.jpg',
  'https://cdn-images.farfetch-contents.com/18/49/36/17/18493617_39736952_1000.jpg',
  'https://cdn-images.farfetch-contents.com/18/49/36/17/18493617_39736887_1000.jpg',
  'https://cdn-images.farfetch-contents.com/18/49/36/17/18493617_39736927_1000.jpg',
];

export {screenheight, screenwidth, isAndroid, cedi};
