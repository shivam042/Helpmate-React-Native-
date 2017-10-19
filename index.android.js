import Dashboard from './app/Dashboard';
import Login from './app/Login';
import {AppRegistry} from 'react-native';
import {StackNavigator} from "react-navigation";
import List from './app/List';
import Profile from './app/Profile';
import Registration from './app/Registration';
const Router=StackNavigator({
	LoginScreen:{screen: Login},
	DashboardScreen:{screen: Dashboard},
	ListScreen: {screen: List},
	ProfileScreen: {screen: Profile},
	RegistrationScreen:{screen: Registration},
});


AppRegistry.registerComponent("a", () => Router);
