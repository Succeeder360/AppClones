import { AppliancesForLessTypes } from "@/src/types/appliancesforlesstypes";
import {View, Text, FlatList, Image} from "react-native"
import { AppliancesForLessData } from "@/src/data/appliancesforlessdata";
import { LinearGradient } from 'expo-linear-gradient';

const AppliancesForLess = () => {
    const renderItem = ({item}:AppliancesForLessTypes) => (
         <View style = {{flex:1, margin:10, justifyContent:"center", alignItems:"center"}}>
            <LinearGradient colors={['lightblue', '#1E90FF',  '#1E90FF']} start={{x:0.1, y:0.6}}  style = {{backgroundColor:"lightblue", width:130, height:180, alignItems:"center", justifyContent:"center",  borderRadius:5}} >
            <Image source={item.img} style = {{height:110, width:103}}/>
            </LinearGradient>
            <Text style = {{top:6}}>{item.productName}</Text>
         </View>
    )
    return(
        <View style = {{top:150}}>
           <View style = {{backgroundColor:"lightblue", height:45, justifyContent:"center", alignItems:"center"}}>
            <Text style = {{fontWeight:"600"}}>APPLIANCES FOR LESS</Text>
           </View>
       <FlatList scrollEnabled = {false}  data={AppliancesForLessData} keyExtractor={(item) => item.id}  renderItem={renderItem} numColumns={3}/>
        </View>
    )
}

export default AppliancesForLess;