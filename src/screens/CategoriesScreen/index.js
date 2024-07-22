
import {View, Text, FlatList} from "react-native"
import { CategoriesData } from "@/src/data/categoriesData"
import RenderCategories from "@/src/component/renderItems/categoriesItem"



export default function CategoriesScreen(){
    return(
        <View style = {{backgroundColor:"red", flex:1}}>
        <FlatList
        data={CategoriesData}
         renderItem={ ({item}) => <RenderCategories item={item} />}/>
      </View>
    )
}