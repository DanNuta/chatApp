import React, { PropsWithChildren, useState, useContext } from "react";
import { VSendMessageInputView } from "./VSendMessageInput.View";
import axios from "axios";
import { MessageChatModel } from "../../models/messageChat";
import { ReceiveMessageContext } from "../../context/ReceiveMessageUser.context";
import { ReceiveMessageContextModel } from "../../models/receiveMessageContext";

type Props = {
  idDestination?: string;
};

export const VSendMessageInput: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {


  const { updateMessageChat } = useContext( ReceiveMessageContext) as ReceiveMessageContextModel;

  const [imputMessage, setInputMessage] = useState<string>("");
  const [messageChat, setMessageChat] = useState<MessageChatModel[] | []>([]);

  const addMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regEx = /^[a-zA-Z ]{1,200}$/;

    const value = e.currentTarget.value;

    if (regEx.test(value)) {
      setInputMessage(value);
    }

    if (value === "") {
      setInputMessage("");
    }
  };

  const send = () => {
    const form = new FormData();
    const userId = localStorage.getItem("user_id");

    if ( userId !== null && imputMessage !== null && props.idDestination !== undefined
    ) {
      form.append("user_id", userId);
      form.append("message", imputMessage);
      form.append("user_destination", props.idDestination);
    }

    axios.post("http://localhost/librarius/message.php", form).then((res) => {

      updateMessageChat(res.data);
      console.log(res.data)

     
    });

    setInputMessage("");
  };

  return (
    <VSendMessageInputView
      imputMessage={imputMessage}
      addMessage={addMessage}
      messageChat={messageChat}
      send={send}
    >
      {props.children}
    </VSendMessageInputView>
  );
};
