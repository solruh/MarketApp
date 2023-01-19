import React from "react";
import { View,Text,Image, Button,StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Fontawesome from "react-native-vector-icons/FontAwesome"
// import Products from "../Src/Products";
const SignleHome = (props) =>{
    return (
        <SafeAreaView>
            <View style={{flexDirection: "row",marginTop: 8}}>
                <TouchableOpacity>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{fontWeight: "bold",fontSize: 24}}>
                            Address
                        </Text>
                        <Fontawesome style={{marginTop: 6,marginLeft: 4}} name="angle-down" size={24}/>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection: "row",marginLeft: 120}}>
                    <TouchableOpacity>
                        <Fontawesome name="search" size={26}
                        style={{marginLeft: 20}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Fontawesome name="bars" size={26}
                        style={{marginLeft: 24}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Fontawesome name="bell-o" size={26}
                        style={{marginLeft: 24}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderBottomWidth: 1,borderBottomColor: "silver",marginTop: 14,marginBottom: 14}}></View>

            <ScrollView>
                <View>
                    {props.prods.map((item)=>( //just using props.map will fail
                        <TouchableOpacity key={item.id}>
                            <View style={styles.top} key={item.id}>
                                <View >
                                    <Image style = {{width: 150,height: 150,marginRight: 8,marginBottom: 5}} source={{uri: item.productimage}}/>
                                </View>
                                <View>
                                    <View style = {styles.prdct}>
                                        <Text>
                                            {item.productname}
                                        </Text>
                                       {item.producttype=="ad" && (
                                        <TouchableOpacity>
                                            <Icon name="ellipsis-horizontal" size={30} color="#900" />
                                       </TouchableOpacity>
                                       )}
                                    </View>
                                    <View style={{flexDirection: "row"}}>
                                        <Text>{item.productaddress} </Text> 
                                        {item.producttype=="ad" && (<Text style={{marginLeft: 5}}>.{item.producttype}</Text>)}
                                    </View>
                                    <Text>
                                        {item.productprice}
                                    </Text>
                                    <View style={styles.iconsf}>
                                        {item.comment>0 && (<Icon name="chatbubbles-outline" size={30} color="#900" />) }
                                        {item.comment>0 && (<Text style={{marginTop:6}}>{item.comment}</Text>)}
                                        {item.like>0 && (<Icon name="heart-outline" size={30} color="#900" />)}
                                        {item.like>0 && (<Text style={{marginTop:6}}>{item.like}</Text>)}
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        ))}
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.topci}
                >
                <Icon name='add' size={30} color='white' />
                {/* <Text>hello WORLD</Text> */}
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginLeft: 40,
        backgroundColor: "red"
    },
    top: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginTop: 12
    },
    prdct: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    iconsf : {
        flexDirection: "row",
        marginLeft: 150,
        marginTop: 40
    },
    topci: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 160,
        right: 10,
        height: 70,
        backgroundColor: 'red',
        borderRadius: 100,
        }
})
export default SignleHome;