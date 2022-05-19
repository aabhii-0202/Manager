import _ from 'lodash';
import React,{Component} from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeSave} from '../actions';
import EmployeeForm from './EmployeeForm';
import {Text} from 'react-native';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{

    state = {show: false};
    componentDidMount(){
        _.each(this.props.employee,(value,prop)=>{
            this.props.employeeUpdate({prop,value});
        });
    }

    onButtonPress(){
        const {name,phone,shift} = this.props;
        this.props.employeeSave({name,phone,shift, uid:this.props.uid.employee});
    }

    onPressText(){
        const {phone, shift} = this.props;
        Communications.text(phone,`Your upcoming shift is on ${shift}`);
    }

    render(){
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.onPressText.bind(this)}
                    >
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=> this.setState({show: !this.state.show})}>
                        Fire Employee</Button>
                </CardSection>
                <Confirm
                    visible={this.state.show}
                >
                    Are You Sure You Want to Delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state)=>{
    const {name,phone,shift} = state.EmployeeForm;

    return {name,phone,shift};
};

export default connect(mapStateToProps,{employeeUpdate,employeeSave})(EmployeeEdit);
