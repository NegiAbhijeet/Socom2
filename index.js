import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dasboard from './pages/dashboard';
import First from './pages/first';
import Fourth from './pages/fourth';
import Second from './pages/second';
import LoginScreen from './pages/Login';
import Account from './pages/account';
import Setting from './pages/setting';
import HelpCentre from './pages/helpcentre';
import Address from './pages/address';

AppRegistry.registerComponent(appName, () => Dasboard);
