import { MiddleCategoriesData } from "@/src/data/middleCategoryData";
import {FlatList, Text, View, Image} from "react-native"
import RenderMiddle from "./renderer/renderMiddle";


const HomeScreenMiddle = () => {
    
    return(
        <View style = {{flex:1}}>
        <FlatList  scrollEnabled = {false}
        data={MiddleCategoriesData}  
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        renderItem={ ({item}) => <RenderMiddle item={item}/>}/>
    </View>
    )  
   
}

export default HomeScreenMiddle;