import React from 'react';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomeHeader from "../../component/header"
import CustomSearchBar from "../../component/searchBar"
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


export default function TabLayout() {
  
  return (
    <Tabs
      screenOptions={{
       // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: true,
        tabBarLabelStyle: { fontSize:12, fontWeight:"600"},
        tabBarStyle : {backgroundColor:"#fff", }
      }}>
     
       <Tabs.Screen
        name="home"
        options={{
          headerTitle: () => ( <CustomSearchBar/>),
          tabBarActiveTintColor:"orange",
          tabBarIcon: ({ color, focused }) => <SimpleLineIcons name="home" color={ focused ? "orange" : "#000"} size={25} />,
          headerRight: () => (
            <>
            <Link href="/modal" asChild >
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                
                    name="shoppingcart"
                    size={25}
                    color={"#fff"}
                    style={{ marginRight: 5, opacity: pressed ? 0.5 : 1,  left:-30  }}
                  />
                )}
              </Pressable>
            </Link>
            </>

          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          headerTitle: () => ( <CustomSearchBar/>),
          tabBarActiveTintColor:"orange",
          tabBarIcon: ({ color, focused }) => <AntDesign name="profile" color={ focused ? "orange" : "#000"}  size={25}/>,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name="shoppingcart"
                    size={25}
                    color={"#fff"}
                    style={{ marginRight: 5, opacity: pressed ? 0.5 : 1 , left:-30}}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

<Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarActiveTintColor:"orange",
          
          tabBarIcon: ({ color, focused }) => <MaterialIcons name="feed"   color={ focused ?  "orange" : "#000"}  size={25}/>,
          headerRight: () => (
            <CustomeHeader/>
          ),
        }}
      />

<Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarActiveTintColor: "orange",
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name="account-check-outline" color={ focused ? "orange" : "#000"}  size={25} />,
          headerRight: () => (
              <CustomeHeader/>
             ),
        }}
      />

<Tabs.Screen
        name="help"
        options={{
          title: 'Help',
         tabBarActiveTintColor:"orange",
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name="help-circle-outline" color={ focused ? "orange" : "#000"}  size={25} />,
          headerRight: () => (
           <CustomeHeader/>
          ),
        }}
      />
    </Tabs>
    

    
    
  );
  
}
