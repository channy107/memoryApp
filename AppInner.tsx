import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Group from './src/pages/Group';
import Add from './src/pages/Add';
import Video from './src/pages/Video';
import Profile from './src/pages/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
function AppInner() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <Icon name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="Group"
        component={Group}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <Icon name="group" size={20} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <Icon name="plus" size={20} />,
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <Icon name="video-camera" size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <Icon name="user-o" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default AppInner;