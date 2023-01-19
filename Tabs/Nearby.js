import React, { useState } from "react";
import { Text,View,Image, SafeAreaView, ScrollView, StyleSheet,TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
import Ions from "react-native-vector-icons/Ionicons"
import Material from "react-native-vector-icons/MaterialCommunityIcons"
import Swiper from "react-native-swiper";
const Nearby =(props)=>{
    const tabs = [{"id": 1,"cat":"WinterFood"},{"id": 2,"cat":"Neighborhood"},{"id": 3,"cat":"Questions"},{"id": 4,"cat":"Restaurants"},{"id": 5,"cat":"Hobby"},{"id": 6,"cat":"Daily"}]
    const [post,setPost] = useState("post")
    const [scrolposition,setscrolpostion] = useState(0)
    const handleScrol = (event)=>{
        const {y} = event.nativeEvent.contentOffset;
        setscrolpostion(y)
        if(y>10){
            setPost("+");
        }
        else{
            setPost("post")
        }
    }
    
    return (
        <SafeAreaView>
            <View style={{flexDirection: "row",marginTop: 8}}>
                        <TouchableOpacity>
                            <View style={{flexDirection: "row"}}>
                                <Text style={{fontWeight: "bold",fontSize: 24}}>
                                    Address
                                </Text>
                                <Icon style={{marginTop: 6,marginLeft: 4}} name="angle-down" size={24}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: "row",marginLeft: 120}}>
                            <TouchableOpacity>
                                <Icon name="search" size={26}
                                style={{marginLeft: 20}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ions name="scan" size={26}
                                style={{marginLeft: 24}}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="bell-o" size={26}
                                style={{marginLeft: 24}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{borderBottomWidth: 1,borderBottomColor: "silver",marginTop: 14,marginBottom: 14}}></View>
            <ScrollView onScroll={handleScrol} scrollEventThrottle={16}>
                <View>
                    <View style={{margin: 12}}>
                        <View style={{flexDirection: "row",justifyContent: "space-between"}}>
                            <TouchableOpacity>
                                <Icon style={{marginLeft: 24}} size={40} name="table" />
                                <Text>Mini Services</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 40}}>
                                <Material style={{marginLeft: 24}} size={40} name="tshirt-crew" />
                                <Text>Part Time Job</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 40}}>
                                <Icon style={{marginLeft:6}} size={40} name="car"/>
                                <Text>Used Cars</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 40}}>
                                <Icon style={{marginLeft: 14}} size={40} name="building" />
                                <Text>Apartments</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity>
                                <Ions size={40} name="fast-food-outline" />
                                <Text>Snacks</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 40}}>
                                <Material size={40} name="food-apple-outline" />
                                <Text>Farm Products</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 40}}>
                                <Icon  size={40} name="map-marker"/>
                                <Text>Maps</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 40}}>
                                <Icon size={40} name="book"/>
                                <Text>Tutors/Classes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, height: 12,backgroundColor: "silver",marginBottom: 12}}></View>
                    <Text style={{fontWeight: "bold"}}>Buy used cars without the need for dealers?</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false} contentContainerStyle ={{flexDirection: "row",marginTop: 8}}>
                        <View style={{flexDirection: "row",margin: 4}}>
                            {
                                props.cardata.map((item)=>
                                <TouchableOpacity key={item.id}>
                                    <View style={{marginRight: 8,marginBottom: 5}}>
                                        <Image style = {{width: 150,height: 150,borderRadius: 12}} source={{uri: item.car}}/>
                                        <Text>{item.carType}</Text>
                                        <Text>{item.Cardetials}</Text>
                                        <Text>{item.price}</Text>
                                        <Text style={{backgroundColor: "silver"}}>{item.discount}</Text>
                                    </View>
                                </TouchableOpacity>
                                )
                            }
                        </View>
                    </ScrollView>
                    <View style={{marginTop: 3,borderBottomWidth: 1,borderBottomColor: "silver"}}></View>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",marginTop: 12}}>
                            <Text style={{fontWeight: "bold",marginLeft: 80,textAlign: "center"}}>Go to second hand car market??</Text>
                            <Icon style={{marginLeft: 5,marginTop: 4}} name="angle-right" size={12} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20, height: 12,backgroundColor: "silver",marginBottom: 12}}></View>
                    <Text style={{fontWeight: "bold"}}>Go to mini marts without the need to install!!</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false} contentContainerStyle ={{flexDirection: "row",marginTop: 8}}>
                        <View style={{flexDirection: "row",margin: 4}}>
                            {
                                props.cardata.map((item)=>
                                <TouchableOpacity key={item.id}>
                                    <View style={{marginRight: 8,marginBottom: 5,backgroundColor: "silver",height: 240,width: 300,borderRadius: 12}}>
                                        <View style={{flexDirection: "row"}}>
                                            <View>
                                                <Text>CLEARNERS</Text>
                                                <Text>we dream of doing this and that!!</Text>
                                            </View>
                                            <View>
                                                <Image style={{height: 50,width: 60,marginTop: 4,borderRadius: 12,marginLeft: 26}} source={require('../Src/cu.jpg')}/>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{backgroundColor: "white",borderRadius: 12, height: 120,width: 280,marginLeft: 10,marginRight: 65,marginTop: 50}}>
                                                <Text>WE DID LIKE THE SERVICE AND IT WAS REALLY NICE CUSTOMER SERVICE WOE</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                                )
                            }
                        </View>
                    </ScrollView>
                    <View style={{marginTop: 3,borderBottomWidth: 1,borderBottomColor: "silver"}}></View>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",marginTop: 12}}>
                            <Text style={{fontWeight: "bold",marginLeft: 80,textAlign: "center"}}>Go check the services~</Text>
                            <Icon style={{marginLeft: 5,marginTop: 4}} name="angle-right" size={12} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20, height: 12,backgroundColor: "silver",marginBottom: 12}}></View>

                    <Text style={{fontWeight: "bold"}}>Part Time jobs in our neighborhood!!</Text>
                    <Text>I should put the name of the person who logged in!</Text>
                
                    <Swiper 
                    horizontal={true}
                    dotColor = "grey"
                    activeDotColor="red"
                    style={styles.wrapper}
                    showsPagination = {true}
                    indexChanged={(index) => {index+1}}
                    >
                        <View>
                            {
                                props.restaurant.slice(0,3).map((item)=>
                                <TouchableOpacity key={item.id}>
                                    <View style={{flexDirection: "row",justifyContent: "space-between",marginTop: 22}}>
                                        <View>
                                            <Text>{item.name}</Text>
                                            <Text>{item.details}</Text>
                                            <Text style={{fontWeight: "bold"}}>{item.payment}</Text>
                                        </View>
                                        <View>
                                            <Image style={{marginLeft: 10,width: 100,height: 100,borderRadius: 12}} source={{uri: item.picR}}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                )
                            }
                        </View>
                        <View >
                            {
                                props.restaurant.slice(3,6).map((item)=>
                                <TouchableOpacity key={item.id}>
                                    <View style={{flexDirection: "row",justifyContent: "space-between",marginTop: 22}}>
                                        <View>
                                            <Text>{item.name}</Text>
                                            <Text>{item.details}</Text>
                                            <Text style={{fontWeight: "bold"}}>{item.payment}</Text>
                                        </View>
                                        <View>
                                            <Image style={{marginLeft: 10,width: 100,height: 100,borderRadius: 12}} source={{uri: item.picR}}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                )
                            }
                        </View>
                        <View >
                            {
                                props.restaurant.slice(6,7).map((item)=>
                                <TouchableOpacity key={item.id}>
                                    <View style={{flexDirection: "row",justifyContent: "space-between",marginTop: 22}}>
                                        <View>
                                            <Text>{item.name}</Text>
                                            <Text>{item.details}</Text>
                                            <Text style={{fontWeight: "bold"}}>{item.payment}</Text>
                                        </View>
                                        <View>
                                            <Image style={{marginLeft: 10,width: 100,height: 100,borderRadius: 12}} source={{uri: item.picR}}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                )
                            }
                        </View>
                    </Swiper>

                    
                    <View style={{marginTop: 3,borderBottomWidth: 1,borderBottomColor: "silver"}}></View>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",marginTop: 12}}>
                            <Text style={{fontWeight: "bold",marginLeft: 80,textAlign: "center"}}>Part time jobs you could find easily!!</Text>
                            <Icon style={{marginLeft: 5,marginTop: 4}} name="angle-right" size={12} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20, height: 12,backgroundColor: "silver",marginBottom: 12}}></View>
                    
                    {props.prodcts.map((item)=>(
                        <View style={styles.top} key={item.id}>
                            <TouchableOpacity>
                                <View style={{marginLeft: 2,width: 80,borderRadius: 5,height: 24,backgroundColor:"silver"}}> 
                                    <Text style={{textAlign: "center"}}>{item.postType}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    <View style={{marginTop:8,marginLeft:2}}> 
                                        <Text>{item.post}</Text>
                                    </View>
                                    <View style={{flexDirection: "row",marginTop: 12,justifyContent: "space-between"}}>
                                        <View style={{flexDirection: "row"}}>
                                            <Text>{item.name}</Text>
                                            <Text style={{marginLeft: 2}}>.{item.location}</Text>
                                        </View>
                                        <View>
                                            <Text style={{marginLeft: 72}}>{item.time}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            
                            <View style={{marginTop: 12, marginBottom: 12,borderBottomWidth: 1,borderBottomColor: "silver"}}></View>
                            <View style={{flexDirection: "row"}}> 
                              {item.postType!="Question"?
                                <View style={{flexDirection: "row"}}>
                                    <TouchableOpacity>
                                        <View style={{flexDirection: "row"}}>
                                            <Icon size={22} name="smile-o"/> 
                                            <Text style={{marginTop: 0,marginLeft: 5}}>Like</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={{flexDirection: "row",marginLeft: 16}}>
                                            <Icon size={22} name="comment-o"/>
                                            <Text style={{marginTop: 0,marginLeft: 5}}>{item.comment} {item.comment>1?<Text>comments</Text>:<Text>comment</Text>}</Text>
                                        </View>
                                    </TouchableOpacity>
                            </View>:
                                <View style={{flexDirection: "row"}}>
                                    <TouchableOpacity>
                                        <View style={{flexDirection: "row"}}>
                                            <Icon size={22} name="check-circle-o"/> 
                                            <Text style={{marginTop: 0,marginLeft: 5}}>{item.interested} Interested</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <View style={{flexDirection: "row",marginLeft: 16}}>
                                        <Icon size={22} name="comment-o"/>
                                        <Text style={{marginTop: 0,marginLeft: 5}}>{item.replies} {item.replies>1?<Text>replies</Text>:<Text>reply</Text>}</Text>
                                    </View>
                                    </TouchableOpacity>
                               </View>
                                }
                                {item.postType!="Question" && item.like>0 && (
                                    <TouchableOpacity>
                                    <View style={{flexDirection: "row",marginLeft: 180}}>
                                        <Icon size={22} name="thumbs-o-up"/>
                                        <Text style={{marginTop: 1,marginLeft: 5}}>{item.like}</Text>
                                    </View>
                                    </TouchableOpacity>
                                )}
                                
                            </View>
                            <View style={{ marginTop: 20, height: 12,backgroundColor: "silver",marginBottom: 12}}>

                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <TouchableOpacity
                style={[styles.addI,post=="post"?{width:100}:{width:70}]}
                >
                    {post=="post"?
                    <View style={{flexDirection: "row"}}>
                        <Icon  style={{marginTop: 5,marginRight: 5}} name="plus" size={20} color="white" />
                        <Text style={{color: "white",fontWeight: "bold",fontSize: 20}}>{post}</Text>
                    </View>:
                    <Text style={{color: "white",fontWeight: "bold",fontSize: 40}}>{post}</Text>}
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    top: {
        // "flexDirection": "row"
        // backgroundColor: "white"
        marginTop: 12
    },
    addI : {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        // width: 70,
        position: 'absolute',
        bottom: 150,
        right: 10,
        height: 50,
        backgroundColor: '#F88017',
        borderRadius: 100,
        },
        wrapper : {
            height: 450
        }
})
export default Nearby;
//handle the situation if the name of the person posting is too long and 
//the time gets hidden or if the number of likes nad comments is a lot and the like button at the right side 
//gets hidden? so use some sort of line break may sth else smart??