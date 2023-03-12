import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import CartReview from './Screens/cart/CartReview';


// import SignupLogin from './page/Authentication/SignupLogin';
// import Login from './page/Authentication/Login';
// import CategoryCards from './page/Authentication/Login4';
// import YourCategory from './page/Authentication/Login5';
// import Signup from './page/Authentication/Signup';
// import ProductDetails from './pages/ProductDetails';
// import Splash from './pages/Splash';
// import Profile from './page/Screens/Profile';
// import Splash from './page/Authentication/Splash';


import Dashboard from './components/dashboard/Dashboard'



AppRegistry.registerComponent(appName, () => Dashboard);
