import React, {PropsWithChildren, useEffect, useRef} from "react";
import * as Style from "./Message.style";
import {UserForeignModel} from "../../models/userForeign";
import { VSendMessageInput } from "../../components/VSendMessageInput/VSendMessageInput";
import {MessageChatModel} from "../../models/messageChat";
import {Link} from "react-router-dom";





type Props = {
    userDestination: UserForeignModel[] | null,
    userChtaOpenFn: (user: UserForeignModel) => void
    userChtaOpen: UserForeignModel | null,
    messageChat: MessageChatModel[],
    handleRef: (ref: React.RefObject<HTMLDivElement>, item: UserForeignModel) => void,
    numberScroll?: number
}





export const MessageView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const ref = useRef<HTMLDivElement>(null)

    

    return (
        <Style.Message>

            <Style.UsersChat>
                <Style.MessageTitle>Message</Style.MessageTitle>
            {props.userDestination && props.userDestination.map(item =>{

             return (
    
                <Style.UserChatMessage onClick={(e) => props.handleRef(ref, item)} active={item.user_id == props.userChtaOpen?.user_id ? "active" : ""} >
                   <Style.ImgUserChat src={`http://localhost/librarius/images/${item.avatar}`} alt="" />

                   <Style.UserDataActive>
                       <Style.NumeUser>{item.nume}</Style.NumeUser>
                       {item.activity == "online" ? <Style.AvtiveUser activ="green"></Style.AvtiveUser> : <Style.AvtiveUser activ="red"></Style.AvtiveUser>} 
                   </Style.UserDataActive>
                </Style.UserChatMessage>
                
             )
            })}

            </Style.UsersChat>



            <Style.MessageChat>

                <Style.OpenChatUser>
                    <Style.ImgOpenChat src={`http://localhost/librarius/images/${props.userChtaOpen?.avatar}`} alt="" />
                    <Style.NumeUser>{props.userChtaOpen?.nume}</Style.NumeUser>
                </Style.OpenChatUser>


 
                <Style.MessageSender ref={ref}  >
                {props.messageChat && props.messageChat.map((item, i) =>{

                    if(item.id_destinatar == props.userChtaOpen?.user_id ){
                        return (
                        <Style.MessageCurentId className={i === props.messageChat.length -1 ? "ultimul" : ""}>
                            
                                                                            
                            <Style.MessageParagraph>{item.messages}</Style.MessageParagraph>
                            {/* <Link to={`userCont/${props.userChtaOpen?.user_id}`}><Style.AvatarMessage src={`http://localhost/librarius/images/${props.userChtaOpen?.avatar}`} /></Link> */}
                                                                            
                                                                              
                                                        
                            
                        </Style.MessageCurentId>
                        )
                    }else{

                        return (
                            <Style.MessageDestinatar className={i === props.messageChat.length -1 ? "ultimul" : ""}>
                            
                                                                            
                             <Link to={`userCont/${props.userChtaOpen?.user_id}`}><Style.AvatarMessage src={`http://localhost/librarius/images/${props.userChtaOpen?.avatar}`} /></Link> 
                            <Style.MessageParagraph>{item.messages}</Style.MessageParagraph>
                                                
                        </Style.MessageDestinatar>
                        )
                    }
                    
                    
                })}

               <VSendMessageInput idDestination={props.userChtaOpen?.user_id}/>
               
               </Style.MessageSender>
            </Style.MessageChat>


            
        </Style.Message>
    )
}