import { CategoriesData } from "@/src/data/categoriesData";
import {FlatList, Text, View, Image} from "react-native"
import RenderMiddle from "./renderer/renderMiddle";


const HomeScreenMiddle = () => {
    
    return(
        <View style = {{flex:1}}>
        <FlatList 
        data={CategoriesData}  
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        renderItem={ ({item}) => <RenderMiddle item={item}/>}/>
    </View>
    )  
   
}

export default HomeScreenMiddle;