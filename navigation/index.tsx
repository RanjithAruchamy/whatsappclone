import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import colors from '../constants/Colors';
import { View  } from '../components/Themed';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle:{
        backgroundColor:colors.light.tint,
        shadowOpacity:0,
        elevation:0
      },
      headerTintColor: colors.light.background,
      headerTitleAlign:'left',
      headerTitleStyle:{
        fontWeight:'bold'
      }
     }}>
      <Stack.Screen name="Root" 
      component={MainTabNavigator}
      options={{
        title:"Connect",
        headerRight: () =>{
          return <View style={style.header}>
            <Octicons name="search" size={22} color="white" />
            <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
          </View>;
        }
      }}
       />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
const style=StyleSheet.create({
  header:{
    flexDirection:'row',
    backgroundColor:colors.light.tint,
    width:60,
    justifyContent:'space-between',
    marginRight:10
  }
})
{

}
