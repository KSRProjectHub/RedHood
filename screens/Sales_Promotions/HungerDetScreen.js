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
import React from 'react';

export default function HungerDetScreen({navigation}) {
  const [selected, setSelected] = React.useState("");
  const province = [
    {key:'1', value:'Central'},
    {key:'2', value:'Southern'},
    {key:'3', value:'Western'},
  ];
  const area = [
      {key:'1', value:'Category 1'},
      {key:'2', value:'Category 2'},
      {key:'3', value:'Category 3'},
    ];
  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Details About Hungers</Text>
          </View>
          <ScrollView>
            <View style={{marginTop:10}}>
                <Text style={styles.textInputTxt}>Province</Text>
                <SelectList
                  data={province} 
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
                <Text style={styles.textInputTxt}>Area</Text>
                <SelectList
                  data={area} 
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
                <Text style={styles.textInputTxt}>Total Hunger Count:</Text>
                <TextInput style={styles.input} keyboardType="numeric"/>
            </View>
            <View>
                <Text style={styles.textInputTxt}>No. of families:</Text>
                <TextInput style={styles.input}
                  // value={number}
                  keyboardType="numeric"
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Children age under 5:</Text>
                <TextInput style={styles.input}/>
            </View>
            <View>
                <Text style={styles.textInputTxt}>Adults Age over 60:</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:'auto', textAlign:'center'}} onPress={()=> navigation.navigate("OrgEventForm")}>
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
    padding: 1,
    marginTop:responsiveHeight(1),
    alignItems: "center",
    marginBottom:responsiveHeight(2),
  },
  footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},

});
