import React from 'react';
import { StyleSheet, Text, View, Button,
  TextInput,ImageBackground, Image, ScrollView, FlatList , TouchableOpacity, Modal } from 'react-native';
import firebase from '../components/firebase';


export default class FormOne extends React.Component {
constructor(props){
  super(props)

  this.state=({
    email: '',
    password: ''
  })
}
signupsuser =(email,password)=> {
  try {
    if(this.state.password.length<6)
    {alert("please enter atleast 6 characters")
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email,password)
  } catch (error) {
    console.log(error.toString())
  }

}   
  render(){
  return (
    <View style={styles.screen}>

<ImageBackground 
            source={require('../pic/pic3.jpg')} 
            style={{resizeMode:'stretch',flex:1,marginBottom:'-30%'}}
            >
                 </ImageBackground>

      <View style={styles.inputContainer}>
      <TextInput 
      placeholder="Full Name"
      style={styles.input }
      placeholderTextColor='white'
      />

      <TextInput 
      placeholder="Phone number"
      style={styles.input}
      placeholderTextColor='white'
      />

      <TextInput 
      placeholder="Password"
      style={styles.input}
      placeholderTextColor='white'
      secureTextEntry={true}
           autoCorrect={false}
           autoCapitalize="none" 
          onChangeText={(password)=>this.setState({password})}
      />

      <TextInput 
      placeholder="Address"
      placeholderTextColor='white'
      style={styles.input}
      />

      <TextInput 
      placeholder="Email"
      autoCorrect={false}
           autoCapitalize="none" 
           onChangeText={(email)=>this.setState({email})}
           placeholderTextColor='white'
      style={styles.input}
      />
      
      </View>
      <View style={{
        flex:1

      }}>

      <Button  
      rounded
      primary
      title='submit'
      color='white'
      marginTop='50'
      style={styles.button}
      onPress={()=> this.signupsuser(this.state.email,this.state.password) }
      />
      </View>
      
      </View>
  );
}
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
    padding:10
  },
}); */
const styles = StyleSheet.create({
  screen:{
    backgroundColor:'#0265a8',
    marginTop: '1%',
    //marginLeft:'3%',
    flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
    alignItems: 'stretch'
      },
  input :{
  //  flex:2,
    marginLeft:'8%',
    marginRight:'5%',
    height: 50, width: '90%',
    borderBottomColor: 'lightblue',
    borderBottomWidth:1.5,

  },
  inputContainer :{
    //padding: 50,
  
    marginTop: '25%',
    marginBottom: '-10%',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
    },

    button: {
      margin:'50%',
     position: 'absolute',
      //backgroundColor: 'rgba(255,255,255 ,0.1)',
      color:'white'
      }
  
});
