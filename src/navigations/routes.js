import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScaledSheet} from 'react-native-size-matters';

import HomeFocusedIcon from '../assets/images/SvgImages/HomefocusedIcon';
import NotifyFocusedIcon from '../assets/images/SvgImages/NotifyFocusedIcon';
import NotificationIcon from '../assets/images/SvgImages/NotifyIcon';
import PrescribedFocusedIcon from '../assets/images/SvgImages/PrescribedFocusedIcon';
import PrescriptionIcon from '../assets/images/SvgImages/PrescriptionIcon';
import ProfileFocusedIcon from '../assets/images/SvgImages/ProfileFocusedIcon';
import ProfileIcon from '../assets/images/SvgImages/ProfileIcon';
import TabHomeIcon from '../assets/images/SvgImages/TabHomeIcon';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import EnterClassScreen from '../screens/enterClass/EnterClassScreen';
import ForgetPassword from '../screens/forgetPassword/ForgetPassword';
import GetStarted from '../screens/getStarted/GetStarted';
import LoginScreen from '../screens/login/LoginScreen';
import Notification from '../screens/notification/Notification';
import Prescription from '../screens/prescription/Prescription';
import Profile from '../screens/profile/Profile';
import ResetPasswordScreen from '../screens/resetPassword/ResetPassword';
import Splash from '../screens/splash/Splash';
import VitalHistoryScreen from '../screens/VitalHistory/VitalHistoryScreen';
import {colors} from '../utils/theme';
import {NAVIGATION_ROUTES} from './navigationRoutes';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconStyle}>
                <HomeFocusedIcon />
              </View>
            ) : (
              <TabHomeIcon />
            ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.PRESCRIPTION}
        component={Prescription}
        options={{
          headerShown: false,
          tabBarBadge: 2,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconStyle}>
                <PrescribedFocusedIcon />
              </View>
            ) : (
              <PrescriptionIcon />
            ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.NOTIFICATION}
        component={Notification}
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconStyle}>
                <NotifyFocusedIcon />
              </View>
            ) : (
              <NotificationIcon />
            ),
        }}
      />
      <Tab.Screen
        name={NAVIGATION_ROUTES.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.iconStyle}>
                <ProfileFocusedIcon />
              </View>
            ) : (
              <ProfileIcon />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function Home() {
  return (
    <HomeStack.Navigator initialRouteName={NAVIGATION_ROUTES.TABS}>
      <HomeStack.Screen
        name={NAVIGATION_ROUTES.TABS}
        component={Tabs}
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
        name={NAVIGATION_ROUTES.HOME_STACK}
        component={Home}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export const Routes = () => {
  return (
    <NavigationContainer>
      <Authentication/>
    </NavigationContainer>
  );
};

const styles = ScaledSheet.create({
  iconStyle: {
    backgroundColor: colors.primaryButtonColor,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
});
