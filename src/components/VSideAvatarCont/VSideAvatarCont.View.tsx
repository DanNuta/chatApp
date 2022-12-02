import React, {PropsWithChildren} from "react";
import * as Style from "./VSideAvatarCont.style";
import {Link} from "react-router-dom";
import { VButton } from "../VButton/VButton";




type Props = {
    logOut: () => void
}



export const VSideAvatarContView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (
        <Style.GeneralDataLink>
            <Style.Ul>
                <Style.Li><Link to="general">Date Generale</Link></Style.Li>
                <Style.Li><Link to="comanda">Comanda</Link></Style.Li>
                <Style.Li><VButton  text="Logout" onClick={props.logOut}></VButton></Style.Li>
            </Style.Ul>
        </Style.GeneralDataLink>
    )
}