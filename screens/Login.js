import React,{Component} from 'react';
import { StyleSheet, Text, View, Button,
  TextInput, Animated, Image, ScrollView, FlatList , TouchableOpacity, Modal, ImageBackground} from 'react-native';
 // import * as firebase from 'firebase';
 // import APIkeys from '../components/APIKeys';
import firebase from '../components/firebase';
//import {registerForPushNotificationsAsync} from '../screens/pharmacy';
//import { Container, Content, Header, Form, Input, Item, Label } from 'native-base'






/*class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(1),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

*/



export default class FormOne extends React.Component{
  

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }
  ComponentDidMount(){
    console.log('Hiii from React!!!');
      //registerForPushNotificationsAsync();
  
  }
  nav1() {
    this.props.navigation.navigate('choose');
  }
  nav2() {
    this.props.navigation.navigate('signup');
  }


  loginuser = (email, password) => {
    try {
      //firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) { console.log(user) })
     
        //AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        this.props.navigation.navigate('choose');
        alert('Logged In.');

    } catch (error) {
      console.log(error.toString())
      alert('Login Failed. Please try again');

    }
  }
  


  render() {

    return (

  
   <View style={styles.screen}>

 {/*<View style={styles.container}>
   <ImageLoader
      style={styles.image}
      source={require('../pic/pic2.jpg')}
    />
    </View> */}

<ImageBackground 
            source={require('../pic/pic3.jpg')} 
            style={{resizeMode:'stretch',flex:0.5,marginTop:'10%'}}
           
            >
                 </ImageBackground>

      <View style={styles.inputContainer}>
      
      {/*<TextInput 
      placeholder="Phone number"
      style={styles.input}
      /> */}
      <TextInput 
      placeholder="Email"
      placeholderTextColor='white'
      autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}

      style={styles.input}
      />
      <TextInput 
      placeholder="Password"
      placeholderTextColor='white'
      style={styles.input}
      secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
      />


      </View>
      <View style={{
        flex:1

      }}>

      <Button  style={styles.button}
      rounded
      title="Log In"
      color='white'
      onPress={() => this.loginuser(this.state.email, this.state.password)
        //this.nav1.bind(this)
      }
      />

<Button 

    title= " Don't have an account? Sign up."
    color='white'
            onPress={this.nav2.bind(this)}
         


          />
      </View>
    </View>

    
    );
  }
}

  
    
const styles = StyleSheet.create({
  screen:{
    //padding: 10,
   // flex:1,
    marginTop: '1%',
    flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
    alignItems: 'stretch',
    backgroundColor:'#0265a8'
      },
  input :{
  //  flex:2,
  //padding:30,
  //marginTop:'-30%',
    height: 40, width: '80%',
    borderBottomColor: 'white',
    borderBottomWidth:1.5,
    
  },

  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    
  },
  image: {
    width: 800,
    height: 1500,
    //borderRadius: 10,
    //backgroundColor: 'black',
  },
  inputContainer :{
    //padding: 10,
    marginTop: '-20%',
    marginBottom: '2%',
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    },

    button: {
      flex:1,
      position: 'absolute',
      //backgroundColor: 'rgba(255,255,255 ,0.1)',
      backgroundColor:'white',
    color:'lightblue'}
  
});
  
