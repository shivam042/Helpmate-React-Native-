
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        
      />
    );
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Valuable Comments',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile
        </Text>
        <View style={styles.container1}>
          <Image style={styles.image} source={require('./blank-profile.png')} >
          </Image>
          <View style={styles.containerchild}>
            <Text style={ styles.username}>username</Text>
            <Text style={ styles.username}>       </Text>
            <Text style={ styles.username}>charges</Text>
          </View>
          </View>
          
		  <View style={styles.container1}>
            <View style={styles.containerchild1}>
              <Text style={ styles.username}>Expertise: electical</Text>
              <Text style={ styles.username}>        </Text>
              <Text style={ styles.username}>Contact: 9988778867</Text>
            </View>
          </View>
           
        <View style={styles.container2}>
          

            <View style={{backgroundColor: this.state.text, 
             
              height: 40,
              width: 280,  
            }} >
                <UselessTextInput 
                  multiline = {true}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
               />

            
            </View>
            <Text>        </Text>

               <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
                    <Text style = {styles.buttonText}>comment</Text>
                </TouchableHighlight>
          
        </View> 
      <View >
        <TouchableHighlight style={styles.middle} underlayColor='#99d9f4'>
                    <Text style = {styles.buttonText}>Request</Text>
        </TouchableHighlight>
      </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft : 10,
    backgroundColor: '#F5FCFF',
  
  },
  welcome: {
    fontSize: 20,
    textAlign:'center',  
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image :
  { 
    height :100,
    width:100,
    paddingLeft:10,
  },
  username:
  {
    fontSize:14,
    paddingRight: 140,

  },
  container1:
  { margin:10,
    backgroundColor: '#e0ffff',
    paddingTop : 10,
    flexDirection: 'row' ,
    justifyContent: 'space-between',
    paddingBottom:20,
  },
  
  containerchild:
  {
    paddingTop: 10,
    backgroundColor:'#e0ffff',

  },
  containerchild1:
  {
   
    backgroundColor:'#e0ffff',
    justifyContent:'space-between',

  }, 

  containerchild2:
  {
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-between',

  }, 
  container2:
  { margin:10,
    backgroundColor: 'white',
    paddingTop : 10,
    
    justifyContent: 'space-between',
    paddingBottom:20,
  },
  button:
  {
    height: 30,
    backgroundColor:'#48BBEC',
    marginLeft:10,
    width : 80,
    alignSelf:'stretch',
    justifyContent:'center',
  },
  buttonText:
  {
    fontSize:14,
    alignSelf:'center',
    color:'white',
  },
  middle:
  { height: 30,
    backgroundColor:'#48BBEC',
    marginLeft:10,
    width : 80,
    alignSelf:'center',
    justifyContent:'center',
  }
});

export default Profile;