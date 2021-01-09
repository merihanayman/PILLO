import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StackNavigator,TabNavigator } from 'react-navigation';

import Login from './screens/Login';
import Start from './screens/Start';
import Search from './screens/Search';
import Signup from './screens/Signup';
import Choose from './screens/choose';
import Pharmacysearch from './screens/Pharmacysearch';


const RootStack = createStackNavigator({
    //const AppNavigator = StackNavigator({

    start: {screen: Start,navigationOptions:{
      title: 'Home Page'
    }},
    login: {screen: Login,navigationOptions:{
      title: 'Login'
    }},
    signup: {screen: Signup,navigationOptions:{
        title: 'Signup'
      }},
    search: {screen: Search,navigationOptions:{
        title: 'Search'
      }},
    choose:{screen:Choose,navigationOptions:{
      title:'Choose'
    }},
    Pharmacysearch:{screen:Pharmacysearch,navigationOptions:{
      title:'Pharmacysearch'
    }}
  });
  
  const AppNavigator = createAppContainer(RootStack);

  
  export default AppNavigator;