import { MaterialCommunityIcons, MaterialIcons, AntDesign } from "@expo/vector-icons"
import {View, Text, FlatList, SectionList, ScrollView} from "react-native"
import { Accountdata } from "@/src/data/accountdata";
import  {RenderItem, RenderSection } from "../../component/renderItems"

export default function AccountScreen(){

    return(
        <View style = {{backgroundColor:"#fff", flex:1}} >
            <View style = {{backgroundColor:"#1F1D1C", height:60, padding:10}}>
                <Text style = {{color:"orange"}}>Welcome Denis</Text>
                <Text style = {{color:"#fff"}}>donaldtommy17@gmail.com</Text>
            </View>
            <View style = {{backgroundColor:"#fff", height:40, padding:10, flexDirection:"row", gap:10}}>
                <MaterialIcons name="account-balance-wallet" size={24} color={"darkblue"} style = {{ fontWeight:"bold"}}/>
                <Text style = {{color:"darkblue", flex:1, fontSize:16, top:3}}>Login to see your balance</Text>

            </View>
            <SectionList 

      sections={Accountdata}
      showsVerticalScrollIndicator  = {true}
      stickySectionHeadersEnabled = {false}
      keyExtractor={(item, index) => item.item + index}
      renderItem={({item, section}) => <RenderItem item = {item}  sectionId={section.id}/>}
      renderSectionHeader={({section: {title}}) => <RenderSection title={title} />
      }
       ListFooterComponent={  ()  => 
       
       <View style = {{backgroundColor:"#F2F3F4", alignItems:"center", height:100}}>
       
       <Text style = {{top:20, color:"orange", fontSize:15, fontWeight:"500"}}>Logout</Text>
       </View>
    }
   
    />
        </View>
    )
}