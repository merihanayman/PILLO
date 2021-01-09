import * as Permissions from 'expo-permissions'
import {Notifications} from 'expo';
import * as firebase from 'firebase';


const registerForPushNotificationsAsync = async()=>{
    
    const { status:existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    while (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    // if (finalStatusc !== 'granted') {
    //   alert('Failed to get push token for push notification!');
    //   console.log('Failed to get push token for push notification!')
    //   return;
    // }
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    console.log('Hiii from React!!!');

    //Add tokens to firebase
    let uid = firebase.auth().currentUser.uid;
    console.log('Hiii from firebaaaseee!!!');
    firebase.database().ref("users").child(uid).update({
        expoPushToken: token
    });
    // return fetch(PUSH_ENDPOINT, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         token:{
    //             value:token,
    //         }
    //     })
    // })

};

export { registerForPushNotificationsAsync};