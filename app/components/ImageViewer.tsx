import { Image } from "expo-image";
import React from "react";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imageSource: ImageSourcePropType;
  selectedImage: string | undefined;
};

export default function ImageViewer({ imageSource, selectedImage }: Props) {
  const imgSource = selectedImage ? { uri: selectedImage } : imageSource;
  console.log(imgSource);
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
