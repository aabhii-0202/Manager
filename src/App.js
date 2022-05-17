import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import { firebase } from '@react-native-firebase/app';
import LoginForm from './Components/LoginForm';

class App extends Component{

    componentDidMount(){
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
    }
    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
