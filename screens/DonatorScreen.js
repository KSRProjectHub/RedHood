import { StatusBar } from 'expo-status-bar';
import SafeAreaView from 'react-native-safe-area-view';

import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { Directions } from 'react-native-gesture-handler';
export default function DonatorScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper2}>
        <View style={styles.textWrapper}>
            <Text style={styles.textWrpTxt}>Donator Page</Text>
            <Text style={{fontSize:20, marginTop:5, marginBottom:5}}>Give your helping hands & Let's scatter love</Text>
        </View>
        <View  style={styles.imgWrapper}>
            <Image source={require('../assets/img1.png')} style={styles.image}/>
        </View>
        <View style={styles.btnGroup}>
            <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10}} onPress={()=> navigation.navigate("CreatePost")} >
                <Text style={{color:'white', width:180, textAlign:'center', fontSize:16}}> Create Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10}}  onPress={()=> navigation.navigate("MyPosts")} >
                <Text style={{color:'white', width:180, textAlign:'center', fontSize:16}}> My Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10}} onPress={()=> navigation.navigate("ReceivedReq")} >
                <Text style={{color:'white', width:180, textAlign:'center', fontSize:16}}>Received Requests</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10}} onPress={()=> navigation.navigate("HungerReq")}>
                <Text style={{color:'white', width:180, textAlign:'center', fontSize:16}}>Hunger Requests</Text>
            </TouchableOpacity>
        </View>
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
  textWrapper: {
    padding: 6,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems:'center',
    justifyContent: 'center',
    
  },
  footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},
  textWrpTxt: {
    fontSize: 30,
    color: 'black'
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    //fontFamily: 'Poppings',
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
  image: {
    width: 317,
    height: 191,
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
    alignItems: "center"
  },
});
