import React, { Component } from 'react';

import {
	AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput

} from 'react-native';

class List extends Component {
	
	static navigationOptions = {
    header: false
  }



  componentDidMount() {  
    
  }

  onPressLogin() {
    this.props.navigation.navigate("ListScreen");
  }


 render() {	
	 
  return (
      <View style={{flex:2,backgroundColor:'white',justifyContent:"center"}}>
        
		
		<Text style={{fontSize:30}}>
			Available Specialists
			</Text>	
			
		<Button 
        title="Mike"
		onPress={() => {
							this.props.navigation.navigate('ProfileScreen');
						}}
        styles={{button: styles.alignRight}} /> 
		<Text>
		  
		</Text>
		<Button 
        title="Harry"
		onPress={() => {
							this.props.navigation.navigate('ProfileScreen');
						}}
        styles={{button: styles.alignRight}} /> 
		<Text>
		  
		</Text>
		<Button 
        title="Riya"
		onPress={() => {
							this.props.navigation.navigate('ProfileScreen');
						}}
        styles={{button: styles.alignRight}} /> 
		<Text>
		  
		</Text>
		<Button 
        title="Tony"
		onPress={() => {
							this.props.navigation.navigate('ProfileScreen');
						}}
        styles={{button: styles.alignRight}} /> 
		<Text>
		  
		</Text>
	<Button 
        title="Michael"
		onPress={() => {
							this.props.navigation.navigate('ProfileScreen');
						}}
        styles={{button: styles.alignRight}} /> 		
	<Text>
		  
		</Text>
<Button 
        title="Ayush"
		onPress={() => {
							this.props.navigation.navigate('ProfileScreen');
						}}
        styles={{button: styles.alignRight}} /> 		
		<Text>
		  
		</Text>
<Button 
        title="Suyash Roy"
		onPress={() => {
							this.props.navigation.navigate('ProfileScreen');
						}}
        styles={{button: styles.alignRight}} /> 

		</View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize:50,
	textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//AppRegistry.registerComponent('a', () => a);
export default List;