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
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function OrgEventFormScreen({navigation}) {
  const [organization_name, setOrgName] = useState('');
  const [event_name, setEventName] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  function organizeEvent(){
    addDoc(collection(db,"events"),{
      organization_name:organization_name,
      event_name:event_name,
      venue:venue,
      date:date,
      description:description,
    }).then(() => {
      alert("Event created")
      navigation.navigate("EventList");
    }).catch(error=>alert(error.message));
  }
  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Organize an Event Form</Text>
          </View>
          <ScrollView>
            <View>
                <Text style={styles.textInputTxt}>Organization Name:</Text>
                <TextInput style={styles.input}
                  value={organization_name}
                  onChangeText={organization_name=>setOrgName(organization_name)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Event Name:</Text>
                <TextInput style={styles.input}
                  value={event_name}
                  onChangeText={event_name=>setEventName(event_name)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Venue:</Text>
                <TextInput style={styles.input}
                  value={venue}
                  onChangeText={venue=>setVenue(venue)}
                />
            </View>
            
            <View>
                <Text style={styles.textInputTxt}>Date:</Text>
                <TextInput style={styles.input}
                  value={date}
                  onChangeText={date=>setDate(date)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Description</Text>
                <TextInput style={styles.inputPost}
                  multiline={true}
                  numberOfLines={4}
                  value={description}
                  onChangeText={description=>setDescription(description)}
                />
            </View>
            <View>
              <Text style={styles.textInputTxt}>Document:</Text>
              <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144}} >
                <Text style={{color:'white', textAlign:'center', fontSize:14}}> Upload</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity onPress={organizeEvent} style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:'auto', textAlign:'center'}} >
                    <Text style={{color:'white', textAlign:'center', fontSize:16}}> Organize an Event</Text>
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
    justifyContent: 'center',
    
  },
  footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},
  textWrpTxt: {
    fontSize: 24,
    color: 'black',
    marginBottom:10
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
  imgWrapper: {
    alignItems:'center',
    flexDirection: 'column',
    marginTop: 10
  },
  btnGroup: {
    display:'flex',
    flexDirection: "column",
    padding: 10,
    marginTop:responsiveHeight(2),
    alignItems: "center",
    marginBottom:responsiveHeight(3),
  },
});
