
import React, { Component } from 'react';
import H1 from './H1';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
TextInput,
TouchableOpacity


} from 'react-native';


	
class Login extends Component {

	 static navigationOptions = {
    header: false
  }


  state = {
    name: "",
    counter: 1,
    email: "",
    password: ""
  }

  componentDidMount() {  
    
  }

  onPressLogin() {
    this.props.navigation.navigate("DashboardScreen");
  }
	onPressReg() {
    this.props.navigation.navigate("RegistrationScreen");
  }
state={name:"S",
counter:1}
	returntext() {
		
		return (<Text>User Name</Text>);}
	
	
 componentDidMount(){
	 
		  setInterval(()=>{
			  this.setState({name:"Login Page "});
			  this.setState({counter:this.state.counter+1});
		  },1000)
} 

 render() {	
	 
  return (
      <View style={styles.container}>
        
		<Image
		source={require('./help.png')}
		style={{paddingTop:20,height:110,width:400}}
		
		>
		</Image>


	<Text style={{fontSize:32,justifyContent:"center"}}>
			
	
	
	
	<H1 title='Login Page' />		
			 </Text>
			<Text style={{fontSize:18,justifyContent:"center"}}>
			{this.returntext()}
	
			</Text>	
			
			<TextInput
            placeholder="Enter User Id"
			
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.inputText}
            underlineColorAndroid="transparent"
            onChangeText={value => this.setState({ email: value })}
            value={this.state.email}
          />
				
			
			
			<Text style={{fontSize:22}}>
			Password
			</Text>	
			
			 <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.inputText}
            underlineColorAndroid="transparent"
            onChangeText={value => this.setState({ password: value })}
            value={this.state.password}
            
          />
				
		
		<Button 
        title="Sign In"
		onPress={this.onPressLogin.bind(this)}
        styles={{button: styles.alignRight}} /> 
		
	
		<TouchableOpacity 
          activeOpacity={0.5}
          onPress={this.onPressReg.bind(this)}
        >
          <Text style={{fontSize: 24, color: 'red'}}>
            Register
          </Text>
		  <Text style={{fontSize:16,justifyContent:"center"}}>
			Developed By Shivam Tripathi
			</Text>
        </TouchableOpacity>
	 
	 </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
	paddingLeft:40,
	paddingRight:40,
	paddingTop:40,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputText:{
	  
	  width:100,
  }
});

AppRegistry.registerComponent('a', () => a);

export default Login;