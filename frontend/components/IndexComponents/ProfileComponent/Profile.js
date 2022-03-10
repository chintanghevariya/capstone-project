import { Alert,TouchableOpacity,SafeAreaView,StyleSheet,Image,ImageBackground} from 'react-native'
import StarRating from 'react-native-star-rating';
import { View, Text, ScrollView, Heading, TextArea, Button } from 'native-base';
import React, { useState, useEffect } from "react";
import { createReview, getUserById, getReviewsOfUser } from '../../../api/users';

export default function Profile({ route, navigation }) {

    const [userId, setUserId] = useState("");
    const [user, setUser] = useState({});
    const [reviews, setReviews] = useState([]);
    const [starCount,setstarCount] = useState(4);
    const [totalJobs, setTotalJobs] = useState(102);
    const [review, setReview] = useState("");

    useEffect(() => {
        const userId = route.params === undefined ? "" : route.params.userId;
        setUserId(userId)
        getUserById(userId)
            .then(response => {
                const [result, error] = response;
                if (error) {
                    console.error(error);
                    return;
                }
                setUser(result.data.data.user);
                getUserReviews(result.data.data.user._id);
            })
    }, [])

    const getUserReviews = (id) => {
        getReviewsOfUser(id)
            .then(response => {
                const [result, error] = response;
                if (error) {
                    console.error(error);
                    return;
                }
                setReviews(result.data.data);
            })
    } 
    
    const onStarRatingPress=(rating)=>
    {
          setstarCount(rating)
    }

    const submitReview = () => {
        const reviewDetails = {
            forUser: "622a566c859cdbd91539ff5a",
            rating: starCount,
            comment: review,
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
        // AsyncStorage.removeItemds("useasdfdsfdafr");
        // await SecureStore.deleteItemAsync("token");
        // authContext.logoutUser();
    };


  return (
      <View height={"full"}>
        <View height={"1/3"}>
          <Text style={Styles.header}>Profile</Text>
          <View style={Styles.profileContainer}>
              <ImageBackground
                  source={require("../../../assets/Home1.png")}
                  style={{ width: "100%", height: "100%" }}
              >
                <View flex={1} alignItems={'center'} marginTop={2}>
                    <Heading>{ user.firstName + " " + user.lastName }</Heading>
                    <Text>Ratings (154)</Text>
                    <View style={Styles.starRating}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            starSize={33}
                            rating={starCount}
                        />
                    </View>
                    <Text>Jobs : {totalJobs}</Text>
                </View>
              </ImageBackground>
          </View>
        </View>
          {
            userId !== undefined &&
              (<View height={"1/4"} marginTop={10}>
                  <View style={Styles.starRating}>
                      <StarRating
                          disabled={false}
                          maxStars={5}
                          starSize={33}
                          rating={starCount}
                          selectedStar={(rating) => onStarRatingPress(rating)}
                    / >
                  </View>
                  <View mx={5} mt={3}>
                      <TextArea
                          h={20}
                          placeholder="Text Area Placeholder"
                          w="100%"
                          onChangeText={setReview}
                      ></TextArea>
                  </View>
                  <View m={5}>
                      <Button onPress={submitReview}>Add Review</Button>
                  </View>
            </View>)
          }
          <ScrollView height={userId === undefined ? "2/3" : '1/3'} marginTop={10}>
                <Text margin={2} fontSize={"xl"} fontWeight={"bold"}>They are saying...</Text>
                <View>
                    {
                        reviews.map(review => (
                            <View style={Styles.childContainer} key={review._id}>
                                <View>
                                    <Text>
                                        { review.fromUser.firstName + " " + review.fromUser.lastName }
                                    </Text>
                                </View>
                                <View>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        starSize={20}
                                        rating={review.rating}
                                    />
                                </View>
                                <Text>
                                    {review.comment}
                                </Text>
                            </View>
                        ))
                    }
                </View>
          </ScrollView>
          {
            userId === undefined &&
            <TouchableOpacity onPress={logout} style={Styles.logout}>
              <Text style={Styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
          }
      </View>
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
    },
    container:{
        flex: 1,
        width : "100%",
    },
    childContainer:{
        padding:10,
        borderRadius : 2,
        margin: "1%",
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
        height: "100%"
        //backgroundColor: '#afb3ba',
    }
})
