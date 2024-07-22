import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"
import {View, Text} from "react-native"




export default function HelpScreen(){
    return(
        <View style = {{backgroundColor:"lightgray", flex:1, }}>
            <View style = {{backgroundColor:"orange", flexDirection:"row", margin:25, borderRadius:5, height:45}}>
                <MaterialCommunityIcons name="message-processing" style = {{margin:10, color:"#fff", fontSize:20}}/>
                <Text style = {{color:"#fff", padding:5, flex:1, left:100, top:4, fontWeight:"800"}}>Start Live Chat</Text>
            </View>
            <View style = {{gap:10}}>
            <Text style = {{fontWeight:"300", color:"gray", left:6}}>ABOUT JUMIA</Text>
            <View style = {{backgroundColor:"#fff",  height:170}}>
             <View style = {{gap:30, padding:15}}>
             <Text style = {{fontWeight:"500"}}>Jumia Services</Text>
             <Text style = {{fontWeight:"500"}}>Privacy Policy</Text>
             <Text style = {{fontWeight:"500"}}>Faq</Text>
             </View>
            </View>
            
            <Text style = {{fontWeight:"300", color:"gray", left:6}}>SETTINGS</Text>
            <View style = {{backgroundColor:"#fff", height:230, gap:40, padding:15}}>
            <Text style = {{fontWeight:"500"}}>Push Notisfications</Text>
            <View style = {{flexDirection:"row", }}>
            <Text style = {{fontWeight:"500", flex:1}}>Country</Text>
            <Text style = {{fontWeight:"500", color:"gray"}}>Nigeria</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Text style = {{fontWeight:"500", flex:1, color:"gray"}}>Language</Text>
            <Text style = {{fontWeight:"500", color:"gray"}}>English</Text>
            </View>
            <Text style = {{color:"gray"}}>App version 13.7.3</Text>
            </View>
            </View>

        </View>
    )
}