import { TopCategoryTypes } from "@/src/types/topCategory";
import {View, Text, Image} from "react-native"



const RenderTop = ({item} : TopCategoryTypes ) => (
    
       <View style = {{}}>
        <Image  source={item.img}  style = {{ height:150, width:300, margin:7, borderRadius:6 }}  />
        </View> 
   
)
  

export default RenderTop;