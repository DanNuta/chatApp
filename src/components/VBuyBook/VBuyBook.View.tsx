import React, {PropsWithChildren} from "react";
import * as Style from "./VBuyBook.style";
import { BookModel } from "../../models/book.model";
import { BsFillTrashFill } from "@react-icons/all-files/Bs/BsFillTrashFill";


type Props = {
    data: BookModel[],
    total: number,
    deleteItem: (id: string) => void
}

export const VBuyBookView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {

    return (
        <Style.VBuyBookContainer>

            {props.data.map(item => {
                return (
                    <Style.DivBook>

                        <Style.InfoBuyBook>

                            <Style.ImgBook>
                                <img src={`http://localhost/librarius/images/${item.img}`} />
                            </Style.ImgBook>

                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.count} x {item.pret} lei</p>
                            </div>

                        </Style.InfoBuyBook>




                        <BsFillTrashFill className="trash" onClick={() => props.deleteItem(item.id_book)}/>

                    </Style.DivBook>
                )
            })}

            {props.data.length > 0 && <Style.Total>
                <h1>Produse in cos {props.data.length}</h1>
                <h1>Total: {props.total}</h1>
            </Style.Total>}

        </Style.VBuyBookContainer>
    )
}