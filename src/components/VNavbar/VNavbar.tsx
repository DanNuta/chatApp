import React, {
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
} from "react";
import { VNavbarView } from "./VNavbar.View";
import axios from "axios";

import { CategoryContext } from "../../context/Category.context";
import { CategoryModel } from "../../models/categoryBooksContext.model";
import {BooksModelContext} from "../../models/BooksContext.model";
import {BookModel} from "../../models/book.model";
import {BookContext} from '../../context/Books.context';


export const VNavbar: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { category } = useContext(CategoryContext) as CategoryModel;
  const {filterBookCategory} = useContext(BookContext) as BooksModelContext;

  const filterCategory = [...category, "all"]

  return <VNavbarView categoryBooks={filterCategory}
                      filterFn={filterBookCategory}
  >{props.children}
  </VNavbarView>;
};
