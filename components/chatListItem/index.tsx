import React from 'react';
import { View, Text } from 'react-native';
import {ChatRoom} from '../../types';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatRoom) => {
    return(
        <View>
            <Text>{props.lastMessage.content}</Text>
        </View>
    )
};
export default ChatListItem;