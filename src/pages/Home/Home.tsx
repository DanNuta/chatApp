import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
  useRef
} from "react";
import { HomeView } from "./Home.View";
import { Authentification } from "../../context/Authentification.context";
import { userDataAuthentificationModel } from "../../models/userDataAuthentification";
import { BookModel } from "../../models/book.model";
import {BooksModelContext} from "../../models/BooksContext.model";
import {BookContext} from "../../context/Books.context";

import { CategoryContext } from "../../context/Category.context";
import { CategoryModel } from "../../models/categoryBooksContext.model";
import axios from "axios";

export const Home: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const { category } = useContext(CategoryContext) as CategoryModel;
  const {book, booksFn, filterData} = useContext(BookContext) as BooksModelContext;

  const bookRef = useRef(book);


  useEffect(() => {
    axios.get("http://localhost/librarius/get_all_books.php")
    .then((res) => {
        booksFn(res.data.books);
    })
    .catch(err => {
      console.log(err)
    });

  }, [bookRef]);
 

  return (
    <HomeView category={category}
              books={book}
              filterData={filterData}
              >

      {props.children}
    </HomeView>
  );
};
