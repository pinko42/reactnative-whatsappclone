import { FlatList } from "react-native";
import ChatListItem from "../../src/components/ChatListItem";
import { useEffect, useState } from "react";
import chatRooms from "../../assets/data/chats.json";

const ChatsScreen = () => {

  return (
    <FlatList
      data={chatRooms}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={{ backgroundColor: "white" }}
    />
  );
};

export default ChatsScreen;