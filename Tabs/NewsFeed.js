import React from "react";
import { Text,View, SafeAreaView, ScrollView, StyleSheet,TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
const NewsFeed =(props)=>{
    const tabs = [{"id": 1,"cat":"WinterFood"},{"id": 2,"cat":"Neighborhood"},{"id": 3,"cat":"Questions"},{"id": 4,"cat":"Restaurants"},{"id": 5,"cat":"Hobby"},{"id": 6,"cat":"Daily"}]
    const doubled = tabs.map((number) => number);
    const listItems = tabs.map((number) =>
    <TouchableOpacity key={number.id}>
        <View key={number.id} style={{marginRight: 12,marginBottom: 10,borderWidth: 1,borderColor: "silver",height: 30,borderRadius: 15}}>
            {<Text style={{textAlign: "center",padding: 5,fontWeight: "bold"}}>{number.cat}</Text>}
        </View>
    </TouchableOpacity>
    
  );
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
                                <Icon name="user-circle" size={26}
                                style={{marginLeft: 24}}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="bell-o" size={26}
                                style={{marginLeft: 24}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{borderBottomWidth: 1,borderBottomColor: "silver",marginTop: 14,marginBottom: 14}}></View>
            <ScrollView>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false} contentContainerStyle ={{flexDirection: "row",marginTop: 8}}>
                        <TouchableOpacity>
                            <View style={{flexDirection: "row",borderWidth: 1,borderColor: "silver",height: 30,width: 60,marginTop: 4,borderRadius: 15,marginLeft: 4}}>
                                <Icon name="bars"
                                style={{marginTop: 8,marginLeft: 8}}
                                /> 
                                <Text style={{padding: 3,fontWeight: "bold"}}>Title</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 4}}>
                            {listItems}
                        </View>
                    </ScrollView>
                    <View style={{marginTop: 3,borderBottomWidth: 1,borderBottomColor: "silver"}}></View>
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
                style={styles.addI}
                >
                <Icon name='plus' size={30} color='white' />
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
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: 'red',
        borderRadius: 100,
        }
})
export default NewsFeed;
//handle the situation if the name of the person posting is too long and 
//the time gets hidden or if the number of likes nad comments is a lot and the like button at the right side 
//gets hidden? so use some sort of line break may sth else smart??