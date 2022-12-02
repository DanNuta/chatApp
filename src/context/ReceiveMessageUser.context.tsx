import React, {createContext, PropsWithChildren, useState} from "react";
import {ReceiveMessageContextModel} from "../models/receiveMessageContext";
import {MessageChatModel} from "../models/messageChat";



export const ReceiveMessageContext = createContext<ReceiveMessageContextModel | []>([]);


export const ReceiveMessageContextProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const [receiveMessage, setReceiveMessage] = useState<MessageChatModel[] | []>([]);


    const updateMessageChat = (data: MessageChatModel[]) => {

        setReceiveMessage(data)
    }

    return (
        <ReceiveMessageContext.Provider value={{receiveMessage, updateMessageChat}}>
            {props.children}
        </ReceiveMessageContext.Provider>
    )
}