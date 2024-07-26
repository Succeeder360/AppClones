import RenderCategories from "@/src/component/renderItems/categoriesItem"
import {View, Text, FlatList, ScrollView, Animated} from "react-native"
import HomeScreenMiddle from "./middle"
import HomeScreenFooter from "./foot"
import HomeScreenTop from "./top"
import FlashSales from "./FlashSales"
import LineSeperator from "@/src/component/lineseperator"
import StillAvailable from "./stillAvailable"
import { useState } from "react"
import Deals from "./deals"
import LimitedStoocks from "./limitedStock"
import AppliancesForLess from "./appliancesforless"


export default function HomeScreen(){
    const [scrollY] = useState(new Animated.Value(0));

    return(
        <ScrollView 
          indicatorStyle={"black"}
        scrollEnabled 
         style = {{flex:1, backgroundColor:"#fff"}}  >
            <View style = {{backgroundColor:"#EDC9AF", justifyContent:"center", alignItems:"center", flex:1, height:40, top:4}}>
            <Text style = {{fontWeight:"600"}}>Call To Order : 07091220934</Text>
            </View>
        <HomeScreenTop/>
        <LineSeperator style={{top:5}}/>
       <HomeScreenMiddle/>
       <LineSeperator style={{}} />
         <FlashSales/>
         <LineSeperator style={{top:4}} />
         <StillAvailable/>
         <LineSeperator style={{top:70}} />
         <Deals/>
         <LimitedStoocks />
         <LineSeperator style={{top:150}} />
         <AppliancesForLess/>
      </ScrollView>
    
    )
}

