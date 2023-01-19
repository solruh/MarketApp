import React from "react";
import { View } from "react-native";
import Home from "./Tabs/Home";
import SignleHome from "./Tabs/SingleHome";
import Signin from "./Welcome/Signin";
import Signup from "./Welcome/Signup";
import Welcome from "./Welcome/Welcome";
import Products from "./Src/Products";
import NewsSource from "./Src/NewsSource";
import NewsFeed from "./Tabs/NewsFeed";
import Iterate from "./Tabs/Iterate";
import Profile from "./Tabs/Profile";
import MyTabs from "./Tabs/NavigationAll";
import Nearby from "./Tabs/Nearby";
import { NavigationContainer } from "@react-navigation/native";
import Carresource from "./Src/Carresource";
import Parttime from "./Src/Parttime";
const App = ()=>{
  return (
    // <NavigationContainer>
        <View> 
        {/* <SignleHome prods={Products}/> */}
        {/* <NewsFeed prodcts={NewsSource}/> */}
        {/* <Iterate /> */}
        {/* <Profile /> */}
        {/* <MyTabs /> */}
        <Nearby cardata={Carresource} prodcts={NewsSource} restaurant={Parttime}/>
      </View> 
    // </NavigationContainer>
    
    // <Welcome />
    // <Signup />
    // <Signin />
    // <Home />
    // <Home />
  )
}
export default App