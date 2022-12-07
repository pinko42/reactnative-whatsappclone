import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput style={styles.input} placeholder="type your message..." />
      <MaterialIcons style={styles.send} name="send" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding:7,
    borderRadius:15,
  },
});

export default InputBox;