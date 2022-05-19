import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import Employeereducer from './Employeereducer';
export default combineReducers({
    auth: AuthReducer,
    employeeform: EmployeeFormReducer,
    employees:  Employeereducer,
});
