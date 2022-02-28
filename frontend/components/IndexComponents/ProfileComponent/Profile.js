import {View,Text, ScrollView,Alert,TouchableOpacity,SafeAreaView,StyleSheet,Image,ImageBackground} from 'react-native'
import StarRating from 'react-native-star-rating';
import { TextArea } from 'native-base';
import React, {useState} from 'react';
import { createReview } from '../../../api/users';

export default function Profile({ route, navigation }) {

    const { userId } = route;

    const [starCount,setstarCount] = useState(4);
    const [totalJobs, setTotalJobs] = useState(102);
    const [review, setReview] = useState("");
    
    const onStarRatingPress=(rating)=>
    {
          setstarCount(rating)
    }

    const submitReview = () => {
        const reviewDetails = {
            forUser: userId,
            rating: starCount,
            review,
        }
        createReview(reviewDetails)
            .then(response => {
                const [result, error] = response;
                if (error) {
                    console.log(error);
                    return;
                }
                console.log("DONE");
            })
    }

    const logout = async () => {
        alert("Log out Successfully")
        // AsyncStorage.removeItem("user");
        // await SecureStore.deleteItemAsync("token");
        // authContext.logoutUser();
    };


  return (
      <SafeAreaView style={Styles.container}>
          <Text style={Styles.header}>Profile</Text>
          <View style={Styles.profileContainer}>
              <ImageBackground
                  source={require("../../../assets/Home1.png")}
                  style={{ width: "100%", height: "100%" }}
              >
                  <Image
                      source={require("../../../assets/user-1.png")}
                      style={Styles.icons}
                  ></Image>
                  <Text style={Styles.driverName}>Ana</Text>
                  <Text style={Styles.profileText}>Rating (154)</Text>
                  <View style={Styles.starRating}>
                      <StarRating
                          disabled={false}
                          maxStars={5}
                          starSize={33}
                          rating={starCount}
                      />
                  </View>
                  <Text style={Styles.profileText}>Jobs : {totalJobs}</Text>
              </ImageBackground>
          </View>
          <Text style={Styles.ReviewHeader}>They are saying...</Text>
          <View>
              <View style={Styles.starRating}>
                  <StarRating
                      disabled={false}
                      maxStars={5}
                      starSize={33}
                      rating={starCount}
                      selectedStar={(rating) => onStarRatingPress(rating)}
                  />
              </View>
              <View>
                  <TextArea
                      h={20}
                      placeholder="Text Area Placeholder"
                      w="75%"
                      maxW="300"
                      onChangeText={setReview}
                  ></TextArea>
              </View>
                <View>
                    <Button onPress={submitReview}>Add Review</Button>
                </View>
          </View>
          <ScrollView style={Styles.scrollView}>
              <View style={Styles.parentContainer}>
                  <View style={Styles.childContainer}>
                      <Image
                          style={Styles.reviewIcon}
                          source={require("../../../assets/user-5.png")}
                      ></Image>
                      <Text> Excellent , safe and professional driver... </Text>
                  </View>
                  <View style={Styles.childContainer}>
                      <Image
                          style={Styles.reviewIcon}
                          source={require("../../../assets/user-5.png")}
                      ></Image>
                      <Text> Excellent , safe and professional driver... </Text>
                  </View>
                  <View style={Styles.childContainer}>
                      <Image
                          style={Styles.reviewIcon}
                          source={require("../../../assets/user-5.png")}
                      ></Image>
                      <Text> Excellent , safe and professional driver... </Text>
                  </View>
                  <View style={Styles.childContainer}>
                      <Image
                          style={Styles.reviewIcon}
                          source={require("../../../assets/user-5.png")}
                      ></Image>
                      <Text> Excellent , safe and professional driver... </Text>
                  </View>
                  <View style={Styles.childContainer}>
                      <Image
                          style={Styles.reviewIcon}
                          source={require("../../../assets/user-5.png")}
                      ></Image>
                      <Text> Excellent , safe and professional driver... </Text>
                  </View>
              </View>
          </ScrollView>
          <TouchableOpacity onPress={logout} style={Styles.logout}>
              <Text style={Styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
      </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
    header:{
        fontSize:30,
        padding:10,
        alignSelf : "center",
    },
    ReviewHeader:{
        fontSize:22,  
        fontWeight:'500',  
        margin : '5%',
        marginTop : '8%',
    },
    container:{
        flex: 1,
        width : "100%",
    },
    parentContainer:{
       // borderWidth : 0.5,

    },
    childContainer:{
        padding:10,
        marginLeft : "5%",
        marginRight : "5%",
        borderRadius : 20,
        borderWidth : 0.2,
        justifyContent: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    logout:{
        borderWidth : 4,
        marginRight:40,
        marginLeft:40,
        marginTop:80,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:50,
        borderWidth: 2,
        borderColor: '#ff0000',
    },
    logoutText:{
        textAlign : "center",
        color : '#ff0000',
    },
    driverName:{
        alignSelf:'center',
        fontWeight: '900',
        fontSize: 28,
        marginTop : '2%'
    },
    
    profileText:{
        alignSelf:'center',
        fontWeight: '800',
        marginTop : '2%'
    },

    starRating:{
        marginLeft : '20%',
        marginRight : '20%',
        marginTop : '2%',
        // backgroundColor: '#ffd700',
    },

    icons: {
        width: 100,
        height: 100,
        opacity:1,
        borderRadius: 400 / 2 ,
        borderWidth: 1,
        marginTop: "5%",
        alignSelf : "center", 
        resizeMode: 'stretch',
    },
    reviewIcon:{
        borderRadius: 400/2,
        width :50,
        height:50,
    },

    profileContainer:{
        borderWidth : 1,
        //backgroundColor: '#afb3ba',
        height : '38%',
    }
})
