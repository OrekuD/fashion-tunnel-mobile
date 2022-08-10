import React from 'react';
import {Image} from 'react-native';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';

interface Props extends FastImageProps {}

const CachedImage: React.FC<Props> = (props: Props) => {
  // 	// return <CImage resizeMode={resizeMode} {...props} style={style} source={source as string} />;
  if (typeof props.source === 'number') {
    // @ts-ignore
    return <Image {...props} source={props.source} />;
  } else if (
    typeof props.source !== 'number' &&
    !(props.source as Source).uri!.includes('http')
  ) {
    // @ts-ignore
    return <Image {...props} source={{uri: props.source.uri}} />;
  }

  return <FastImage {...props} />;
};

export default CachedImage;
