import { Image } from 'expo-image';
import { useWindowDimensions } from 'react-native';
import type { ImageStyle } from 'react-native';

const FLOOR_SOURCE = require('@/assets/images/mesa.png');

function computeFloorStyle(screenWidth: number): ImageStyle {
  if (screenWidth < 420) {
    return {
      alignSelf: 'stretch',
      width: '190%',
      height: 200,
      marginHorizontal: -80,
      marginTop: 32,
    };
  }
  if (screenWidth < 768) {
    return {
      alignSelf: 'stretch',
      width: '170%',
      height: 190,
      marginHorizontal: -70,
      marginTop: 32,
    };
  }
  return {
    alignSelf: 'stretch',
    width: '150%',
    height: 180,
    marginHorizontal: -50,
    marginTop: 32,
  };
}

export function FloorImage() {
  const { width } = useWindowDimensions();
  return <Image source={FLOOR_SOURCE} contentFit="cover" style={computeFloorStyle(width)} />;
}
