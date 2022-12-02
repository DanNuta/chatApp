import React, {PropsWithChildren, useState, useContext} from "react";
import {LoginView} from "./Login.View";
import {pattern, matchRegEx} from "../../ValidateData/ValiateData.regex";
import axios from "axios";
import {Authentification} from "../../context/Authentification.context";
import {userDataAuthentificationModel} from "../../models/userDataAuthentification";
import {useNavigate, Link} from "react-router-dom";



export const Login: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const location = useNavigate();

    const {updateStateUser} = useContext(Authentification) as userDataAuthentificationModel;

    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState<string | null>(null);
    const [password, setPassword] = useState("");
    const [errPassword, setErrPassword] = useState<string | null>(null);

    const emailFn = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.currentTarget.value;

        matchRegEx(value, pattern.email, setEmail, setErrEmail, "Aceste email nu este scris corect")
    }



    const passwordFn = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.currentTarget.value;

        matchRegEx(value, pattern.password, setPassword, setErrPassword, "Aceste email nu este scris corect")
    }



    const send = () =>{


        if(!pattern.email.test(email)){
            setErrEmail("Trebuie sa introduci un email valid")
            return
        }

        if(!pattern.password.test(password)){
            setPassword("Trebuie sa introduci o parola valida")
            return
        }


        const form = new FormData();
        form.append("password", password);
        form.append("email", email);


        axios.post("http://localhost/librarius/login.php", form)
            .then(rez => {

                localStorage.setItem("user_id", rez.data.user_id)

                updateStateUser(rez.data);


                location("/");
            });

    }



    return (
        <LoginView email={email}
                   errEmail={errEmail}
                   password={password}
                   errPassword={errPassword}
                   emailFn={emailFn}
                   passwordFn={passwordFn}
                   send={send}



        >
            {props.children}
        </LoginView>
    )
}