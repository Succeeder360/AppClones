import { FlashSaleTypes } from "@/src/types/flashsalesTypes";
import {View, Text, Image} from "react-native";

const RenderFlashSaleItem = ({item}: FlashSaleTypes) => (
    <View style = {{ marginVertical:20, marginHorizontal:20, flex:1 }}>
      <View>
      <Image source={item.img} style = {{height:110, width:100}} />
      <Text style = {{position:"absolute", backgroundColor:"#FFE4E1", left:70, color:"orange",fontWeight:"700", borderRadius:5, }}>{item.percent}</Text>
      </View>
      <View style = {{marginVertical:12, right:"2%"}}>
     <Text style = {{}}>{item.productName}</Text>
     <Text style = {{fontWeight:"bold"}}>{item.price}</Text>
     <Text style = {{}}>{item.itemLeft}</Text>
     <Text style = {{color:"orange"}}>{item.progress}</Text>
     </View>
    </View>
)

export default RenderFlashSaleItem;