import SelectList from 'react-native-dropdown-select-list';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../../../firebaseConfig';

export default function DonateFoodscreen({route}) {
  const { item } = route.params;
  const id = item.id;
  const [donator_name, setDonatorName] = useState('');
  const [donator_address, setDonatorAddress] = useState('');
  const [description, setDesc] = useState('');
  const [eventName, setEventName] = useState('');
  const [selected, setSelected] = useState('');
  const category = [
    {key:'1', value:'Category 1'},
    {key:'2', value:'Category 2'},
    {key:'3', value:'Category 3'},
  ];
  function addDonateFood(){
    addDoc(collection(db,"donatefood"),{
      donator_name:donator_name,
      donator_address:donator_address,
      category:selected,
      description:description,
      eventName:eventName,
    }).then(() => {
      alert("Item successfully added.")
      navigation.navigate("DonateMethods");
    }).catch(error=>alert(error.message));
  }
  
  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Donate Foods</Text>
          </View>
          <ScrollView>
            <View>
                <Text style={styles.textInputTxt}>Donator's Name</Text>
                <TextInput style={styles.input}
                  value={donator_name}
                  onChangeText={donator_name=>setDonatorName(donator_name)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Address</Text>
                <TextInput style={styles.input}
                  value={donator_address}
                  onChangeText={donator_address=>setDonatorAddress(donator_address)}
                />
            </View>

            <View>
                <Text style={styles.textInputTxt}>Category</Text>
                <SelectList
                  data={category} 
                  setSelected={setSelected}
                  boxStyles={{
                          height: 45,
                          margin: 12,
                          borderWidth: 1,
                          padding: 10,
                          width:337,
                          fontSize:20,
                          borderColor: "#000011",
                          borderRadius:5
                  }}
                  dropdownStyles={{
                          height: 'auto',
                          margin: 12,
                          borderWidth: 1,
                          width:337,
                          fontSize:20,
                          borderColor: "#000011",
                          borderRadius:5}}
                  //arrowicon ={<FontAwesomeIcon name="chevron-down" size={12} color={'black'} />} 
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Description</Text>
                <TextInput style={styles.inputPost}
                  multiline={true}
                  numberOfLines={4}
                  value={description}
                  onChangeText={description=>setDesc(description)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Event / Charity Organization</Text>
                <TextInput style={styles.input}
                  value={eventName}
                  onChangeText={eventName=>setEventName(eventName)}
                />
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity onPress={addDonateFood} style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144, textAlign:'center'}} >
                    <Text style={{color:'white', textAlign:'center', fontSize:16}}> Donate</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
    marginBottom:10
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
    marginBottom:responsiveHeight(7),
  },
});
