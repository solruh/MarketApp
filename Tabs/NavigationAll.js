import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import SignleHome from "./SingleHome";
import NewsFeed from "./NewsFeed";
import Profile from "./Profile";
import Products from "../Src/Products";
import NewsSource from "../Src/NewsSource";
const MyTabs = ()=>{
    const Tab = createBottomTabNavigator();
    return (
        
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon: ({focused,size,colour})=>{
                let iconName;
                if(route.name ==="Home"){
                    iconName=focused? "home":"home-outline";
                }
                else if (route.name ==="Mylocal"){
                    iconName=focused?"ios-duplicate-sharp":"ios-duplicate-outline";
                }
                else{
                    iconName=focused?"person-sharp":"person-outline"
                }
                return <Icon name ={iconName} size={30} />
            },
            headerShown: false
        })}
        
        >
            <Tab.Screen name="Home" 
            children={(item)=><SignleHome prods={Products}/>} />
            <Tab.Screen name ="Mylocal" 
            children={(item)=><NewsFeed prodcts={NewsSource}/>} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
export default MyTabs;