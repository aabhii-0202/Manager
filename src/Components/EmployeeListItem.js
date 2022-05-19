import React,{Component} from 'react';
import {View,Text, TouchableWithoutFedback} from 'react-native';
import {CardSection} from './common';
import { Actions } from 'react-native-router-flux';

class EmployeeListItem extends Component{

    onRowPress(){
        Actions.EmployeeEdit({ employee : this.props.employee });
    }



    render(){
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFedback
                onPress={this.onRowPress.bind(this)}
            >
            <CardSection>
                <Text style={styles.titlestyle}>
                    {name}
                </Text>
            </CardSection>
            </TouchableWithoutFedback>
        );
    }
}

const styles ={
    titlestyle:{
        fontSize: 18,
        paddingLeft: 15,
    },
}

export default EmployeeListItem;
