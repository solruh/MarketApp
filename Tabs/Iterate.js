import React from "react";
import {View,ScrollView,SafeAreaView,Text,Image, TouchableOpacity} from "react-native"
import ImageCropPicker from "react-native-image-crop-picker";
import FabResource from "../Src/FabResource";
/*This is just for practice purpose*/
const Iterate = () => {
    const tabs = ["WinterFood","Neighborhood","Questions","Restaurants","Hobby","Daily","News","Football","movies","Android","Manunited","CristanioRonaldo","Messi","Benzema","Ozil","Brazil","soccer","recentlyadded","notifications"]
    return (
        <SafeAreaView>
            <ScrollView horizontal={true}>
                <View>
                    <View>
                        {
                            tabs.slice(0,9).map((item)=>
                            <View key={item} style={{backgroundColor: "grey",margin: 12, height: 40,borderRadius: 12}}>
                                {<Text style={{color:"white",padding: 12}}>{item.slice(0,2)=="Qu" ?item:"NULL"}</Text>}
                            </View>
                            )
                        }
                    </View>
                    
                    <View>
                        <TouchableOpacity>
                            <Text>AddImage</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Iterate
