import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Placeholder from "../../assets/images/chair.jpg";
import AppText from "../AppText";
import colors from "../../config/colors";

const ListItem = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={Placeholder}
              resizeMode="stretch"
            />
            <View style={styles.detailsContainer}>
              <AppText title={title} style={{ fontWeight: "bold" }} />
              <AppText title={subTitle} />
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
    marginVertical: 4,
    padding: 15,
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
