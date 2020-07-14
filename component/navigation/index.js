import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CalenderStack from './calenderStack';
import PlaceHolderStack from './placeHolderStack';
import HomeStack from './homeStack';
import QrCode from '../qrCode';
import Home from '../home/index';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faHome,
  faCircle,
  faBarcode,
} from '@fortawesome/free-solid-svg-icons';
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = faHome;
                break;
              case 'Calender':
                iconName = faCalendar;
                break;
              case 'Animated':
                iconName = faCircle;
                break;
              case 'QrCode':
                iconName = faBarcode;
                break;
              default:
                break;
            }
            // You can return any component that you like here!
            return <FontAwesomeIcon icon={iconName} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Calender" component={CalenderStack} />
        <Tab.Screen name="Animated" component={PlaceHolderStack} />
        <Tab.Screen name="QrCode" component={QrCode} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
