import { environment } from 'src/environments/environment'


// different request urls end point //
export const Users = {
    LIST: environment.baseURL + '/v1/usersList',
    ADD: environment.baseURL + '/v1/addUser',
    DELETE: environment.baseURL + '/v1/deleteUser',
    ADD_TASK: environment.baseURL + '/v1/addTask'
}