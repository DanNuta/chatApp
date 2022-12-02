
import {MessageChatModel} from "./messageChat";


export type ReceiveMessageContextModel = {
    receiveMessage: MessageChatModel[] | [],
    updateMessageChat: (data: MessageChatModel[]) => void
}