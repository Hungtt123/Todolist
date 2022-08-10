import {User} from "src/model/user.model";

export interface UserState{
    users: User[];
    isLoading: boolean;
    error: string;
}