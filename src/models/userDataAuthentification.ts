import {AuthentificationModel} from "./authentification.model";


export type userDataAuthentificationModel = {
    user: AuthentificationModel | null,
    updateStateUser: (data: AuthentificationModel) => void
}


