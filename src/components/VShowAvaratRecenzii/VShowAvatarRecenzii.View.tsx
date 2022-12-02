import React, {PropsWithChildren} from "react";
import {VShowAvatarRecenziiView} from "./VShowAvaratRecenzii";
import {ShowAvatarModel} from "../../models/showHoverAvatar.model";

type Props = {
    data: ShowAvatarModel,
    class?: string
}


export const VShowAvatarRecenzii: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (
        <VShowAvatarRecenziiView data={props.data}
                                 class={props.class}
        >
            {props.children}
        </VShowAvatarRecenziiView>
    )
}