import auth from '@react-native-firebase/auth';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED ,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
} from './types';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text,
    };
};

export const passwordChanged = (text)=>{
    return {
        type: PASSWORD_CHANGED,
        payload: text,
    };
};

export const loginUser = ({email,password}) =>{
    return (dispatch) =>{
        dispatch({type: LOGIN_USER});
        auth().signInWithEmailAndPassword(email,password)
        .then(user => loginusersuccess(dispatch,user))
        .catch(() =>{
            auth().createUserWithEmailAndPassword(email,password)
            .then(user => loginusersuccess(dispatch,user))
            .catch(()=>loginuserfail(dispatch));
        });
    };
};

const loginusersuccess = (dispatch,user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
    });
};

const loginuserfail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
};

