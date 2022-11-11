import SelectList from 'react-native-dropdown-select-list';
import firestore from 'firebase/firestore';
import {db} from '../../firebaseConfig';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc,setDoc, collection, addDoc} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';


export default function RegisterScreen() {
  const usersCollection = collection(db,'users');
  const navigation = useNavigation()

  const [name, setName]=useState('')
  const [address, setAddress]=useState('')
  const [email, setEmail]=useState('')
  const [mobileNo, setMobileNo]=useState('')
  const [password, setPassword]=useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigation.navigate("Home");
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  
    return unsubscribe
  }, [])
  

  function handleSignUp(){
    createUserWithEmailAndPassword(auth,email,password).then(userCredentials=>{
            const user = userCredentials.user
          }).catch(error=>alert(error.message));
  }

  function registerUser(){

    addDoc(collection(db,"users"),{
          name:name,
          address:address,
          email:email,
          mobileNo:mobileNo,
          password:password
        }).then(() => {
          console.log("Document successfully written!")
        }).catch(error=>alert(error.message));
  
    createUserWithEmailAndPassword(auth,email,password).then(userCredentials=>{
          const user = userCredentials.user
        }).catch(error=>alert(error.message));
  }
  
  function resgisterAndSignUp(){
    this.registerUser();
    this.handleSignUp();
  }
  // const handleSignUp=()=>{
  //   //const timeStamp = firebase.firestore.FieldValue.serverTimeStamp();

  //   setDoc(doc(db, "users","LA"),{
  //     name:name,
  //     address:address,
  //     email:email,
  //     mobileNo:mobileNo,
  //     password:password
  //   }).then(() => {
  //     console.log("Document successfully written!")
  //   }).catch(error=>alert(error.message));

  //   auth.createUserWithEmailAndPassword(email,password).then(userCredentials=>{
  //       const user = userCredentials.user
  //     }).catch(error=>alert(error.message))
  // }

  return (
      <View style={styles.container}>
        
          <View style={styles.textWrapper2}>
            <View style={styles.textWrapper}>
                <Text style={styles.textWrpTxt}>Account Registration</Text>
                <Text>-Your Details-</Text>
            </View>
            <ScrollView>
              <View>
                  <Text style={styles.textInputTxt}>Name</Text>
                  <TextInput style={styles.input}
                    value={name}
                    onChangeText={name=>setName(name)}
                  />
              </View>
              <View>
                  <Text style={styles.textInputTxt}>Address</Text>
                  <TextInput style={styles.input} 
                    value={address}
                    onChangeText={address=>setAddress(address)}
                  />
              </View>
              <View>
                  <Text style={styles.textInputTxt}>Email</Text>
                  <TextInput style={styles.input} keyboardType="email-address" 
                    value={email}
                    onChangeText={email=>setEmail(email)}
                  />
              </View>

              <View>
                  <Text style={styles.textInputTxt}>Mobile Number</Text>
                  <TextInput style={styles.input} keyboardType="numeric"
                    value={mobileNo}
                    maxLength={10}
                    onChangeText={mobileNo=>setMobileNo(mobileNo)}
                  />
              </View>
              <View>
                  <Text style={styles.textInputTxt}>Password</Text>
                  <TextInput style={styles.input} secureTextEntry={true}
                    value={password}
                    onChangeText={password=>setPassword(password)}
                  />
              </View>
              <View style={styles.btnGroup}>
                  <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144, textAlign:'center'}} >
                      <Text style={{color:'white', textAlign:'center', fontSize:16}}> Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  onPress={registerUser} style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144, textAlign:'center'}}>
                      <Text style={{color:'white', textAlign:'center', fontSize:16}}> Register</Text>
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
    flexDirection: "row",
    justifyContent:'space-between',
    //padding: 5,
    marginTop:responsiveHeight(2),
    alignItems: "center",
    marginBottom:responsiveHeight(5),
  },
});
