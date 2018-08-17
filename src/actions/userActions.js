import { UserConstants } from '../constants';
import { UserService } from '../services/UserServices';
import { alertActions } from './';
import { history } from '../helpers/history';


const login = (email, password) => {
    return dispatch => {
        dispatch(request({ email }));

        UserService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: UserConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: UserConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: UserConstants.LOGIN_FAILURE, error } }
}

const register = (user) => {
    return dispatch => {
        dispatch(request(user));

        UserService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: UserConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: UserConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: UserConstants.REGISTER_FAILURE, error } }
}

const logout = () => {
    UserService.logout();
    return { type: UserConstants.LOGOUT };
}

export const userActions = {
    login,
    logout,
    register
  }
