import React, {PropsWithChildren} from "react";
import {ShowAvatarModel} from "../../models/showHoverAvatar.model";
import * as Style from "./VShowAvatarRecenzii";


type Props = {
    data: ShowAvatarModel,
    class?: string
}



export const VShowAvatarRecenziiView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (
        <Style.AvatarShowRecenzii top={props.class}>
             <Style.ImgSowAvatarRecenzii src={ `http://localhost/librarius/images/${props.data.avatar}`} />
             <Style.NumeAvatar>{props.data.nume}</Style.NumeAvatar>
             { props.data.email && <Style.EmailAvatar>{props.data.email}</Style.EmailAvatar>}
        </Style.AvatarShowRecenzii>
    )
}