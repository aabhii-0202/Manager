import React from 'react';
import { Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeEdit from './Components/EmployeeEdit';
const RouterComponent = () => {


    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <Router sceneStyle={{ paddingTop: 4 }}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title= "Please Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene
                        initial
                        rightTitle="Add"
                        onRight={()=>Actions.EmployeeCreate()}
                        key="EmployeeList"
                        component={EmployeeList}
                        title="Employees" />
                    <Scene
                        key="EmployeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee" />
                    <Scene
                        key="EmployeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};



export default RouterComponent;
