import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Mylocation from './Mylocation';

class Geolocation extends Component{
    state = {
        lat: 'unknown',
        long: 'unknown',
        error: ''
    }

  componentWillMount() {
        let pos;
         navigator.geolocation.getCurrentPosition((position) =>{
             //console.log(position.coords.latitude);
             this.setState({
                 lat: position.coords.latitude,
                 long: position.coords.longitude
             });
         },
          (error) =>{
              this.setState({error: error});
          })
  }
  render() {
     return (
        <View>
            <Mylocation lat={this.state.late} long={this.state.long} />
            <Text>{this.state.lat}</Text>
            <Text>{this.state.long}</Text>
        </View>    
     )

  }

}


export default Geolocation;

