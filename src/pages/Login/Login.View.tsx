import React, {PropsWithChildren} from "react";
import { VButton } from "../../components/VButton/VButton";
import { VInput } from "../../components/VInput/VInput";
import * as Style from "./Login.style";
import {Link} from "react-router-dom";




type Props = {
    email: string,
    errEmail: string | null,
    password: string,
    errPassword: string | null,
    emailFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    passwordFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    send: () => void
}


export const LoginView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (
        <Style.Form>
            <VInput type="email" onChange={props.emailFn} error={props.errEmail} />
            <VInput type="password" onChange={props.passwordFn}  error={props.errPassword}/>
            <VButton text="Login" onClick={props.send}/>

            <Link to='authentification'>Creaza un cont</Link>
        </Style.Form>
    )
}