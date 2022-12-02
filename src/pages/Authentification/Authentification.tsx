import React, {PropsWithChildren, useState, useEffect, useContext} from "react";
import {AuthentificationView} from "./Authentification.View";
import axios from "axios";
import {VFormModel} from "../../components/VFormModel/VFormModel";
import Cookies from 'universal-cookie';
import {userDataAuthentificationModel} from "../../models/userDataAuthentification";
import {Authentification} from "../../context/Authentification.context";
import {useNavigate} from "react-router-dom";
import {pattern, matchRegEx} from "../../ValidateData/ValiateData.regex";



type Props = {
    response: any,
    isPending: boolean | null
}






export const Autentification: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{
    
    const location = useNavigate();


    
    

    const {updateStateUser} = useContext(Authentification) as userDataAuthentificationModel;


    // nume state
    const [nume, setNume] = useState("");
    const [numeError, setNumeError] = useState<string | null>(null)
    
    //email state
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null)
    
    //password state
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState<string | null>(null)
    
    //file state
    const [fileError, setFileError] = useState<string | null>(null);
    const [avatar, setAvatar] = useState<any>();

    //verify email if exist  
    const [emailExist, setEmailExist] = useState<string | null>(null);



    const numeFn = (e: React.ChangeEvent<HTMLInputElement>) =>{

        matchRegEx(e.currentTarget.value, pattern.nume, setNume, setNumeError, "Trebuie sa introduci un nume valid");

        if(e.currentTarget.value === ""){
            setNumeError(null)
          }
    }


    const emailFn = (e: React.ChangeEvent<HTMLInputElement>) =>{
        matchRegEx(e.currentTarget.value, pattern.email, setEmail, setEmailError, "Trebuie sa introduci un email valid");

        if(e.currentTarget.value === ""){
            setEmailError(null)
          }
    }



    const passwordFn = (e: React.ChangeEvent<HTMLInputElement>) =>{
        matchRegEx(e.currentTarget.value, pattern.password, setPassword, setPasswordError, "Parola este slaba");

       if(e.currentTarget.value === ""){
         setPasswordError(null)
       }
    }


    const fileFn = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.currentTarget.files?.[0];


        if(!file){
            setFileError("Selecteza te rog un avatar")
        }

        if(!file?.type.includes("image")){
            setFileError("Trebuie sa introduci o imagine")
            return
        }


        if(file !== undefined){

            if(file?.size > 100000){
                setFileError("Dimensiunea la imagine nu trebuie sa depasesca 100000 biti")
                return
            }
        }


        setFileError(null)
        setAvatar(file)
    }



    const send = (e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()

        if(!pattern.nume.test(nume)){
            setNumeError("Trebuie sa introduci un nume valid")
            return
        }

        if(!pattern.email.test(email)){
            setEmailError("Trebuie sa introduci un email valid")
            return
        }

        if(!pattern.password.test(password)){
            setPasswordError("Trebuie sa introduci o parola valida")
            return
        }

        if(avatar === undefined){
            setFileError("Selecteaza o imagine")
            return;
        }


        const newUser = new FormData();
        newUser.append("nume", nume);
        newUser.append("email", email);
        newUser.append("password", password);
        newUser.append("file", avatar);



        axios.post("http://localhost/librarius/auth.php", newUser)
           .then(rez => {

            setEmailExist(rez.data.email_exist);

                 localStorage.setItem("user_id", rez.data.cookie)

                 updateStateUser(rez.data.user_data);


                 location("/");

            
           } )


        }


    return (
        <VFormModel>
        <AuthentificationView numeFn={numeFn}
                              emailFn={emailFn}
                              fileFn={fileFn}
                              passwordFn={passwordFn}
                              send={send}
                              numeError={numeError}
                              emailError={emailError}
                              passwordError={passwordError}
                              emailExist={emailExist}
                              fileError={fileError}
         >
            {props.children}
        </AuthentificationView>
        </VFormModel>
    )
}