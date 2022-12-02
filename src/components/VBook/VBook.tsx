import React, {PropsWithChildren, useContext} from "react";
import {VBookView} from "./VBook.View";
import {BookModel} from "../../models/book.model";
import {BuyBookModel} from "../../models/buyBook.model";
import {BuyCardContext} from "../../context/BuyCard.context";

type Props = {
    data: BookModel
}

export const VBook : React.FC<PropsWithChildren<Props>>= (props: PropsWithChildren<Props>) =>{

    const {addNewBuyBook} = useContext(BuyCardContext) as BuyBookModel

    return (
        <VBookView data={props.data}
                   addNewBuyBook={addNewBuyBook}
        >
            {props.children}
        </VBookView>
    )
}