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

export default function OrLoginScreen({navigation}) {

  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Organization Login</Text>
          </View>
          <ScrollView>
            <View>
                <Text style={styles.textInputTxt}>Organization ID:</Text>
                <TextInput style={styles.input}/>
            </View>
            <View>
                <Text style={styles.textInputTxt}>Password</Text>
                <TextInput style={styles.input}
                  secureTextEntry={true}
                />
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity   onPress={()=> navigation.navigate("HungerDet")} style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144, textAlign:'center'}} >
                    <Text style={{color:'white', textAlign:'center', fontSize:16}}> Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 10, padding: 10, textAlign:'center', marginLeft:3}}  onPress={()=> navigation.navigate("OrLogin")} >
                    <Text style={{color:'red', textAlign:'center', fontSize:16}}> Register Your Organization</Text>
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
    marginTop:15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems:'center',
    justifyContent: 'center',
    //height:responsiveHeight(40)
  },
  textWrpTxt: {
    fontSize: 24,
    color: 'black',
    height:responsiveHeight(25)
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
  footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},

});
