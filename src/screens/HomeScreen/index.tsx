import RenderCategories from "@/src/component/renderItems/categoriesItem"
import {View, Text, FlatList, ScrollView} from "react-native"
import HomeScreenMiddle from "./middle"
import HomeScreenFooter from "./foot"
import HomeScreenTop from "./top"
import FlashSales from "./FlashSales"
import LineSeperator from "@/src/component/lineseperator"
import StillAvailable from "./stillAvailable"


export default function HomeScreen(){

    return(
        <ScrollView  scrollIndicatorInsets={{ right:1}}   indicatorStyle="black" scrollEnabled  showsVerticalScrollIndicator = {true} style = {{flex:1, backgroundColor:"#fff"}}  >
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
         <LineSeperator style={{top:90}} />
      </ScrollView>
   
       
    )
}

