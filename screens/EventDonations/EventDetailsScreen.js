import { Card } from '@rneui/themed';
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
import React, { Component, useEffect, useState } from 'react';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';

export default function EventDetailsScreen({route}) {
  const { item } = route.params;
  const id = item.id;
  const [data, setData] = useState('');
  const navigation = useNavigation();
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
                <Text style={styles.textWrpTxt}>Event Details</Text>
            </View>

            <ScrollView>
                <Card containerStyle={styles.cardStyle}>
                    {/*react-native-elements Card*/}
                    <CardTitle style={styles.cardTitleStyle}>
                        <Text>
                            Event Details
                        </Text>
                    </CardTitle>
                    <View style={styles.cardBodyText}>
                        <View>
                            <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                                Venue: {data.venue}{'\n'} Date:{data.date}{'\n'} 
                                Organizors:{'\n'} {data.organization_name}
                            </Text> 
                        </View>
                    </View>
                </Card>

                <Card containerStyle={styles.cardStyle}>
                    {/*react-native-elements Card*/}
                    <CardTitle style={styles.cardTitleStyle}>
                        <Text>
                            Description
                        </Text>
                    </CardTitle>
                    <View style={styles.cardBodyText}>
                        <View>
                            <Text style={{fontSize:20, margin:5,  alignSelf:'center'}}>
                                {data.description}
                            </Text> 
                        </View>
                    </View>
                </Card>
                <View style={styles.btnGroup}>
                    
                    <TouchableOpacity style={{width:"50%",backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, justifyContent:'center'}}>
                        <Text style={{width:'auto',color:'white',  textAlign:'center', fontSize:16,padding:5}}>More Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:"50%", backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10,  justifyContent:'center'}} onPress={()=> navigation.navigate("DonateMethods", {item})}>
                        <Text style={{width:'auto',color:'white', textAlign:'center', fontSize:16,padding:5}}>Donate</Text>
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
    btnGroup: {
      display:'flex',
      flexDirection: "row",
      padding: 10,
      flex:2,
      maxWidth:'95%',
      justifyContent:'space-between',
      marginTop:responsiveHeight(2),
      marginBottom:responsiveHeight(7),
    },
    cardStyle:{borderRadius:20,margin:10, maxWidth:"100%", width:360},
    cardTitleStyle: {textAlign:'left',fontSize:20, margin:5,alignContent:'flex-start'},
    cardBodyText:{flexDirection:'row', justifyContent:'flex-start'}
  });