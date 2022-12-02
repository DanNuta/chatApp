import React, { PropsWithChildren } from "react";
import { VButton } from "../../components/VButton/VButton";
import { VInput } from "../../components/VInput/VInput";
import {VInputPassword} from "../../components/VInputPassword/VInputPassword";
import * as Style from "./Authentification.style";


type Props = {
    numeFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    emailFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    fileFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    passwordFn: (e: React.ChangeEvent<HTMLInputElement>) => void
    send: (event: React.MouseEvent<HTMLButtonElement>) => void,
    numeError?: string | null,
    emailError?: string | null,
    passwordError?: string | null,
    emailExist?: string | null,
    fileError?: string | null
}

export const AuthentificationView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {



    return (
        <Style.Form>
            <Style.EmailExist>{props.emailExist}</Style.EmailExist>
           <VInput onChange={props.numeFn} type="text" placeholder="Nume" error={props.numeError}/>
           <VInput onChange={props.emailFn} type="text" placeholder="Email" error={props.emailError}/>
           <VInputPassword onChange={props.passwordFn} placeholder="Password" error={props.passwordError}/>
           <VInput onChange={props.fileFn} type="file" error={props.fileError} />
           <VButton onClick={props.send} text="Creaza un nou cont" />

        </Style.Form>
    )
}