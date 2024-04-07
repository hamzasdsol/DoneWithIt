import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Placeholder from "../../assets/images/chair.jpg";
import colors from "../../config/colors";
import AppText from "../AppText";

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && (
              <Image style={styles.image} source={image} resizeMode="stretch" />
            )}
            <View style={styles.detailsContainer}>
              <AppText title={title} style={{ fontWeight: "bold" }} />
              {subTitle && <AppText title={subTitle} />}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginHorizontal: 16,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
