import {LoadingStatus} from "../../../types";
import {User} from "../../user/contracts/state";

export interface UsersState {
    users: User[];
    loadingState: LoadingStatus;
}
