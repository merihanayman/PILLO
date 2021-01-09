import React, { Component, useState } from 'react';
import { ListItem, SearchBar } from 'react-native-elements';
import { StyleSheet, Text,Button,SafeAreaView, ImageBackground ,View, Image, Dimensions,ActivityIndicator,FlatList,
    TouchableOpacity, Modal,TextInput} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label } from 'native-base';
//import APIkeys from '../cpmponents/APIKeys';
//import firebase from '../components/firebase';
//import {Permissions, Notificatons} from 'expo';
import {registerForPushNotificationsAsync} from '../screens/pharmacy.js';
//import registerForPushNotificationsAsync from 'registerForPushNotificationsAsync';
import { Notifications } from 'expo';
//import * as Notifications from 'expo-notifications';


//import APIkeys from ./Keys/APIkeys;
//import PushNotification from 'react-native-push-notification';
//import pharmacy from './screens/pharmacy'

import * as firebase from 'firebase';




  
// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
async function sendPushNotification(expoPushToken,msg){
  const message = [
  {
    to: expoPushToken,
    sound: 'default',
    title: 'PILLO',
    body: msg,
    data: { data: ' MESSAGE here ' },
  },

];

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
  
}



// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });

export default class FormOne extends React.Component {


  state = {
    username: '',
    
};


//componentDidMount() {
  

  // Notifications.addListener(this._handleNotification);
  
  //Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);
// }

  // _handleNotification = notification => {
  //   Vibration.vibrate();
  //   console.log(notification);
  //   console.log('hello')
  //   this.setState({ notification: notification });
  //   };



  // _handleNotification = notification => {
  //   this.setState({ notification: notification });
  //   };

  // _handleNotificationResponse = response => {
  //   console.log(response);
  //   };

    render() {
      
        return (
            
    <View style={styles.screen}>
  
          <View>
            <Text style={styles.text}>
            Let us help you to seach for...
            </Text>
          </View>
        
          <View style={styles.inputContainer}>
          <TextInput 
          placeholder="Medicine"
          style={styles.input }

          onChangeText={(value) => this.setState({username: value})}
        value={this.state.username}
         // onChangeText={(val)=> setName(val)}
          />
          
          </View>
          <View style={{
            flex:1
            }}>
    
          <Button  title="Submit"  style={styles.button}
          //onPress={props.onAddGoal.bind(this, enteredGoal)}
          onPress={async () => {
            
            await sendPushNotification('ExponentPushToken[sFEgzON7Dh0SchtwjoqfqA]',this.state.username);
            await sendPushNotification('ExponentPushToken[xTaFrZBZlw_deLelF0pWtb]',this.state.username);
            await sendPushNotification('ExponentPushToken[XzEaRCPqWTHmwViQZ9rgX9]',this.state.username);
            
          }
        }
          // 
          />
          </View>
          
         
        </View>
        
        //</ScrollView>

      );
    };
}
/*PushNotification.configure({
    function(token){
        console.log('TOKEN',token);
    },
    function(notification){
        console.log('NOTIFICATION',notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    permissiona:{
        alert:true,
        badge:true,
        sound:true
    },
    popInitialNotification: true,
    requestPermission:true,
});*/
const styles = StyleSheet.create({
    screen:{padding: 100,flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
      height: '100%',
      alignItems: 'stretch'
      },
    inputContainer :{
      //padding: 50,
      marginTop: '20%',
      marginBottom: '-10%',
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
      },
      inputContainer :{
        //padding: 50,
        marginTop: '20%',
        marginBottom: '-10%',
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
        },
      input :{
        height: 40, width: '150%',
        borderBottomColor: 'lightblue',
        borderBottomWidth: 1
      },
      text:{fontSize: 20,
      fontWeight: 'bold',
      color: 'skyblue',
      textAlign: 'center'
    },
    button :{
      backgroundColor: 'lightblue',
     
      //accessibilityLabel:'alignself'
    }});






    // constructor(props){
    //     super(props);
    //     this.state={
    //         isloadingComplete: false,
    //     };
    //     //initialize firebase
    //     if(!firebase.apps.length){
    //         console.log('Firebaseeee!!!!!!!!')
    //         firebase.initializeApp(keys.FirebaseConfig);
    //     }

    // }
    
   
    // _handleNotification = (notification) => {
    //   this.setState.setState({notification: notification});
    // };
