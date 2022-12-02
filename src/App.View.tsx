import React, { useContext, PropsWithChildren, useEffect } from "react";
import { Autentification } from "./pages/Authentification/Authentification";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { userDataAuthentificationModel } from "./models/userDataAuthentification";
import { Home } from "./pages/Home/Home";
import { Authentification } from "./context/Authentification.context";
import axios from "axios";
import { VHeader } from "./components/VHeader/VHeader";
import { User } from "./pages/User/User";
import { General } from "./pages/User/UserData/General/General";
import { VNavbar } from "./components/VNavbar/VNavbar";
import { CategoryContext } from "./context/Category.context";
import { CategoryModel } from "./models/categoryBooksContext.model";
import { Book } from "./pages/Book/Book";
import { UserCont } from "./pages/UserCont/UserCont";
import { Message } from "./pages/Message/Message";
import { Login } from "./pages/Login/Login";
import {BooksModelContext} from "./models/BooksContext.model";
import {BookContext} from "./context/Books.context";

export const AppView: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  
  const { user, updateStateUser } = useContext( Authentification) as userDataAuthentificationModel;
  const { updateCategoryFn } = useContext(CategoryContext) as CategoryModel;
  const {booksFn, book} = useContext(BookContext) as BooksModelContext;

  useEffect(() => {

    const userId = localStorage.getItem("user_id");

    axios
      .get(`http://localhost/librarius/auth.php?user_id=${userId}`, {})
      .then(function (response) {
        updateStateUser(response.data.user_data);
      });

  }, []);

  useEffect(() => {
    axios
      .get("http://localhost/librarius/get_category_books.php")
      .then((res) => {
        updateCategoryFn(res.data.gen_books);
      });
  }, []);



 

  return (
    <BrowserRouter>
      {user && <VHeader />}
      {user && <VNavbar />}

      <Routes>
        <Route path="/" element={user == null ? <Login /> : <Home />} />
        <Route path="/:id" element={<Book />} />
        <Route path="user/*" element={user == null ? <Login /> : <User />} />
        <Route
          path="userCont/:id"
          element={user == null ? <Login /> : <UserCont />}
        />
        <Route
          path="messages"
          element={user == null ? <Login /> : <Message />}
        />
        <Route path="login" element={<Login />} />
        <Route path="authentification" element={<Autentification />} />
      </Routes>
    </BrowserRouter>
  );
};
