import React, {createContext, PropsWithChildren, useState} from "react";
import {CategoryModel} from "../models/categoryBooksContext.model";

export const CategoryContext = createContext<CategoryModel | null>(null);



export const CategoryModelContext: React.FC<PropsWithChildren> = (props: PropsWithChildren) =>{

    const [category, setCategory] = useState<string[]>([]) 


    const updateCategoryFn = (data: string[]) =>{

        setCategory(data)
    }

    return (
        <CategoryContext.Provider value={{category, updateCategoryFn}}>
            {props.children}
        </CategoryContext.Provider>
    )
}