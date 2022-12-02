import React, {PropsWithChildren, useContext, useState} from "react";
import {VModelUserView} from "./VModelUser.View";
import {ModelContext} from "../../context/Modal.context";
import {ModalContextModel} from "../../models/modelContext.model";
import axios from "axios";




import {userDataAuthentificationModel} from "../../models/userDataAuthentification";
import {Authentification} from "../../context/Authentification.context";
import {pattern, matchRegEx} from "../../ValidateData/ValiateData.regex";





export const VModelUser: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{


    const {model, changeModelStateFn} = useContext(ModelContext) as ModalContextModel;

    const {user, updateStateUser} = useContext(Authentification) as userDataAuthentificationModel;



    const [nume, setNume] = useState(user.nume);
    const [errNume, setErroNume] = useState<string | null>(null);

    const [email, setEmail] = useState(user.email);
    const [errEmail, setErrEmail] = useState<string | null>(null);


    const [emailExist, setEmailExist] = useState<string | null>(null)



    const nameFn = (e: React.ChangeEvent<HTMLInputElement>) =>{

       matchRegEx(e.currentTarget.value, pattern.nume, setNume, setErroNume, "Trebuie sa introduci un nume valid");


       setNume(e.currentTarget.value)

        if(e.currentTarget.value === ""){
            setErroNume(null)
          }
    }


    const emailFn = (e: React.ChangeEvent<HTMLInputElement>) =>{

        matchRegEx(e.currentTarget.value, pattern.email, setEmail, setErrEmail, "Trebuie sa introduci un email valid");

        setEmail(e.currentTarget.value)

        if(e.currentTarget.value === ""){
            setErrEmail(null)
          }
    }


    const changeData = (e: React.MouseEvent<HTMLButtonElement>) =>{

        e.preventDefault();


        if(!pattern.nume.test(nume)){
            setErroNume("Trebuie sa introduci un nume valid")
            return
        }

        if(!pattern.email.test(email)){
            setErrEmail("Trebuie sa introduci un email valid")
            return
        }

        const id = localStorage.getItem("user_id");
        const newUser = new FormData();

        if(id !== null){

            newUser.append("nume", nume);
            newUser.append("email", email);
            newUser.append("id", id);
        }




        axios.post("http://localhost/librarius/update_user_data.php", newUser)
           .then(rez => {

            //setEmailExist(rez.data.email_exist);


            console.log(rez.data)

                // localStorage.setItem("user_id", rez.data.cookie)

                 updateStateUser(rez.data.user_data);


                //  location("/");

            
           } )

       
        setTimeout(() =>{
            changeModelStateFn()
        }, 1000)
    }


    return (
        <VModelUserView user={user}
                        nameFn={nameFn}
                        name={nume}
                        emailFn={emailFn}
                        email={email}
                        openModel={model}
                        setOpenModel={changeModelStateFn}
                        errNume={errNume}
                        errEmail={errEmail}
                        send={changeData}
        >
            {props.children}
        </VModelUserView>
    )
}