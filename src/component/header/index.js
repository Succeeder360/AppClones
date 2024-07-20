import {View, Text} from "react-native"
import { AntDesign } from "@expo/vector-icons";

const CustomeHeader = () => {
    return(
        <View style = {{flexDirection:"row", gap:20,  left:-23}}>
             <AntDesign name="search1" color={"#ffff"} size={23}/>
            <AntDesign name="shoppingcart" color={"#ffff"} size={23} style = {{}}/>  
        </View>
    )


}
export default CustomeHeader;