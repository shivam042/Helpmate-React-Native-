import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Dimensions} from "react-native";

const height = Dimensions.get('window').height;

class DashBoard extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden />
				<Text style={{fontSize:30}}>
			Choose a Service
			</Text>	
				<View style={styles.row}>
					<TouchableOpacity style={styles.rowItem}
					onPress={() => {
							this.props.navigation.navigate('ListScreen');
						}}
					>
						<Text style={styles.menu}>Electrician</Text>
					</TouchableOpacity>
					<View style={styles.divider} />
					<TouchableOpacity style={styles.rowItem}
					onPress={() => {
							this.props.navigation.navigate('ListScreen');
						}}
					>
						<Text style={styles.menu}>Carpenter</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity style={styles.rowItem}
					onPress={() => {
							this.props.navigation.navigate('ListScreen');
						}}
					>
						<Text style={styles.menu}>Computer Repair</Text>
					</TouchableOpacity>
					<View style={styles.divider} />
					<TouchableOpacity style={styles.rowItem}
					onPress={() => {
							this.props.navigation.navigate('ListScreen');
						}}
					>
						<Text style={styles.menu}>Party Caterer</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity style={styles.rowItem}
					onPress={() => {
							this.props.navigation.navigate('ListScreen');
						}}
					>
						<Text style={styles.menu}>AC Service</Text>
					</TouchableOpacity>
					<View style={styles.divider} />	
					<TouchableOpacity style={styles.rowItem}
					onPress={() => {
							this.props.navigation.navigate('ListScreen');
						}}
					>
						<Text style={styles.menu}>Painter</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1, 
		paddingVertical: 10,
		paddingHorizontal: 20
	},
	row: {
		flexDirection: 'row',
		paddingVertical: 10
	},
	rowItem: {
		flex: 1,
		height: (height-300) / 3,
		backgroundColor: "#00bfff",
		justifyContent: 'center',
		alignItems: 'center'
	},
	divider: {
		width: 20
	},
	menu: {
		color: "white",
		fontSize: 26,
		justifyContent:'center'
		
	}
}
export default DashBoard; 