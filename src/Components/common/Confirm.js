import React  from 'react';
import {Text, View, Modal} from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {
    const {container,textstyle,cardSectionStyle} = styles;

     return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={container}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textstyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};


const styles = {
    cardSectionStyle: {
        justifyContent: 'center',

    },
    textstyle: {
        flex: 1,
        fontSize: 18,
        lineHeight: 40,
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
};


export default {Confirm};
