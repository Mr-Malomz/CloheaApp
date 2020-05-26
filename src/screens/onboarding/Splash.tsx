import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import SVG_one from "../../utils/svgs/SVG_one";

const Splash: FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../utils/images/cloheaLogo.jpg")} />
      <View style={styles.svgContainer}>
        <SVG_one />
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderTitle}>
            High quality health care at your
          </Text>
          <Text style={styles.sliderTitle}> fingertips. </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}></View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 130,
  },
  svgContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "center",
    marginTop: 60,
  },
  sliderContainer: {
    marginTop: 60,
  },
  sliderTitle: {
    textAlign: "center",
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonGeneral: {
    height: 36,
    width: 162,
  },
});
