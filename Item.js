import React, {useState, useEffect} from 'react';
import {Text,View,Image,ImageBackground,TouchableOpacity,TextInput,onPress,} from 'react-native';
import icon from './assets/img';
function ProductItem(props) {
  const {data} = props;
  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <Image source={data.img}></Image>
      <View style={{flexDirection: 'column', padding: 5}}>
        <Text>{data.name}</Text>
        <Text style={{color: 'red', paddingTop: 10}}>{data.shop}</Text>
      </View>
      <View style={{flex: 1}}></View>
      <TouchableOpacity
        style={{
          height: 40,
          margin: 10,
          width: 80,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{alignItems: 'center'}}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ProductItem;