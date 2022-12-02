import React, {PropsWithChildren} from "react";
import { VInput } from "../VInput/VInput";
import * as Style from "./VSendMessageInput.style";
import { IoMdSend } from "@react-icons/all-files/io/IoMdSend";
import "./SendMessage.scss";
import {MessageChatModel} from "../../models/messageChat";



type Props = {
    imputMessage: string ,
    addMessage: (e: React.ChangeEvent<HTMLInputElement>) => void,
    send: () => void,
    messageChat: MessageChatModel[] | null;
   
}

export const VSendMessageInputView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    return (
        <Style.SendMessage>

             <VInput type="text" value={props.imputMessage} class="input" onChange={props.addMessage}  placeholder="messaj"/>

             {props.imputMessage && <IoMdSend onClick={props.send} className="icon_send"/>}
        </Style.SendMessage>
    )
}