// In App.js in a new project

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import {
  CreateNewRequest,
  CreateNewRequestThree,
  CreateNewRequestTwo,
  ForgetPassword,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RequestOverview,
  SignupScreen,
  SplashScreen,
  TermsandConditions,
  HistoryDetails,
  PrivacyScreen,
  VerificationCode,
  History,
  MapScreen,
  PaymentScreen,
} from './Screens';
import {CleanerDrawer} from 'cleaner_stack';
import colors from 'theme/Colors';
import {HistorySVG, Home, UserSVG} from 'theme/SVG';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
      }}
      drawerStyle={{
        flex: 1,
        backgroundColor: colors.themeColor,
        borderRightWidth: 0,
        borderWidth: 0,
        shadowOpacity: 0,
        elevation: 0,
      }}
      sceneContainerStyle={{backgroundColor: colors.themeColor}}
      drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen name="HomeScreen" component={MyBottomTabs} />
    </Drawer.Navigator>
  );
}

function MyBottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#4F45A8"
      inactiveColor="#919191"
      barStyle={{
        backgroundColor: '#EFEFEF',
        height: 88,
        justifyContent: 'center',
      }}
      labeled={true}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Home color={color} width={16} height={18} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <HistorySVG color={color} width={20} height={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <UserSVG color={color} width={16} height={15.52} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const SCREENS = [
  {name: 'SplashScreen', component: SplashScreen},
  {name: 'HomeScreen', component: MyDrawer},
  {name: 'History', component: MyBottomTabs},
  {name: 'StartScreen', component: HomeScreen},
  {name: 'ProfileScreen', component: MyBottomTabs},
  {name: 'RequestOverview', component: RequestOverview},
  {name: 'ForgetPassword', component: ForgetPassword},
  {name: 'CreateNewRequest', component: CreateNewRequest},
  {name: 'LoginScreen', component: LoginScreen},
  {name: 'SignupScreen', component: SignupScreen},
  {name: 'VerificationCode', component: VerificationCode},
  {name: 'PaymentScreen', component: PaymentScreen},
  {name: 'DrawerStack', component: MyDrawer},
  {name: 'PrivacyScreen', component: PrivacyScreen},
  {name: 'HistoryDetails', component: HistoryDetails},
  {name: 'CleanerStack', component: CleanerDrawer},
  {name: 'TermsandConditions', component: TermsandConditions},
  {name: 'CreateNewRequestThree', component: CreateNewRequestThree},
  {name: 'CreateNewRequestTwo', component: CreateNewRequestTwo},
  {name: 'MapScreen', component: MapScreen},
];

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {SCREENS.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
