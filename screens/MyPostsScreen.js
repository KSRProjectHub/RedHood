import { Card } from '@rneui/themed';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Image,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import React, { useEffect, useReducer, useState } from 'react';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { doc, getDocFromCache, getDocs, collection, increment, deleteDoc } from "firebase/firestore";
import { db, firebase } from '../firebaseConfig';
// import { FlatList } from 'react-native-gesture-handler';

export default function MyPostsScreen({navigation}) {

  const [getData, setGetData] = useState("");
  const DatCollectinRef=collection(db,"myposts");
  const [ignored, forceUpdate] = useReducer((x) => x + 1 , 0);

  useEffect(() => {
    const getAllData = async () => {
      const data = await getDocs(DatCollectinRef);
      setGetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      forceUpdate();
    };
    getAllData();
  }, [ignored]);

  //delete posts from db
  const deletePost = async (id) => {
    try {
      const PostDoc = doc(db, "myposts", id);
      await deleteDoc(PostDoc);
    } catch (error) {
      console.error("Error adding post: ", error);
    }
    ToastAndroid.show("successfully deleted", ToastAndroid.SHORT);
    forceUpdate();
  };
  
  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>My Post List</Text>
          </View>
            <FlatList
              data={getData}
              renderItem={({ item, index }) =>(
             <ScrollView>   
             {item.first_user=="Donator" &&
              <Card containerStyle={{borderRadius:20, margin:10, maxWidth:"100%", width:360}}>
               
                <CardTitle style={{flexDirection:'row', justifyContent:'flex-start', textAlign:'left', fontSize:20}}>
                <Text>
                  {item.name}
                  </Text>
                </CardTitle>
                <Text style={{fontSize:16, marginBottom:5}}>
                  {item.post_description}
                </Text>
                {item.request_state=="pending" &&
                  <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:5}}>
                    <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, width:100}} onPress={()=> navigation.navigate("PostUpdate",{ item })}>
                      <Text style={{color:'white', width:"auto", textAlign:'center', fontSize:16}}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deletePost(item.id)} style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, width:100}} >
                      <Text style={{color:'white', width:"auto", textAlign:'center', fontSize:16}}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                }
            </Card> 
             }
          </ScrollView>
            )}
            ></FlatList>
      </View>
      <View  style={styles.footer}>
        <TouchableOpacity style={{backgroundColor: 'white',borderRadius:5, margin: 10, padding: 10}} onPress={()=> navigation.navigate("Home")} >
          <Image source={require('../assets/home.png')}/>
            {/* <Image style={{color:'black', width:'auto', textAlign:'center', fontSize:16} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white',borderRadius:5, margin: 10, padding: 10}}>
          <Image source={require('../assets/iconNoName.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31A05F',
  },
  textWrapper: {
    padding: 6,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems:'center',
    justifyContent: 'center',
  },
  footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},
  textWrpTxt: {
    fontSize: 24,
    color: 'black',
  },
  textInputTxt: {
    fontSize: 16,
    color: 'black',
    left:15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:337,
    fontSize:16,
    borderRadius:5
  },
  inputPost: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width:337,
    borderRadius:5,
    textAlignVertical: 'top',
    fontSize:16
  },
  textWrapper2: {
    position : 'relative',
    alignItems:'center',
    flexDirection: 'column',
    flex: 1, // the number of columns you want to devide the screen into
    width: 400,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 2,
    paddingHorizontal: 20,
    paddingTop: 20,
    height : responsiveHeight(100),
    width: responsiveWidth(100),
    top: responsiveHeight(0),
    backgroundColor: '#FFFFFF'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  btnGroup: {
    display:'flex',
    flexDirection: "column",
    padding: 10,
    marginTop:responsiveHeight(2),
    alignItems: "center",
    marginBottom:responsiveHeight(7),
  },
});
