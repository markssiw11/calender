import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home';
import placeHolder from '../placeHolder';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCog, faSearch} from '@fortawesome/free-solid-svg-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import DemoScreen from '../actionsheet/index';
import AnimatedScreen from '../animated/index';
import ProgressScreen from '../animated/progress';
import UploadScreen from '../upload/index';
import RunSpringScreen from '../animated/runSpring';
import ProgressBar from './progressBar';
import RotationScreen from '../animated/rotation';
import SnapableScreen from '../animated/snapable';
import CarouselScreen from '../snap/carousel';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        cardOverlayEnabled={true}
        options={{
          title: '',
          gestureEnabled: false,
          headerTintColor: '#fff',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="AnimatedOne"
        component={AnimatedScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Demo"
        component={DemoScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RunSpring"
        component={RunSpringScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ProgressBar"
        component={ProgressBar}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Rotation"
        component={RotationScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Snapable"
        component={SnapableScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Carousel"
        component={CarouselScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'mediumseagreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'white',
    borderWidth: 1,
    width: (windowWidth * 2) / 3,
    paddingLeft: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  leftCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    marginLeft: 5,
  },
  ctn: {
    backgroundColor: 'mediumturquoise',
    paddingVertical: 5,
    flex: 1,
    flexDirection: 'row',
    width: windowWidth,
    alignItems: 'center',
  },
});

export default HomeStack;
