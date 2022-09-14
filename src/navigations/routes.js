import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import EnterClassScreen from '../screens/enterClass/EnterClassScreen';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';
import GetStarted from '../screens/getStarted/GetStarted';
import LoginScreen from '../screens/login/LoginScreen';
import ResetPasswordScreen from '../screens/resetPassword/ResetPassword';
import Splash from '../screens/splash/Splash';
import VitalHistoryScreen from '../screens/VitalHistory/VitalHistoryScreen';
import {NAVIGATION_ROUTES} from './navigationRoutes';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName={NAVIGATION_ROUTES.HOME}>
      <Tab.Screen
        name={NAVIGATION_ROUTES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen name="Messages" component={Messages} /> */}
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <HomeStack.Navigator initialRouteName={NAVIGATION_ROUTES.HOME}>
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.HOME}
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.VITAL_HISTORY}
        component={VitalHistoryScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function Authentication() {
  return (
    <AuthStack.Navigator initialRouteName={NAVIGATION_ROUTES.SPLASH}>
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.SPLASH}
        component={Splash}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.GET_STARTED}
        component={GetStarted}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.FORGET_PASSWORD}
        component={ForgetPassword}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.RESET_PASSWORD}
        component={ResetPasswordScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.ENTER_CLASS}
        component={EnterClassScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={NAVIGATION_ROUTES.TABS}
        component={Tabs}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
};
