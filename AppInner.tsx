import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Add from './src/screens/Add';
import Video from './src/screens/Video';
import Profile from './src/screens/Profile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAdd,
  faHouse,
  faSearch,
  faUser,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

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
          tabBarIcon: ({}) => <FontAwesomeIcon icon={faHouse} size={20} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <FontAwesomeIcon icon={faSearch} size={20} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <FontAwesomeIcon icon={faAdd} size={20} />,
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <FontAwesomeIcon icon={faVideo} size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({}) => <FontAwesomeIcon icon={faUser} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default AppInner;
