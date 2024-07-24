import { StillAvailableData } from "@/src/data/stillAvailableData";
import {View,Text} from "react-native"
import { FlatList } from "react-native";
import RenderStillAvailable from "./renderer/renderStillAvailable";

const StillAvailable = () => {
    return(
        <View>
           <View style = {{flexDirection:"row", flex:1, top:14, margin:10}}>
            <Text style = {{flex:1, fontWeight:"600"}}>STILL AVAILABLE !!! </Text>
            <Text style = {{color:"orange",fontWeight:"700", fontSize:12,}}>SEE ALL </Text>
           </View>
           <FlatList style = {{top:40}} key={2}  numColumns={2} scrollEnabled = {false} data={StillAvailableData} renderItem={({item}) => <RenderStillAvailable item={item} />}/>
        </View>
    )
}

export default StillAvailable;