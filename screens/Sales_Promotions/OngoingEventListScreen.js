import { Card } from '@rneui/themed';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import React, { useState, Component, useEffect } from 'react';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs,doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { FlatList } from 'react-native-gesture-handler';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';

export default function OngoingEventListScreen(){

  const [getData, setGetData] = useState('');
  const navigation = useNavigation();
  const DatCollectinRef = collection(db, "events"); //firebase databse reference
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


  return (
    
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Ongoing Event List</Text>
          </View>
            <FlatList
              data={getData}
              renderItem={({ item, index }) =>(
             <ScrollView>   
              <Card containerStyle={{borderRadius:20, margin:10, maxWidth:"100%", width:360}}>
               
                <CardTitle style={{flexDirection:'row', justifyContent:'flex-start', textAlign:'left', fontSize:20}}>
                <Text>
                  Event Name : {item.event_name}
                  </Text>
                </CardTitle>
                <Text style={{fontSize:16, marginBottom:5}}>
                  {item.date}
                </Text>
    
                  <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:5}}>
                    <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, width:100}} onPress={()=> navigation.navigate("EventUpdate",{ item })}>
                      <Text style={{color:'white', width:"auto", textAlign:'center', fontSize:16}}>Select</Text>
                    </TouchableOpacity>

                  </View>
                
            </Card> 
          </ScrollView>
            )}
            ></FlatList>
        
      </View>
      <View  style={styles.footer}>
        <TouchableOpacity style={{backgroundColor: 'white',borderRadius:5, margin: 10, padding: 10}} onPress={()=> navigation.navigate("OngoingEventList")} >
            <Image source={require('../../assets/ongoingEList.png')} style={{height:46, width:46,margin:5}}/>
          {/* <Image style={{color:'black', width:'auto', textAlign:'center', fontSize:16} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white',borderRadius:5, margin: 10, padding: 10}} onPress={()=> navigation.navigate("OrLogin")} >
          <Image source={require('../../assets/orgLogin.png')} style={{height:46, width:46,margin:5}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: 'white',borderRadius:5, margin: 10, padding: 10}} onPress={()=> navigation.navigate("MyEventList")} >
          <Image source={require('../../assets/myEList.png')} style={{height:46, width:46,margin:5}} />
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
  btn: {  backgroundColor: 'black', borderRadius:5, margin: 5, padding: 10},
  btnText: { color:'white',  textAlign:'center', fontSize:16 },
  head: { height: 40, backgroundColor: 'transparent',  borderBottomWidth:1,borderBottomColor:'black', justifyContent:'center', alignSelf:'center' },
  row: { flexDirection: 'row', backgroundColor: 'transparent',padding:10,  borderBottomWidth:1,borderBottomColor:'black', alignSelf:'center' },
  text: { margin: 6, fontSize:16 },
  textWrapper: {
    padding: 6,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  textWrpTxt: {
    fontSize: 24,
    color: 'black',
    marginBottom:10
  },
  textWrapper2: {
    position : 'relative',
    // alignItems:'center',
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
  footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},

});
