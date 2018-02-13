import React, { Component} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';



class Mylocation extends Component {
    componentWillMount() {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=-6.793580661645293,39.207499813073575&key=AIzaSyCK_J_lOfjdPSa3kIv5WNPwA2gfL0HAKoA')
        .then((data) => {
               let msg = {};
               let fetched = [];
               msg = data;      
               fetched.push(msg);         
               console.log(fetched);
        })
    }
     render(props) {
         const {long, lat }  = this.props
         return (
            <View>

            </View>
         )
     }

}


export default Mylocation;