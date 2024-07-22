import RenderCategories from "@/src/component/renderItems/categoriesItem"
import { CategoriesData } from "@/src/data/categoriesData"
import {View, Text, FlatList, ScrollView} from "react-native"
import HomeScreenMiddle from "./middle"
import HomeScreenFooter from "./foot"
import { SafeAreaView } from "react-native"
import HomeScreenTop from "./top"




export default function HomeScreen(){

    return(
       <SafeAreaView style = {{flex:1, backgroundColor:"#fff"}}>
        <ScrollView>
            <View style = {{backgroundColor:"#EDC9AF", justifyContent:"center", alignItems:"center", flex:1, height:40, top:4}}>
            <Text style = {{fontWeight:"600"}}>Call To Order : 07091220934</Text>
            </View>
        
        <HomeScreenTop/>
       <HomeScreenMiddle/>
       <View style = {{backgroundColor:"red", justifyContent:"center", alignItems:"center", flex:1, height:45, top:4, }}>
            <Text style = {{fontWeight:"600", color:"#fff", right:160}}>FLASH SALE</Text>
            <Text style = {{fontWeight:"300", color:"#fff", right:170}}>Time left</Text>
            </View>
 
      </ScrollView>
       </SafeAreaView> 
       
    )
}