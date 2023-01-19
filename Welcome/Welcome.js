import React from "react";
import {View,Text,StyleSheet,Image, Button, TouchableOpacity} from "react-native"

const Welcome =()=>{
    return (
        <View>
            <View style={styles.top}>
                <View style={styles.icon}>
                    <Image style = {{width: 300,height: 200,borderRadius: 200}} source={require('../Src/market.jpg')}
                    />
                </View>
                <View style={styles.mid}>
                    <Text style={{fontSize: 20,fontWeight: "bold"}}>
                        Welcome to GebeyaDar {"\n"}
                    </Text>
                    <Text style={{marginLeft: 30}}>
                        A cheaper Market place 
                    </Text>
                    <Text>
                    at your comfort and within your reach
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.supbtn}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style = {styles.signin}>
                        <Text style={{marginLeft: 60,marginTop: 10}}>
                            Already Have an account? 
                        </Text>
                        <Text style={{marginLeft: 5,marginTop: 10,color: "red"}}>
                            LogIn
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
styles = StyleSheet.create({

    top : {

    },
    supbtn : {
        backgroundColor: "green",
        marginLeft: 12,
        marginRight: 12,
        height: 50,
        borderRadius: 12
    },
    buttonText: {
        textAlign: "center",
        padding: 12,
        color: "white",
        fontSize: 20
    },
    icon: {
        marginTop: 120,
        marginLeft: 40,
    },
    mid : {
        marginTop: 30,
        marginLeft: 100
    },
    bottom : {
        marginTop: 180
    },
    signin: {
        flexDirection: "row"
    }

})
export default Welcome