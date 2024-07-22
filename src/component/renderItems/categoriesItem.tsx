import { categoryTypes  } from "@/src/types/categoryTypes";
import {View, Text, Image} from "react-native"



const RenderCategories = ({item} : categoryTypes) => (
    <View style = {{gap:10,  justifyContent:"center", flex:1, alignItems:"center", margin:10}}>
       <View style = {{backgroundColor:"pink", height:90, width:90,   borderRadius:5, justifyContent:"center", alignItems:"center"}}>
        <Image  source={item.img}  style = {{ height:"80%", width:"80%" }} />
        </View>
        <Text style = {{flex:1}}>{item.category}</Text> 
    </View>
)
  

export default RenderCategories;