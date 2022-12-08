import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ChatScreen from "../screens/chatScreen";
import ChatsScreen from "../screens/chatsScreen";


const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Names">
        <Stack.Screen name="Names" component={ChatsScreen} />
        <Stack.Screen name="Chats" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
