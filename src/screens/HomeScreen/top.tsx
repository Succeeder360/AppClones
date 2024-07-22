import RenderCategories from "@/src/component/renderItems/categoriesItem";
import { CategoriesData, TopCategory } from "@/src/data/categoriesData";
import { categoryTypes } from "@/src/types/categoryTypes";
import {Text, View, Image} from "react-native"
import { FlatList } from "react-native"
import RenderTop from "./renderer/renderTop";


const HomeScreenTop = () => {
    
    return(
        <View style = {{backgroundColor:"#fff", flex:1, top:10}}>
        <FlatList
         data={TopCategory}
         renderItem={({item}) => <RenderTop item={item}/>}
         horizontal 
         showsHorizontalScrollIndicator = {false}
        />
    </View>
    )
  
    
   
}

export default HomeScreenTop;