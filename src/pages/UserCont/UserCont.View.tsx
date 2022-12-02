import React, {PropsWithChildren} from "react";
import {UserForeignModel} from "../../models/userForeign";


type Props = {
    
    userData: UserForeignModel | null,
    messageFn: () => void
}

export const UserContView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    return (
        <div>
            <h1>{props.userData?.nume}</h1>
            <img src={`http://localhost/librarius/images/${props.userData?.avatar}`} alt="" />



           <button onClick={props.messageFn}>Messages</button>


        </div>
    )
}