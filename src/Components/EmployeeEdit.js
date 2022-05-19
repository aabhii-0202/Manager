import _ from 'lodash';
import React,{Component} from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeSave,employeeDelete} from '../actions';
import EmployeeForm from './EmployeeForm';
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

    onAccept(){
        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }
    onDecline(){
        this.setState({show: false});
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
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
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

export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);
