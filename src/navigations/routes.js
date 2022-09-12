import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnterClassScreen from '../screens/enterClass/EnterClassScreen';
import LoginScreen from '../screens/login/LoginScreen';
import ResetPasswordScreen from '../screens/resetPassword/ResetPassword';
import Splash from '../screens/splash/Splash';
import GetStarted from '../screens/getStarted/GetStarted';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';
import {NAVIGATION_ROUTES} from './navigationRoutes';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Feed" component={Feed} /> */}
      {/* <Tab.Screen name="Messages" component={Messages} /> */}
    </Tab.Navigator>
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
        name={NAVIGATION_ROUTES.HOME}
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
