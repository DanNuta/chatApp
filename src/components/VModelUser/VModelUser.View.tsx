import React, {PropsWithChildren} from "react";
import * as Style from "./VModelUser.style";
import {AuthentificationModel} from "../../models/authentification.model";
import { VInput } from "../VInput/VInput";
import {VButton} from "../VButton/VButton";



type Props = {
    user: AuthentificationModel | null,
    nameFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    name: string | undefined,
    emailFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    email: string | undefined,
    openModel: boolean,
    setOpenModel: () => void
    errNume: string | null,
    errEmail: string | null
    send: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const VModelUserView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (

        <Style.Modal>


        <form>

       
       <Style.Label htmlFor="nume">Nume</Style.Label>
        <VInput type="text" id="nume" onChange={props.nameFn} value={`${props.name}`} />
        <Style.Error>{props.errNume}</Style.Error>


        <Style.Label htmlFor="email">Email</Style.Label>
        <VInput id="email" onChange={props.emailFn} value={`${props.email}`}/>
        <Style.Error>{props.errEmail}</Style.Error>

            <VButton text="Salveaza" onClick={props.send}/>
            <VButton text="Anuleaza" onClick={() => props.setOpenModel()}/>

            </form>
       
    </Style.Modal>
    )
}