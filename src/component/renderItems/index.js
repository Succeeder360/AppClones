import { MaterialIcons, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {View, Text} from "react-native"

const iconComponents = {
    MaterialCommunityIcons,
    AntDesign,
    MaterialIcons,
};


 export const RenderItem = ({item, sectionId}) =>{ 

    const IconComponent = iconComponents[item.iconType];
  
 return(
    <View style = {{  
        padding: 15,
        marginVertical: 5,
        flexDirection:"row" }}>
           {sectionId === "section1" && IconComponent && (
                <IconComponent name={item.iconName} size={21} color="black" style={{ marginRight: 10 }} />
            )}
        <Text>{item.item}</Text> 
        
  </View>
)
}


export const RenderSection = ({title}) => (
    <View style = {{backgroundColor:"#F2F3F4", padding:18}}>
    <Text style = {{fontSize:13, fontWeight:"400", color:"gray", top:5}}> {title}</Text>
    </View>
)
