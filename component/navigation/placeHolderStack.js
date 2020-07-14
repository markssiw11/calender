import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PlaceHolder from '../placeHolder/index';

const Stack = createStackNavigator();
function PlaceHolderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Animated" component={PlaceHolder} />
    </Stack.Navigator>
  );
}

export default PlaceHolderStack;
