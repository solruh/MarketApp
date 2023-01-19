// import React from "react";
// import { View,Text,Image, Button,StyleSheet, ScrollView } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import Products from "../Src/Products";
// const Home = (props) =>{
//     return (
//         <View>
//             <ScrollView style={styles.scrollView}>
//                 <View style = {styles.top}>
//                     {   props.map((id)=(
//                 <View>
//                     <View>
//                         <Image style = {{width: 150,height: 150}} source={{uri: props.}}/>
//                     </View>
//                     <View>
//                         <View style = {styles.prdct}>
//                             <Text>
//                                 Comfortable chair, completely {"\n"} New
//                             </Text>
//                             <Icon name="ellipsis-horizontal" size={30} color="#900" /> 
//                         </View>
//                         <Text>
//                             Daejeon, Kaist
//                         </Text>
//                         <Text>
//                             750,000 Won
//                         </Text>
//                         <View style={styles.iconsf}>
//                             <Icon name="chatbubbles-outline" size={30} color="#900" />
//                             <Icon name="heart-outline" size={30} color="#900" />
//                         </View>
//                     </View>

//                         ))}
//                 </View>)
                    
//                     // </View>
//             </ScrollView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     scrollView: {
//         // backgroundColor: 'pink',
//         // marginHorizontal: 20,
//       },
//     top: {
//         flexDirection: "row",
//         borderBottomWidth: 1,
//         borderBottomColor: "grey",
//         marginTop: 12
//     },
//     prdct: {
//         flexDirection: "row"
//     },
//     iconsf : {
//         flexDirection: "row",
//         marginLeft: 150,
//         marginTop: 40
//     }
// })
// export default Home;