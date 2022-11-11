import { Card } from '@rneui/themed';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Alert,
  Image,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import React, { useEffect, useState } from 'react';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function HungerReqDetailScreen({route}) {
  const { item } = route.params;
  const id = item.id;
  const [data, setData] = useState('');
  const navigation = useNavigation();

  const initialState = {
    name:"",
    address:"",
    email:"",
    telNo:"",
    city:"",
    exp_date:"",
    post_description:"",
    accept_status:"",
  };

  useEffect(() => {
    const updatemember = async ()=>{
      try {
        const docRef = await getDoc(doc(db, "myposts", id));
        setData({ ...docRef.data(), id: docRef.id });
        
      } catch (error) {
          console.error("Error adding document: ", error);
      }
    };
    updatemember();
  }, []);

  const handleChangeText = (name, value)=>{
    setData((prevState) => ({ ...prevState, [name] :value }));
  };
  
  const UpdatePostAcceptState = async () => {
    try {
      await updateDoc(doc(db, "myposts",id), {
        accept_status:data.accept_status,
      });
      if(updateDoc){
        ToastAndroid.show("Updated Successfully", ToastAndroid.SHORT);
        navigation.navigate("Donator");
      }
    } catch (error) {
        console.error("Error adding document: ",error);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
    }
  };
  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
            <Text style={styles.textWrpTxt}>Hunger Request Details</Text>
          </View>
          <ScrollView>
            <Card containerStyle={{borderRadius:20, margin:10, maxWidth:"100%", width:360,}}>
              {/*react-native-elements Card*/}
              <CardTitle style={{flexDirection:'row', justifyContent:'flex-start', textAlign:'left', fontSize:20}}>
                <Text>{item.name}</Text>
              </CardTitle>
              <Text style={{fontSize:16, marginBottom:5}}>
                {item.post_description}
              </Text>
              {item.accept_status =="accepted" ?
              <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:10}}>
                <TouchableOpacity style={styles.acceptRejBtns1} disabled={true}>
                  <Text style={styles.btnText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptRejBtns1}  disabled={true}>
                  <Text style={styles.btnText}>Reject</Text>
                </TouchableOpacity>
              </View>
              :
              <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:10}}>
                <TouchableOpacity style={styles.acceptRejBtns} onPress={(accepted) => handleChangeText("name")}>
                  <Text style={styles.btnText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptRejBtns} onPress={(val) => handleChangeText("name")}>
                  <Text style={styles.btnText}>Reject</Text>
                </TouchableOpacity>
              </View>
              }
            </Card>

        </ScrollView>
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
  btnText:{color:'white', width:"auto", textAlign:'center', fontSize:16},
  acceptRejBtns:{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, width:100},
  acceptRejBtns1:{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, width:100,opacity:0.7},
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
footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},
});
