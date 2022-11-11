import SelectList from 'react-native-dropdown-select-list';
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
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function EDetailScreen({route}) {
  const { item } = route.params;
  const id = item.id;
  const [data, setData] = useState('');
  const navigation = useNavigation();
  const initialState = {
    event_name: "",
    organization_name: "",
    date: "",
    description: "",
    venue: "",
  };

  useEffect(() => {
    const updatemember = async () => {
      try {
        const docRef = await getDoc(doc(db, "events", id));
        // console.log("Document update data:", docRef.data());
        setData({ ...docRef.data(), id: docRef.id });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    updatemember();
  }, []);

  const handleChangeText = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Event Details</Text>
          </View>
          <ScrollView>
            <View>
                <Text style={styles.textInputTxt1}>{data.event_name}</Text>
            </View>
            <View>
                <Text style={styles.textInputTxt}>Organization Name:</Text>
                <TextInput style={styles.input}
                  value={data.organization_name}
                  editable={false}
                  selectTextOnFocus={false}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Venue:</Text>
                <TextInput style={styles.input}
                  value={data.venue}
                  editable={false}
                />
            </View>
            
            <View>
                <Text style={styles.textInputTxt}>Date:</Text>
                <TextInput style={styles.input}
                  value={data.date}
                 editable={false}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Description</Text>
                <TextInput style={styles.inputPost}
                  multiline={true}
                  numberOfLines={4}
                  value={data.description}
                  editable={false}
                />
            </View>
            
            <View style={styles.btnGroup}>
                <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:'auto', textAlign:'center'}} onPress={()=> navigation.navigate("EventUpdate", { item})} >
                    <Text style={{color:'white', textAlign:'center', fontSize:16}}> Edit Event</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:'auto', textAlign:'center'}} >
                    <Text style={{color:'white', textAlign:'center', fontSize:16}}> Cancel Event</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
          <Image source={require('../../assets/myEList.png')} style={{height:46, width:46,margin:5}}/>
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
    marginBottom:10,
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
  textInputTxt1: {
    fontSize: 20,
    marginBottom:10,
    color: 'black',
    left:15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:337,
    color:'black',
    fontSize:16,
    borderRadius:5
  },
  inputPost: {
    height: 100,
    color:'black',
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
  imgWrapper: {
    alignItems:'center',
    flexDirection: 'column',
    marginTop: 10
  },
  btnGroup: {
    display:'flex',
    flexDirection: "row",
    justifyContent:'space-around',
    //padding: 5,
    marginTop:responsiveHeight(2),
    alignItems: "center",
    marginBottom:responsiveHeight(2),
  },
  footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},

});
