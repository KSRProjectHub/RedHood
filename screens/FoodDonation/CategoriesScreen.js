import { Card } from '@rneui/themed';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import React, { useEffect, useState } from 'react';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { FlatList } from 'react-native-gesture-handler';

export default function CategoriesScreen({route}) {


  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Categories</Text>
          </View>
          <ScrollView>                
              <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("Veg")}>
                <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Image source={require('../../assets/Food-Categories/1.png')} style={styles.image}/>
                    <Text style={{fontSize:24, margin:5,  alignSelf:'center'}}>
                      Vegetables
                    </Text>
                    <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                      <Text style={{color:'black', width:"auto", textAlign:'center', fontSize:30}}>{">"}</Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>  

              <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("PostUpdate")}>
                <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Image source={require('../../assets/Food-Categories/2.png')} style={styles.image}/>
                    <Text style={{fontSize:24, margin:5,  alignSelf:'center', textTransform:'capitalize'}}>
                      fruits
                    </Text>
                    <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                      <Text style={{color:'black', width:"auto", textAlign:'center', fontSize:30}}>{">"}</Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("PostUpdate")}>
                <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Image source={require('../../assets/Food-Categories/3.png')} style={styles.image}/>
                    <Text style={{fontSize:24, margin:5,  alignSelf:'center'}}>
                      Meat
                    </Text>
                    <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                      <Text style={{color:'black', width:"auto", textAlign:'center', fontSize:30}}>{">"}</Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("PostUpdate")}>
                <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Image source={require('../../assets/Food-Categories/4.png')} style={styles.image}/>
                    <Text style={{fontSize:24, margin:5,  alignSelf:'center'}}>
                      Fish
                    </Text>
                    <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                      <Text style={{color:'black', width:"auto", textAlign:'center', fontSize:30}}>{">"}</Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("PostUpdate")}>
                <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Image source={require('../../assets/Food-Categories/5.png')} style={styles.image}/>
                    <Text style={{fontSize:24, margin:5,  alignSelf:'center'}}>
                      Bakery
                    </Text>
                    <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                      <Text style={{color:'black', width:"auto", textAlign:'center', fontSize:30}}>{">"}</Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>  

          <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end', padding:5, margin:10, marginTop:3}}>
            <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, justifyContent:'center', width:100}} onPress={()=> navigation.navigate("AddVeg")}>
              <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Add</Text>
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
  image: {
    width: 73,
    height: 65,
  }
});
