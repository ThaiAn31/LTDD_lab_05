import React, {Component} from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";
import flatListData from "../data/SanPham";

class screen01Item extends Component{
    render() {
        return(
            <View style={{flex:1, backgroundColor:''}}>
                <Text>{this.props.item.name}</Text>
                <Text>{this.props.item.shop}</Text>
            </View>
        );
    }
}



export default class screen01 extends Component{
    render() {
        return(
            <View style={{flex:1, marginTop:22}}>
                <FlatList data={flatListData}
                renderItem={({item,index})=>{
                    return (<screen01Item item={item} index={index}>

                    </screen01Item>);
                }}>


                </FlatList>

            </View>

        );
    }
}
