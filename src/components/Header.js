import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Header = ({title}) => {
    const { containerStyle, titleStyle} = styles;
return (
    <View style={containerStyle}>
      <Text style={titleStyle}>{title}</Text>
    </View>  
);

};

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 30,
    },
    titleStyle: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
    
});

export default Header;
