import React, {PropsWithChildren, ReactElement} from "react";
import * as Style from "./General.style";
import {AuthentificationModel} from "../../../../models/authentification.model";
import {VModelUser} from "../../../../components/VModelUser/VModelUser";

type Props = {
    user: AuthentificationModel | null,
    openModel: boolean,
    setOpenModel: () => void
}


export const GeneralView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (

<>

        <Style.General onClick={() => props.setOpenModel()}>

                <h1>{props.user?.nume}</h1>
                <img src={`http://localhost/librarius/images/${props.user?.avatar}`} alt="" />
                <h3>{props.user?.email}</h3>
               

            
        </Style.General>

                {props.openModel &&
                                    <Style.ModalData>
                                        <VModelUser></VModelUser>
                                    </Style.ModalData>
                 }
</>
    )
}