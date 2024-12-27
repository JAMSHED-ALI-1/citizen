import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import an icon set
import Homescreen from '../screen/Deshboard/Homescreen';
import Tasklist from '../screen/Deshboard/Tasklist';
import Profile from '../screen/Deshboard/Profile';
import { COLORS } from '../styles/colors';
import Shere from '../screen/Deshboard/Shere';

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();

  return (
    <View style={{...styles.tabBarContainer,}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const Icon = options.tabBarIcon;

        return (
          <View key={route.key} style={[ styles.tabItem,
            isFocused && styles.activeTabItem,]}>
            <Icon
              color={isFocused ? COLORS.whiteColor:COLORS.whiteColor}
              size={30}
              onPress={onPress}
            />
           {isFocused?
            (<Text
            style={[
              styles.label,
              { color: isFocused ? COLORS.whiteColor:COLORS.whiteColor },
            ]}
            onPress={onPress}
          >
            {label}
          </Text>):null}
          </View>
        );
      })}
    </View>
  );
}

function Bottomtab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        // animation: 'fade',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: (props) => <MaterialIcons name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Tasklist"
        component={Tasklist}
        options={{
          tabBarIcon: (props) => <MaterialIcons name="list" {...props} />,
        }}
      />
      <Tab.Screen
        name="Shere"
        component={Shere}
        options={{
          tabBarIcon: (props) => <MaterialIcons name="telegram" {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => <MaterialIcons name="person" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Bottomtab;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#894fc6',
    borderRadius: 40,
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Adds shadow on iOS
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15, 
    flexDirection:'row'
  },
  activeTabItem: {
    backgroundColor: '#7A2FC9',
    height:'100%', // Set the background color for active tab
    alignItems:'center',
    width:'35%',
    borderRadius:50
  },
  label: {
    fontSize: 16,
    marginTop: 5,
    left:10
  
  },
});
