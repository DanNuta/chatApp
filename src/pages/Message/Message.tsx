import React, {
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
  useRef
} from "react";

import { MessageView } from "./Message.View";
import axios from "axios";
import { UserForeignModel } from "../../models/userForeign";
import { MessageChatModel } from "../../models/messageChat";
import { ReceiveMessageContext } from "../../context/ReceiveMessageUser.context";
import { ReceiveMessageContextModel } from "../../models/receiveMessageContext";

export const Message: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {


    
    const [numberScroll, setNumberScroll] = useState<number | undefined>(0);
    
    const { receiveMessage } = useContext(ReceiveMessageContext) as ReceiveMessageContextModel;
    
    const [userDestination, setUserDestination] = useState<UserForeignModel[]>([]);
    
    const [messageChat, setMessageChat] = useState<MessageChatModel[] | []>([]);
    const [userChatOpen, setUserChatOpen] = useState<UserForeignModel | null>( null);

    useEffect(() => {
        
        const handleRef = (ref: React.RefObject<HTMLDivElement>, item: UserForeignModel) =>{

            setNumberScroll(ref.current?.clientHeight)
            setUserChatOpen(item)
        }



    }, [messageChat])
    
    
    const handleRef = (ref: React.RefObject<HTMLDivElement>, item: UserForeignModel) =>{

        setNumberScroll(ref.current?.clientHeight)
        setUserChatOpen(item)
    }

   


  


    console.log("rerender")


    
    
    


  


  



  useEffect(() => {
    const destination = localStorage.getItem("id_destination");
    const curent_id = localStorage.getItem("user_id");

    if (destination == null) return

    const userDestination: UserForeignModel = JSON.parse(destination);


    axios.get(`http://localhost/librarius/users_send_message.php?curent_id=${curent_id}`)
       .then(res => {

           setUserDestination(prev => [...res.data]); 
       })



    setUserChatOpen(userDestination)
    

  }, []);



  useEffect(() =>{
    if(receiveMessage) setMessageChat(receiveMessage)
    
  }, [receiveMessage])



  useEffect(() => {
    const idCurent = localStorage.getItem("user_id");

    if (idCurent == null) return

      axios.get(`http://localhost/librarius/message.php?idDestination=${userChatOpen?.user_id}&userId=${idCurent}`)
        .then((res) => {

                setMessageChat(res.data);
               
        });
    
  }, [userChatOpen]);


  const userChatOpenFn = (user: UserForeignModel) => {
     setUserChatOpen(user);
  };


  return (
    <MessageView
      userDestination={userDestination}
      userChtaOpenFn={userChatOpenFn}
      userChtaOpen={userChatOpen}
      messageChat={messageChat}
      handleRef={handleRef}
    >
      {props.children}
    </MessageView>
  );
};
