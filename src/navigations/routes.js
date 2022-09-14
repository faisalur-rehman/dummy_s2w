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

import TabHomeIcon from '../assets/images/SvgImages/TabHomeIcon';
import HomeFocusedIcon from '../assets/images/SvgImages/HomefocusedIcon';
import Prescription from '../screens/prescription/Prescription';
import PrescriptionIcon from '../assets/images/SvgImages/PrescriptionIcon';
import PrescribedFocusedIcon from '../assets/images/SvgImages/PrescribedFocusedIcon';
import Notification from '../screens/notification/Notification';
import NotificationIcon from '../assets/images/SvgImages/NotifyIcon';
import NotifyFocusedIcon from '../assets/images/SvgImages/NotifyFocusedIcon';
import Profile from '../screens/profile/Profile';
import ProfileIcon from '../assets/images/SvgImages/ProfileIcon';
import ProfileFocusedIcon from '../assets/images/SvgImages/ProfileFocusedIcon';
import {colors} from '../utils/theme';
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 84,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarItemStyle: {
          margin: 5,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveBackgroundColor: colors.primaryButtonColor,

          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({size, color, focused}) =>
            focused ? <HomeFocusedIcon /> : <TabHomeIcon name="Home" />,
        }}
      />
      <Tab.Screen
        name="Prescription"
        component={Prescription}
        options={{
          tabBarActiveBackgroundColor: colors.primaryButtonColor,
          headerShown: false,
          tabBarLabel: '',
          tabBarBadge: 2,
          tabBarIcon: ({size, color, focused}) =>
            focused ? <PrescribedFocusedIcon /> : <PrescriptionIcon />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarActiveBackgroundColor: colors.primaryButtonColor,
          headerShown: false,
          tabBarLabel: '',
          tabBarBadge: 3,
          tabBarIcon: ({focused, size, color}) =>
            focused ? (
              <NotifyFocusedIcon />
            ) : (
              <NotificationIcon name="Notify" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveBackgroundColor: colors.primaryButtonColor,
          headerShown: false,
          tabBarLabel: '',

          tabBarIcon: ({size, color, focused}) =>
            focused ? <ProfileFocusedIcon /> : <ProfileIcon name="Profile" />,
        }}
      />
    </Tab.Navigator>

    // <Tab.Navigator initialRouteName={NAVIGATION_ROUTES.HOME}>
    //   <Tab.Screen name={NAVIGATION_ROUTES.HOME} component={DashboardScreen} />
    //   {/* <Tab.Screen name="Messages" component={Messages} /> */}
    // </Tab.Navigator>
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
