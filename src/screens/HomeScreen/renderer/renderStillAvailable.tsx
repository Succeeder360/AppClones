import {View, Text, Image} from "react-native";
import { StillAvailableTypes } from "@/src/types/stilleAvailable";

const RenderStillAvailable = ({item} : StillAvailableTypes ) => (
    <View style = {{flex:1,marginVertical:20, marginHorizontal:39}}>
        <Image source={item.img[1]}  height={150} width={140}/>
        <Text style = {{position:"absolute", backgroundColor:"#FFE4E1", left:110, top:-6, color:"orange",fontWeight:"700",}}>{item.percent}</Text>
        <Text numberOfLines={1} style = {{top:15}}>{item.productName}</Text>
        <Text style = {{fontWeight:"600", top:15}}>{item.price}</Text>
    </View>
)

export default RenderStillAvailable;