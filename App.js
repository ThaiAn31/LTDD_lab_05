import { useState } from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

import img from'./assets/img';
import Items from './Item';

export default function App() {
  const [product, setProduct] = useState([
    {

        name: 'ca nấu lẩu nấu mì mini',
        img: img.ca_nau_lau.png,
        shop: 'Shop Devang',
    },
    {
 
        name: '1 Kg khô gà bơ tỏi',
        img: img.ga_bo_toi.png,
        shop: 'LTD Food',
    },
    {
        name: 'Xe cần cẩu đăng năng',
        img: img.xa_can_cau.png,
        shop: 'Thế giới đồ chơi',
    },
    {
        name: 'đồ chơi dạng mô hình',
        img: img.do_choi_dang_mo_hinh.png,
        shop: 'Thế giới đồ chơi',
    },
    {
        
        name: 'lãnh đạo đơn giản',
        img: img.lanh_dao_gian_don.png,
        shop: 'Minh Long Book',
    },
    {
        
        name: 'Hiểu lòng con trẻ',
        img: img.hieu_long_con_tre.png,
        shop: 'Minh Long Book',
    },
    {
       
        name: 'Donald Trump thiên tài lãnh đạo',
        img: img.trump1.png,
        shop: 'Minh Long Book',
    }
    
    ]);
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
         <View style={{ flex:2,flexDirection:'row',alignItems:'center',justifyContent: 'space-between',backgroundColor:'#1BA9FF',marginTop:12,}}>
           <Image style={{marginRight:10,}}  source={require('./assets/ve.png')} />
           <Text style={{color:'white', fontSize:14, marginRight:10,}}>Chat </Text>
           <Image style={{marginRight:10,}} source={require('./assets/bi_cart-check.png')} />
         </View>
         <View style={{ flex:3,flexDirection:'column',alignItems:'center',justifyContent: 'center',backgroundColor:'#00000030',}}>
           <Text style={{color:'black', fontSize:11,alignItems:'center', padding:20}}>
           Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop! </Text>
         </View>
         <View style={{ flex:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#00000030',}}>
            <FlatList 
             data={product}
             keyExtractor={(item) => item.name}
             renderItem={({item})=> <Items data ={item}/>}
            />
         </View>
          <View style={{ flex:2,flexDirection:'row',alignItems:'center',justifyContent: 'space-between',backgroundColor:'#1BA9FF',}}>
           <Image style={{marginRight:10,}}  source={require('./assets/Group10.png')} />
           <Image style={{marginRight:10,}}  source={require('./assets/Vector.png')} />
           <Image style={{marginRight:10,}} source={require('./assets/VectorStroke.png')} />
         </View>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
