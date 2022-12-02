import React, {PropsWithChildren} from "react";
import { VBook } from "../../components/VBook/VBook";
import {AuthentificationModel} from "../../models/authentification.model";
import {BookModel} from "../../models/book.model";
import * as Style from "./Home.style";

type Props = {
    userData?: AuthentificationModel | null,
    books: BookModel[] | null,
    category: string[],
    filterData: BookModel[] | null

}




export const  HomeView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{



    return (
        <div>

            {props.category.map(item =>{
                return (
                    <div>


                        <h1>{item}</h1>

                        <Style.SectionBooksCategory>

                        {props.filterData && props.filterData.map(element =>{

                            const data = item === element.gen_produs;

                            return (
                                <>
                                    {
                                    data && 
                                        <VBook data={element}/>
                                        }
                                </>
                            )
                        })}


                    </Style.SectionBooksCategory>


                    </div>
                )
                
            })}

            
        
        </div>
    )
}