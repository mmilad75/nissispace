import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('screen');
interface Props {
  image: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

const BackgroundImage: React.FC<Props> = ({children, image, style}) => {
  return (
    <ImageBackground style={styles.imageBackground} source={image}>
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height,
    width,
  },
  container: {
    backgroundColor: 'rgba(23, 23, 23, 0.4)',
    flex: 1,
    padding: 10,
  },
});

export default BackgroundImage;
