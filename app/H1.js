import React,{Component} from 'react';
import {Text} from "react-native";
class H1 extends Component{
	render(){
		return(
		<Text style={{fontSize:28, ...this.props.style}}>
			{this.props.title}
				
		</Text>
		);
		
	}
}
export default H1;