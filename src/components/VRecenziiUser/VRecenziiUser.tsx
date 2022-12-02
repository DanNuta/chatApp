import React, {PropsWithChildren, useState} from "react"
import {VRecenziiUserView} from "./VRecenziiUser.View";
import {RecenzieModel} from "../../models/recenzie.model";
import axios  from "axios";


type Props = {
    data: RecenzieModel
}





const user_curent = localStorage.getItem("user_id");

export const VRecenziiUser: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    const [showAvatar, setShowAvatar] = useState(false);
    const [deleteRecenzie, setDeleteRecenzie] = useState(false);


    const mousOverAvatar = (id: string) =>{
        if(user_curent !== props.data.user_id){
            setShowAvatar(true)
        }
    }
    
    
    const mousLeaveAvatar = () =>{
        if(user_curent !== props.data.user_id){
            setShowAvatar(false)
        }
    }


    const deleteRecenzieEnterMouse = () =>{
        if(user_curent === props.data.user_id){
            setDeleteRecenzie(true)
        }
    }



    
    
    const deleteRecenzieLeaveMouse = () =>{
        if(user_curent === props.data.user_id){
            setDeleteRecenzie(false)
        }
    }
    
    const deleteRecenzieFn = (id: string) =>{
        
        axios.get(`http://localhost/librarius/add_recenzie.php?id_recenzie=${props.data.id_recenzie}`)
          .then(res => console.log(res.data))

          
    }





    return (
        <VRecenziiUserView data={props.data} 
                           mouseAvatar={mousOverAvatar}
                           mouseLeaveAvatar={mousLeaveAvatar}
                           showAvatarState={showAvatar}
                           deleteRecenzieLeaveMouse={deleteRecenzieLeaveMouse}
                           deleteRecenzieEnterMouse={deleteRecenzieEnterMouse}
                           deleteRecenzie={deleteRecenzie}
                           deleteRecenzieFn={deleteRecenzieFn}
        >
            {props.children}
        </VRecenziiUserView>
    )
}