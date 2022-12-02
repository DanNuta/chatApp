import React, {PropsWithChildren, useContext} from "react";
import { VSearchBook } from "../VSearchBook/VSearchBook";
import {AuthentificationModel} from "../../models/authentification.model";
import {Link} from "react-router-dom";
import * as Style from "./VHeader.style";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BookModel } from "../../models/book.model";
import {VBuyBook} from "../VBuyBook/VBuyBook";


type Props = {
    user: AuthentificationModel | null,
    buyBook: BookModel[],
    shop: boolean,
    shopFn: () => void,
    total: number,
    deleteItem: (id: string) => void
}

export const VHeaderView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{

    return (
        <Style.Header>

          <VSearchBook/>

          <Style.Avatar>
            <Link to="user">
                
                    <Style.Img src={`http://localhost/librarius/images/${props.user?.avatar}`} alt="" />
               
            </Link>
          </Style.Avatar>



       <Style.ShopingCart onClick={props.shopFn}>
          <AiOutlineShoppingCart className="shoping"/>

          {props.buyBook.length > 0 &&
                <Style.NumberItems>
                <Style.Number>{props.buyBook.length}</Style.Number>
              </Style.NumberItems>
          }


          

       </Style.ShopingCart>

          {props.shop && <VBuyBook data={props.buyBook} total={props.total} deleteItem={props.deleteItem}/>}


        </Style.Header>
    )
}