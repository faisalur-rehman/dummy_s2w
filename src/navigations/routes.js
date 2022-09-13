import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EnterClassScreen from '../screens/enterClass/EnterClassScreen';
import LoginScreen from '../screens/login/LoginScreen';
import ResetPasswordScreen from '../screens/resetPassword/ResetPassword';
import {NAVIGATION_ROUTES} from './navigationRoutes';
import DashboardScreen from '../screens/dashboard/DashboardScreen';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName={NAVIGATION_ROUTES.HOME}>
      <Tab.Screen name={NAVIGATION_ROUTES.HOME} component={DashboardScreen} />
      {/* <Tab.Screen name="Messages" component={Messages} /> */}
    </Tab.Navigator>
  );
}
function Authentication() {
  return (
    <AuthStack.Navigator initialRouteName={NAVIGATION_ROUTES.LOGIN}>
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
