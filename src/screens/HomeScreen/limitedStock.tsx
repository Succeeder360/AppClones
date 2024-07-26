import {View,Text,Image,StyleSheet,FlatList} from "react-native"
import { StillAvailableData } from "@/src/data/stillAvailableData";
import RenderStillAvailable from "./renderer/renderStillAvailable";
import { LimitedStocksData } from "@/src/data/limitedstockData";

const LimitedStoocks = () => {
   
    
    return(
        <View style = {{flex:1}}>
            <View style = {{backgroundColor:"lightblue", top:70, flex:1}}>
                <View style = {{flexDirection:"row", margin:2, height:32, padding:7}}>
                <Text style = {{flex:1, fontWeight:"600"}}>LIMITED STOCK DEALS </Text>
                <Text style = {{fontWeight:"700"}}>SEE ALL</Text>
                </View>
            </View>
            <FlatList  data={LimitedStocksData} style = {{flex:1, top:120}} numColumns={2} scrollEnabled = {false}  keyExtractor={(item) => item.id}  renderItem={({item}) => <RenderStillAvailable item={item}/>
                    }/>
        </View>
    )
}

export default LimitedStoocks;