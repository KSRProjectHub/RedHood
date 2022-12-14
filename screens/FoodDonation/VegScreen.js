import { Card } from '@rneui/themed';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ToastAndroid,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function VegScreen() {
  const [getData, setGetData] = useState('');
  const navigation = useNavigation();
  const DatCollectinRef = collection(db, "fooditems"); //firebase databse reference
  const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0);

  useEffect(() => {
    //fetch the all data from firebase and set it to usestate, this firebase method
    const getAllData = async () => {
      const data = await getDocs(DatCollectinRef);
      setGetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      forceUpdate();
    };
    getAllData();
  }, [ignored]);

  //delete vegetable from datasase
  const deleteVeg = async (id) => {
    try {
      const UserDoc = doc(db, "fooditems", id);
      await deleteDoc(UserDoc);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    ToastAndroid.show("successfully Deleted!", ToastAndroid.SHORT);
    forceUpdate();
  };

  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>View Vegetables</Text>
          </View>
          <TextInput style={{height: 60,margin: 12,borderWidth: 1,padding: 10,width:316,fontSize:20,borderRadius:5}}
                placeholder="Search"
              />
          <ScrollView>
          <FlatList
            data={getData}
            renderItem={({ item }) =>(
              <View>
              {item.category==="1" &&
                <TouchableOpacity activeOpacity={0.8}>
                  <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
                    {/*react-native-elements Card*/}
                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                      <Image source={require('../../assets/Food-Categories/Vegetables/beetroot.png')} style={styles.image}/>
                      <View style={{alignSelf:'center', marginLeft:5}}>
                        <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                        {item.foodname} {'\n'} <Text style={{fontSize:16, margin:5}}>Rs. {item.newPrice}.00 /1KG {'\n'} {item.discount}%{'\t'} 
                            <Text style={{color:'#818181'}}>  <Text style={{textDecorationLine:'line-through'}}>Rs.{item.price}.00</Text></Text></Text>
                        </Text> 
                      </View>
                      <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                        <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                          <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteVeg(item.id)} style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                          <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Card>
                </TouchableOpacity>   
              }
            </View>
            )}
          ></FlatList>
{/*
          <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, justifyContent:'center'}}>
            <Text style={{color:'white', width:"auto", textAlign:'center', fontSize:16}}>View Food Details</Text>
          </TouchableOpacity> */}
        </ScrollView>
      </View>
      <View  style={styles.footer}>

        <TouchableOpacity style={{backgroundColor: 'white',borderRadius:5, margin: 10, padding: 10}} onPress={()=> navigation.navigate("Home")} >
          <Image source={require('../../assets/home.png')}/>
            {/* <Image style={{color:'black', width:'auto', textAlign:'center', fontSize:16} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white',borderRadius:5, margin: 10, padding: 10}}>
          <Image source={require('../../assets/iconNoName.png')}/>
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
  image: {
    width: 73,
    height: 65,
    alignSelf:'center'
  }
});
