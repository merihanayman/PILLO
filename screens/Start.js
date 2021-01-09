import React,{Component} from 'react';
import { StyleSheet, Text, SafeAreaView, ImageBackground ,View, Image, Dimensions,Modal} from 'react-native';
import firebase from '../components/firebase';
import {registerForPushNotificationsAsync} from '../screens/pharmacy';
//import * as firebase from 'firebase';
//import APIkeys from '../components/APIkeys';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
//import Spinner from 'react-native-loading-spinner-overlay';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
export default class Start extends React.Component {

    
    _nav() {
        this.props.navigation.navigate('login');
    }
    render() {        
        return (
    <View>
    

            <ImageBackground 
            source={require('../pic/pic1.jpg')} 
            style={{resizeMode:'stretch',height:'85%',width:'100%'}}
           
            >
            
            <Button
            full
            rounded
            success
            style={styles.submitButton}
            onPress={this._nav.bind(this)}
            >
            <Text style={{ color: 'white', 
            fontSize: 20,
            fontStyle: 'italic',
            fontWeight:'bold',
            textShadowColor:'black',
            textShadowRadius: 5,
            textDecorationStyle:'double',
            textDecorationColor: 'black',
            letterSpacing: 1,
          
            }}> Continue!</Text>
          
          
          </Button>
          {/*tSize={24}
          message="Loading... "
          ><OrientationLoadingOverlay
          visible={true}
          color="white"
          indicatorSize="large"
          messageFon
          <View>
<Image source={require('../pic/pic1.jpg')}/>

          </View>
          </OrientationLoadingOverlay>*/}
            </ImageBackground>
             
          
            
            </View>

        );
  };
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',


    },
    submitButton: {
        marginTop: 600,
        padding: 20,
        marginHorizontal: 80,
       // position: 'absolute',
        //width: '80%',
       height: '10%',
       //backgroundColor: 'rgba(255,255,255 ,0.01)',
        backgroundColor:'lightblue'
        
    },
  
       screenimg:{
          flex:1,
          width:Dimensions.get('window').width },
    screen: {
        padding: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        alignItems: 'stretch'
    }});