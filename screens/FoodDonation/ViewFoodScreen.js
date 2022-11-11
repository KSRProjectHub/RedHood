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
import React from 'react';

export default function ViewFoodScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>View Food Details</Text>
          </View>
          <TextInput style={{height: 60,margin: 12,borderWidth: 1,padding: 10,width:316,fontSize:20,borderRadius:5}}
                placeholder="Search"
              />
          <ScrollView>
          <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("PostUpdate")}>
            <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
              {/*react-native-elements Card*/}
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Image source={require('../../assets/Food-Categories/Vegetables/beetroot.png')} style={styles.image}/>
                <View style={{alignSelf:'center', marginLeft:5}}>
                  <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                    Beetroot {'\n'} <Text style={{fontSize:16, margin:5}}>Rs. 140.00 /1KG {'\n'} 10%{'\t'} 
                    <Text style={{color:'#818181'}}> Rs. 150.00</Text></Text>
                  </Text> 
                </View>
                <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}} onPress={()=> navigation.navigate("UpdateVeg")}>
                    <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                    <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </TouchableOpacity>  

          <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("PostUpdate")}>
            <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
              {/*react-native-elements Card*/}
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Image source={require('../../assets/Food-Categories/Vegetables/cabbage.png')} style={styles.image}/>
                <View style={{alignSelf:'center', marginLeft:5}}>
                  <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                    Cabbage {'\n'} <Text style={{fontSize:16, margin:5}}>Rs. 276.00 /1KG {'\n'} 12%{'\t'} 
                    <Text style={{color:'#818181'}}> Rs. 300.00</Text></Text>
                  </Text> 
                </View>
                <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                    <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                    <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </TouchableOpacity> 

          <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("PostUpdate")}>
            <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
              {/*react-native-elements Card*/}
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Image source={require('../../assets/Food-Categories/Vegetables/polos.png')} style={styles.image}/>
                <View style={{alignSelf:'center', marginLeft:5}}>
                  <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                    Cabbage {'\n'} <Text style={{fontSize:16, margin:5}}>Rs. 148.00 /1KG {'\n'} 25%{'\t'} 
                    <Text style={{color:'#818181'}}> Rs. 220.00</Text></Text>
                  </Text> 
                </View>
                <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center'}}>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                    <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                    <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </TouchableOpacity> 
          
          <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate("PostUpdate")}>
            <Card containerStyle={{flexDirection:'column',borderRadius:20,flex:3, margin:10, maxWidth:"100%", width:360}}>
              {/*react-native-elements Card*/}
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Image source={require('../../assets/Food-Categories/Vegetables/onions.png')} style={styles.image}/>
                <View style={{alignSelf:'center', marginLeft:5}}>
                  <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                    Onion {'\n'} <Text style={{fontSize:16, margin:5}}>Rs. 380.00 /1KG {'\n'} 30%{'\t'} 
                    <Text style={{color:'#818181'}}> Rs. 500.00</Text></Text>
                  </Text> 
                </View>
                <View style={{justifyContent:'flex-end', marginTop:5,  alignSelf:'center', margin:10}}>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                    <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Update</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}}>
                    <Text style={{color:'white', width:'auto', textAlign:'center', fontSize:16}}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
                 
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
    alignSelf:'center'
  }
});
