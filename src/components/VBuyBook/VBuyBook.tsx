import React, {PropsWithChildren} from "react";
import {VBuyBookView} from "./VBuyBook.View";
import { BookModel } from "../../models/book.model";


type Props = {
    data: BookModel[],
    total: number,
    deleteItem: (id: string) => void
}

export const VBuyBook: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


       

        


    return (
        <VBuyBookView data={props.data}
                      total={props.total}
                      deleteItem={props.deleteItem}
        >
            {props.children}
        </VBuyBookView>
    )
}