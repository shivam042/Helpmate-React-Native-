import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class Registration extends Component {
  render() {
    return (


      <View style={styles.container}>
        <View style={styles.containerc}>
        <Text style={styles.welcome}>

          REGISTRATION FORM 
        </Text>
        </View>
         <View><Text>       </Text></View>
          <View><Text>       </Text></View>
           <View><Text>       </Text></View>
            <View><Text>       </Text></View>
                     
        <View style={styles.container1}>
          <Text style={styles.textr}>Name</Text>
          <TextInput style={styles.searchInput} placeholder ='Enter Name'/>
        </View>
      
      <View style={styles.container1}>
          <Text style={styles.textr}>Email</Text>
          <TextInput style={styles.searchInput} placeholder ='Enter Email'/>
        </View>

      <View style={styles.container1}>
          <Text style={styles.textr}>Contact</Text>
          <TextInput style={styles.searchInput} placeholder ='Enter Contact number'/>
        </View>

        <View style={styles.container1}>
          <Text style={styles.textr}>Gender</Text>
          <TextInput style={styles.searchInput} placeholder ='Enter M or F'/>
        </View>

          <View style={styles.container1}>
          <Text style={styles.textr}>Address</Text>
          <TextInput style={styles.searchInput} placeholder ='Enter Address'/>
        </View>

        <View style={styles.container1}>
          <Text style={styles.textr}>Profession</Text>
          <TextInput style={styles.searchInput} placeholder ='Enter Profession'/>

        </View>
        <View><Text>       </Text></View>

        
        <View>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
            <Text style = {styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection:'column',
    alignItems:'center',
      },
  containerc: {
   
    alignItems: 'center',
    backgroundColor: 'white',
    
    alignItems:'center',
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop:30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container1:
  {  paddingTop:10,
     flexDirection:'row',
     justifyContent:'center',


  },
   searchInput :
  {
    height:40,
    width : 250,
    fontSize:18,
    borderWidth:1,
    color:'black',

  },
  textr:
  {
    fontSize:18,
    paddingRight:10,
    paddingTop:5,
    flex: 1,
    textAlign:'right'
  },
   button:
  {  height: 30,
    backgroundColor:'#48BBEC',
    marginLeft:10,
    width : 80,
    alignSelf:'stretch',
    justifyContent:'center',

  },
  buttonText:
  {
    fontSize:18,
    alignSelf:'center',
    color:'white'
  },

});

export default Registration; 