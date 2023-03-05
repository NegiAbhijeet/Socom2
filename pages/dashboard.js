import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import Notification from './Notification';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from './colors';
import First from './first';
import Second from './second';
import Fourth from './fourth';
import Third from './third';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" 
               screenOptions={{
                headerShown: false,
                headerTransparent: true
            }}>
                <Drawer.Screen name="Home" component={MyTabs} />
                <Drawer.Screen name="Notifications" component={Notification} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


function MyTabs() {
    const screenOptions = {
        tabBarItemStyle: {
            backgroundColor: 'black',
        }
    };
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: colors.yellow,
            tabBarStyle: {
                backgroundColor: '#141414',
                paddingTop:30,
                height:90,
                paddingBottom:15,
                borderTopRightRadius:20,
                borderTopLeftRadius:20

              }
          }}
          
        >
            <Tab.Screen name="Home" component={First}
             options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }} />
            <Tab.Screen  name="Live Shope" component={Second} 
              options={{
                headerShown: false,
                tabBarLabel: 'Live Shope',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="live-tv" color={color} size={size} />
                ),
              }}/>
            <Tab.Screen name="Categories" component={Third}
             options={{
                headerShown: false,
                tabBarLabel: 'Categories',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="ios-grid" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="Stores" component={Fourth}
             options={{
                headerShown: false,
                tabBarLabel: 'Stores',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="storefront" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="Profile" component={Notification}
             options={{
                headerShown: false,
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-circle" color={color} size={size} />
                ),
              }} />
        </Tab.Navigator>
    );
}
