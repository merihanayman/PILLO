import React,{Component} from 'react';
import { StyleSheet, Text, SafeAreaView, ImageBackground ,View, Image, Dimensions,Modal} from 'react-native';
import firebase from '../components/firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import {registerForPushNotificationsAsync} from '../screens/pharmacy';

//import firebase from '../components/firebase';

export default class Start extends React.Component {

  componentDidMount(){
    this.notify()
  }
 notify = ()=> {registerForPushNotificationsAsync();}
 
    _nav3() {
        this.props.navigation.navigate('search');
    }
    _nav4() {
      this.props.navigation.navigate('Pharmacysearch');
    }
    render() {
        return (
    <View style={styles.screen}
    >
    

            <ImageBackground 
            source={require('../pic/pic3.jpg')} 
            style={{resizeMode:'stretch',flex:0.5,marginTop:'10%'}}
           
            >
                </ImageBackground>
                <Text style={{
                    color:'white',
                    fontSize: 25,
                    marginLeft:'34%'
                }}>
                   Search for..?
               </Text>
           <View style={styles.viewbutton}>
               
            <Button
            full
            rounded
            success
            style={styles.submitButton}
            onPress={this._nav3.bind(this)}
            >
            <Text style={{ color: 'white', 
            fontSize: 40,
            //fontStyle: 'italic',
            fontWeight:'bold',
            textShadowColor:'black',
            textShadowRadius: 5,
            textDecorationStyle:'double',
            textDecorationColor: 'black',
            letterSpacing: 1,
          
            }}> Doctor</Text>
          
          </Button>

          <Button
            full
            rounded
            success
            style={styles.submitButton}
            onPress={this._nav4.bind(this)}
            >
            <Text style={{ color: 'white', 
            fontSize: 40,
            //fontStyle: 'italic',
            fontWeight:'bold',
            textShadowColor:'black',
            textShadowRadius: 5,
            textDecorationStyle:'double',
            textDecorationColor: 'black',
            letterSpacing: 1,
          
            }}> Pharmacy</Text>
        
          
          
          </Button>

          </View> 
            
             
          
            
            </View>

        );
  };
}
const styles = StyleSheet.create({
    screen:{
        //padding: 10,
       // flex:1,
       // marginTop: '1%',
        flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
        alignItems: 'stretch',
        backgroundColor:'#0265a8'
          },

    viewbutton:{
            flex:1.5,
            marginTop:'20%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly'
           },
    submitButton: {
        marginTop: '-20%',
        padding: 20,
        marginHorizontal: 80,
       // position: 'absolute',
        //width: '80%',
       height: '30%',
       backgroundColor: 'rgba(255,255,255 ,0.01)',
       // backgroundColor:'white'
        
    },
  
       

         });