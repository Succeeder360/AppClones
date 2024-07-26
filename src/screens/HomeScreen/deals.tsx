import LineSeperator from '@/src/component/lineseperator';
import { color } from '@rneui/base';
import React from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';

const data = [
  {
    img: require("@/assets/jumia/homeImages/jumiaAsset/pinks.jpg")
  },
  {
    img: require("@/assets/jumia/homeImages/jumiaAsset/blacks.jpg")
  },
  {
    img: require("@/assets/jumia/homeImages/jumiaAsset/mob.jpg")
  },
  {
    img: require("@/assets/jumia/homeImages/jumiaAsset/oranges.jpg")
  }
];

const Deals = () => {
  const renderItem = ({ item } : any) => (
    <View style = {{flex:1, justifyContent:"center", alignItems:"center",  }}>
    <Image source={item.img} style={styles.image} />
    <View style = {{backgroundColor:"#F2F3F4", height:8, width:"100%"}}></View>
    </View>
   
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      style={styles.flatList}
      scrollEnabled={false}
      key={2}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
   flex:1,
    top: 70, 
  },
  image: {
    flex:1,
    height: 170,
    width: 200,
    margin:8,
  }
});

export default Deals;
