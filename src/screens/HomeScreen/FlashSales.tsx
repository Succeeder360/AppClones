
import {View, Text, FlatList} from "react-native"
import RenderFlashSaleItem from "./renderer/renderFlashsale";
import { FlashSaleData } from "@/src/data/flashsalesData";


const FlashSales = () => {
    return(
        <View>
            <View style = {{flexDirection:"row", backgroundColor:"red"}}>
            <View style = {{ height:60, flex:1}}>
            <Text style = {{color:"#fff", padding:5, fontWeight:"600", fontSize:13}}>FLASH SALE</Text>
            <Text style = {{color:"#fff", padding:5}}>Time left: 19h : 49m : 22s</Text>
            </View>
            <Text style = {{color:"#fff", fontWeight:"600", padding:5, fontSize:13}}>SEE ALL</Text>
            </View>
           <FlatList data={FlashSaleData} renderItem={({item}) => <RenderFlashSaleItem item={item}/>} horizontal/>
        </View>
    )
}

export default FlashSales;