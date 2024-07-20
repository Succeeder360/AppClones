import {View, Text, TextInput} from "react-native"
import { Searchbar } from "react-native-paper";
import { useState} from "react"
import { AntDesign, EvilIcons} from "@expo/vector-icons";
import { SafeAreaView } from "react-native";

const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")

    return(
    <View style = {{flexDirection:"row", backgroundColor:"#fff", width:340, left:-35, borderRadius:10, height:35, bottom:3}}>
      <EvilIcons name="search" color={"#000"}  style = {{top:10, fontSize:24, position:"absolute", left:4}}/>
      <TextInput style = {{  padding:20, left:20, fontSize:18 }} placeholder="Search for Products, Brands...." placeholderTextColor={"gray"}/>
    </View>
    )
}
export default CustomSearchBar;