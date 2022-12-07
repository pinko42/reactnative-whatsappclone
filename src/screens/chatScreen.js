import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView
} from "react-native";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";

import Message from "../components/Message";
import bg from "../../assets/images/BG.png";

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
export default ChatScreen;
