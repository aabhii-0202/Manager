import React,{Component} from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class EmployeeCreate extends Component{
    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Abhishek"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({prop: 'name',value: text})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="9876543210"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({prop: 'phone',value: text})}
                    />
                </CardSection>
                <CardSection
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        flexDirection: 'column',
                        height:100,
                    }}>
                    <Text style={styles.picker}>{this.props.shift}</Text>
                <Picker
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{flex:1,marginLeft:10}}
                    selectedValue={this.props.shift}
                    onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day})}
                >
                    <Picker.Item label="Monday" value="Monday"/>
                    <Picker.Item label="Tuesday" value="Tuesday"/>
                    <Picker.Item label="Wednesday" value="Wednesday"/>
                    <Picker.Item label="Thursday" value="Thursday"/>
                    <Picker.Item label="Friday" value="Friday"/>
                    <Picker.Item label="Saturday" value="Saturday"/>
                </Picker>
                </CardSection>
                <CardSection>
                <Button>
                    Create
                </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    picker:{
        fontSize: 18,
        paddingLeft:20,
    },
};

const mapStateToProps = (state) => {
    const {name,phone, shift} = state.employeeform;

    return {name,phone, shift};
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeCreate);
