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
import React, { Component, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function DonateMethodsScreen({route}) {
  const { item } = route.params;
  const id = item.id;
  const [data, setData] = useState('');
  const navigation = useNavigationn();
  const [selected, setSelected] = useState('');

  const initialState = {
    event_name:"",
    address:"",
    organization_name:"",
    date:"",
    description:"",
    province:"",
    type:"",
    targetNo:""
  };

  useEffect(() => {
    const updatemember = async ()=>{
      try {
        const docRef = await getDoc(doc(db, "events", id));
        setData({ ...docRef.data(), id: docRef.id });
        
      } catch (error) {
          console.error("Error adding document: ", error);
      }
    };
    updatemember();
  }, []);
    return (
      <View style={styles.container}>
        
          <View style={styles.textWrapper2}>
            <View style={styles.textWrapper}>
                <Text style={styles.textWrpTxt}>Donate Methods</Text>
            </View>

            <ScrollView>

            <Card containerStyle={styles.cardStyle}>
              <View style={styles.cardBodyStyle}>
                <Image source={require('../../assets/Vector.png')} style={styles.image}/>
                <View style={styles.cardMidText}>
                  <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                    Donate Foods
                  </Text> 
                </View>
                <View style={styles.btnGroup}>
                  <TouchableOpacity style={styles.btnArrow} onPress={()=> navigation.navigate("DonateFoods", {item})}>
                    <Text style={{color:'black', width:'auto', textAlign:'center', fontSize:20}}>{">"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card containerStyle={styles.cardStyle}>
              <View style={styles.cardBodyStyle}>
                <Image source={require('../../assets/Vector-1.png')} style={styles.image}/>
                <View style={styles.cardMidText}>
                  <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                    Donate Funds
                  </Text> 
                </View>
                <View style={styles.btnGroup}>
                  <TouchableOpacity style={styles.btnArrow} onPress={()=> navigation.navigate("DonateFunds", {item})}>
                    <Text style={{color:'black', width:'auto', textAlign:'center', fontSize:20}}>{">"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
              
          </ScrollView>
        </View>
      </View>
    );
  }
  
  
  
  const styles = StyleSheet.create({
    container: {flex: 1,backgroundColor: '#31A05F'},
    textWrapper: {
      padding: 6,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      alignItems:'center',
      justifyContent: 'center',
    },
    textWrpTxt: {fontSize: 24,color: 'black',},
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
    image: {alignSelf:'center'},
    btnGroup: {justifyContent:'flex-end', marginTop:5,  alignSelf:'center'},
    cardStyle:{borderColor:'transparent', borderWidth:0,margin:10, maxWidth:"100%", width:360},
    cardTitleStyle: {textAlign:'left',fontSize:20, margin:5,alignContent:'flex-start'},
    cardBodyText:{flexDirection:'row', justifyContent:'flex-start'},
    cardBodyStyle: {flexDirection:'row', justifyContent:'space-around'},
    cardMidText:{alignSelf:'center', marginLeft:5},
    btnArrow:{backgroundColor: 'transparent',borderRadius:5, margin: 5, padding: 10, justifyContent:'center', width:100}
  });