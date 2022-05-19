import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
} from './types';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/app';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop,value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop,value},
    };
};

export const employeeCreate = ({name,phone,shift}) => {

  const firebaseConfig = {
    apiKey: 'AIzaSyAjPLeBwV52minM0SUbXX_fQXil3IdiMJo',
    authDomain: 'managerproject-8924c.firebaseapp.com',
    projectId: 'managerproject-8924c',
    storageBucket: 'managerproject-8924c.appspot.com',
    messagingSenderId: '1079000251993',
    appId: '1:1079000251993:web:35295038a7d70101d0fb48',
    measurementId: 'G-VWKWP0L79B',
  };
  firebase.initializeApp(firebaseConfig);

    const {currentUser} = auth();

    // const URL = 'https://managerproject-8924c-default-rtdb.asia-southeast1.firebasedatabase.app/';
    return (dispatch) =>{
        // todo
        // const ref = database(
        //   'https://managerproject-8924c-default-rtdb.asia-southeast1.firebasedatabase.app/'
        //   ).ref(`/users/${currentUser.uid}/employees`);
        // console.log(ref);
        // ref.set({name,phone,shift})
        // .then(()=> {
        //     console.log('Data set.');
        //     dispatch({type: EMPLOYEE_CREATE });
        //     Actions.employeeList({type: 'reset'});
        // });

        dispatch({type: EMPLOYEE_CREATE });
            Actions.EmployeeList({type: 'reset'});
    };

};







/*

{
  "rules": {
    "users" : {
      "$uid":{
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}

*/
