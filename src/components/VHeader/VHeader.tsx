import React, {PropsWithChildren, useContext, useState} from "react";
import {VHeaderView} from "./VHeader.View";
import {Authentification} from "../../context/Authentification.context";
import {userDataAuthentificationModel} from "../../models/userDataAuthentification";
import { BuyBookModel } from "../../models/buyBook.model";
import {BuyCardContext} from "../../context/BuyCard.context";


export const VHeader: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const {buyBook, total, deleteItem} = useContext(BuyCardContext) as BuyBookModel;
    const {user} = useContext(Authentification) as userDataAuthentificationModel;
    const [shop, setShop] = useState(buyBook.length == 0 ? false : true);



    const shopFn = () =>{
        
        if(buyBook.length > 0){
            setShop(prev => !prev)
        }
    }

    return (
        <VHeaderView user={user}
                     buyBook={buyBook}
                     shop={shop}
                     shopFn={shopFn}
                     total={total}
                     deleteItem={deleteItem}
        >
            {props.children}
        </VHeaderView>
    )
}