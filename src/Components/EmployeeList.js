import React,{Component} from 'react';
import _ from 'lodash';
import {View,Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component{
    componentDidMount(){
        this.props.employeesFetch();
        this.createDataSourse(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSourse(nextProps);
    }

    createDataSourse({ employees }){ }

    renderItem({ item, index }) {
    return <Text>{item}</Text>;
    }

    render(){
        console.log(this.props);
        return (
            <View>
                <FlatList
                    keyExtractor = {this.props.uid}
                    data={this.props}
                    renderItem={this.renderItem}
                />
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
            </View>
        );
    }
}



const mapStatetoProps = state => {
    const employees = _.map(state.employees, (val,uid)=>{
        return {...val,uid};
    });

    return {employees};
};

export default connect(mapStatetoProps,{employeesFetch})(EmployeeList);
