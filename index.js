import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dasboard from './pages/dashboard';
import First from './pages/first';
import Fourth from './pages/fourth';
import Second from './pages/second';

AppRegistry.registerComponent(appName, () => Dasboard);
