import React from "react";
import { View,Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";
const Profile = ()=>{
    return (
        <SafeAreaView>
            <View>
            <TouchableOpacity>
            <Icon size={18} name="gear" style={{marginLeft: 370,marginTop: 12}}/>
            </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View>
                    <TouchableOpacity>
                        <View  style={{flexDirection: "row",marginTop: 12,justifyContent: "space-between"}}>
                            <View style={{flexDirection: "row",marginLeft: 4,marginBottom: 12}}>
                                <Icon style={styles.ics} size={28} name="user-circle-o"/>
                                <Text style={{fontSize: 20}}>name</Text>
                            </View>
                            <Text style={{backgroundColor: "silver",borderRadius: 6}}>ViewProfile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={{borderWidth: 1,height: 40,margin: 12,height: 100,borderRadius: 12,borderColor: "silver"}}>
                        <View style={{flexDirection: "row",marginTop: 14,marginLeft: 12}}>
                            <Text>Try our app</Text>
                            <Icon style={{marginTop: 6,marginLeft: 250}} name="angle-right"/>
                        </View>
                        <View style={{flexDirection: "row",marginTop: 14,marginLeft: 12}}>
                            <View style={{flexDirection: "row",backgroundColor: "silver",width: 120,height: 30,borderRadius: 4}}>
                                <Icon style={{marginLeft: 18,marginTop: 4,marginRight: 5}} name="plus"/>
                                <Text>Charge</Text>
                            </View>
                            <View style={{flexDirection: "row",marginLeft: 87,backgroundColor: "silver",width: 120,height: 30,borderRadius: 4}}>
                                <Icon style={{marginLeft: 18,marginTop: 4,marginRight: 5}}name="krw"/>
                                <Text>sendFunds</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={{marginLeft: 6,marginTop: 12,fontWeight: "bold",fontSize:18}}>Buying and Selling</Text>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="calendar"/>
                            <Text style={styles.txt}>Listings</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics}name="search"/>
                            <Text style={styles.txt}>Purchases</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="heart-o"/>
                            <Text style={styles.txt}>Favourites</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="file-o"/>
                            <Text style={styles.txt}>App savings</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomWidth: 1,borderBottomColor: "silver",marginTop: 12,marginBottom: 12}}></View>
                    <Text style={{marginLeft: 6,fontWeight: "bold",fontSize:18}}>My Local</Text>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="pencil-square-o"/>
                            <Text style={styles.txt}>My Local posts and comments</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomWidth: 1,borderBottomColor: "silver",marginTop: 12,marginBottom: 12}}></View>
                    <Text style={{marginLeft: 6,fontWeight: "bold",fontSize:18}}>Bussiness</Text>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="building-o"/>
                            <Text style={styles.txt}>Manage Business Profile</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="bell-o"/>
                            <Text style={styles.txt}>Advertising</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="suitcase"/>
                            <Text>Local Business ads</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomWidth: 1,borderBottomColor: "silver",marginTop: 12,marginBottom: 12}}></View>
                    <Text style={{marginLeft: 6,fontWeight: "bold",fontSize:18}}>Support</Text>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="gear"/>
                            <Text style={styles.txt}>Neighborhood Settings</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="first-order"/>
                            <Text style={styles.txt}>Verification</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="fa"/>
                            <Text style={styles.txt}>search alerts</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="database"/>
                            <Text style={styles.txt}>FAQs</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection: "row",margin: 6}}>
                            <Icon style ={styles.ics} name="envelope-open-o"/>
                            <Text style={styles.txt}>Invite Friends</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    txt: {
        fontSize: 16
    },
    ics: {
        marginTop: 4,
        marginRight: 12,
        marginLeft: 5
    }
})
export default Profile