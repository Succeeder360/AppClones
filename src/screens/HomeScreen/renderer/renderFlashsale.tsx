import { FlashSaleTypes } from "@/src/types/flashsalesTypes";
import {View, Text, Image} from "react-native";
import { ProgressBar } from "react-native-paper";
const RenderFlashSaleItem = ({item}: FlashSaleTypes) => (
    <View style = {{ marginVertical:20, marginHorizontal:20, flex:1 }}>
      <View>
      <Image source={item.img} style = {{height:110, width:100}} />
      <Text style = {{position:"absolute", backgroundColor:"#FFE4E1", left:70, color:"orange",fontWeight:"700", borderRadius:5, }}>{item.percent}</Text>
      </View>
      <View style = {{marginVertical:12, right:"2%"}}>
     <Text style = {{}}>{item.productName}</Text>
     <Text style = {{fontWeight:"bold"}}>{item.price}</Text>
     <Text style = {{top:10, fontSize:10}}>{item.itemLeft}</Text>
    <ProgressBar   progress={item.progress} color="orange"  style = {{top:15, borderRadius:10, height:7}}/>
     </View>
    </View>
)

export default RenderFlashSaleItem;