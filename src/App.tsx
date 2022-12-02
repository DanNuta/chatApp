import React, { useContext, PropsWithChildren, useEffect } from "react";
import { AppView } from "./App.View";
import { AuthentificationContext } from "./context/Authentification.context";
import { ModelContextBoolean } from "./context/Modal.context";
import { CategoryModelContext } from "./context/Category.context";
import { ReceiveMessageContextProvider } from "./context/ReceiveMessageUser.context";
import {BookContextProvider} from "./context/Books.context";
import {BuyContext} from "./context/BuyCard.context";


export const App: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (

    <BuyContext>
      <BookContextProvider>
        <ReceiveMessageContextProvider>
          <CategoryModelContext>
            <ModelContextBoolean>
              <AuthentificationContext>
                <AppView>{props.children}</AppView>
              </AuthentificationContext>
            </ModelContextBoolean>
          </CategoryModelContext>
        </ReceiveMessageContextProvider>
      </BookContextProvider>
    </BuyContext>
  );
};
