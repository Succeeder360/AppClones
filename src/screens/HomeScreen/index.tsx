import RenderCategories from "@/src/component/renderItems/categoriesItem"
import {View, Text, FlatList, ScrollView} from "react-native"
import HomeScreenMiddle from "./middle"
import HomeScreenFooter from "./foot"
import { SafeAreaView } from "react-native"
import HomeScreenTop from "./top"
import FlashSales from "./FlashSales"




export default function HomeScreen(){

    return(
       
        <ScrollView  scrollEnabled  showsVerticalScrollIndicator = {true} style = {{flex:1, backgroundColor:"#fff"}}  >
            <View style = {{backgroundColor:"#EDC9AF", justifyContent:"center", alignItems:"center", flex:1, height:40, top:4}}>
            <Text style = {{fontWeight:"600"}}>Call To Order : 07091220934</Text>
            </View>
        <HomeScreenTop/>
       <HomeScreenMiddle/>
         <FlashSales/>
      </ScrollView>
   
       
    )
}

