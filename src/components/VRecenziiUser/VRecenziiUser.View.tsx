import React, {PropsWithChildren} from "react"
import {RecenzieModel} from "../../models/recenzie.model";
import * as Style from "./VReactUser.style";
import {Link} from "react-router-dom";
import { VShowAvatarRecenzii } from "../VShowAvaratRecenzii/VShowAvatarRecenzii.View";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

type Props = {
    data: RecenzieModel,
    mouseAvatar: (id: string) => void,
    mouseLeaveAvatar: () => void,
    showAvatarState: boolean,
    deleteRecenzieLeaveMouse: () => void,
    deleteRecenzieEnterMouse: () => void,
    deleteRecenzie: boolean,
    deleteRecenzieFn: (id: string) => void
}

const curent_user = localStorage.getItem("user_id");

export const VRecenziiUserView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{
    

    return (
        <Style.Recenzie  onMouseEnter={props.deleteRecenzieEnterMouse}
                         onMouseLeave={props.deleteRecenzieLeaveMouse}>

            <Style.RecenzieElement   >
               <Style.RecenzieParaghraph 
               >{props.data.recenzie}
               </Style.RecenzieParaghraph>



               {props.deleteRecenzie && <Style.DeleteRecenzie onClick={() => props.deleteRecenzieFn(props.data.id_recenzie)}><FaTrash/></Style.DeleteRecenzie>}


            </Style.RecenzieElement>

            <Link to={curent_user !== props.data.user_id ? `userCont/${props.data.user_id}` : "user"}>
                <Style.UserRecenzie onMouseEnter={() => props.mouseAvatar(props.data.user_id)}
                                    onMouseLeave={props.mouseLeaveAvatar}
                >
                    <Style.ImgUser src={`http://localhost/librarius/images/${props.data.avatar}`} />

            {props.showAvatarState && <VShowAvatarRecenzii data={props.data} /> }  
                </Style.UserRecenzie>
            </Link>





        </Style.Recenzie>
    )
}