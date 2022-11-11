import { text } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import { db,auth} from '../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
export default function LoginScreen( {navigation} ) {

  const [email, setEmail]=useState('')
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

  const handleSignIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials=>{
          const user = userCredentials.user;
        })
        .catch(error=>alert(error.message));
  }

  return (
    
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textWrapper1}>
          <Image style={{alignSelf:'center', resizeMode: 'contain', alignItems:'center', margin:40}} source={require('../../assets/main-image.png')}/>
        </View>
        <View style={styles.textWrapper2}>
            <View style={styles.textWrapper}>
                <Text style={styles.textWrpTxt}>Login</Text>
            </View>
            <View>
              <View>
                  <Text style={styles.textInputTxt}>Email</Text>
                  <TextInput style={styles.input}
                    placeholder="Enter your email"
                    value={ email }
                    onChangeText={email =>setEmail(email)}
                  />
              </View>
              <View>
                  <Text style={styles.textInputTxt}>Password</Text>
                  <TextInput style={styles.input}
                    secureTextEntry={true}
                    value={ password }
                    onChangeText={password =>setPassword(password)}
                    placeholder="**********"
                  />
              </View>

              <View style={styles.btnGroup}>
                  <TouchableOpacity onPress={handleSignIn} style={{backgroundColor: 'black',borderRadius:5, margin: 5, padding: 10, textAlign:'center'}} >
                      <Text style={{color:'white', textAlign:'center',width:164, fontSize:18, margin:5}}> Login</Text>
                  </TouchableOpacity>
                  <View style={{flexDirection:'row', marginTop:10}}>
                    <TouchableOpacity>
                      <Text style={{textAlign:'center', fontSize:18, padding:2}}>Forget Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=> navigation.navigate("Register")}>
                      <Text style={{color:'blue',textAlign:'center', fontSize:18, padding:2}}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
              </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31A05F',
  },
  textWrapper1: {
    paddingTop: 40,
    paddingHorizontal: 20,
    marginBottom:40
  },
  textWrapper: {
    padding:10,
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
    height : responsiveHeight(50.96),
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
    marginBottom:responsiveHeight(50),
  },
});