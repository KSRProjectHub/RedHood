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
import React, { useState } from 'react';
import { doc,setDoc, collection, addDoc} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db } from '../firebaseConfig';

export default function CreatePostScreen() {

  const navigation = useNavigation()
  const [name, setName]=useState('')
  const [address, setAddress]=useState('')
  const [email, setEmail]=useState('')
  const [telNo, setTelNo]=useState('')
  const [city, setCity]=useState('')
  const [exp_date, setExpDate]=useState('')
  const [post_description, setPostDescription]=useState('')
  const [selected, setSelected] = useState('');
  const category = [
    {key:'1', value:'Cooked'},
    {key:'2', value:'Day Food'},
  ];

  function publishPost(){

    addDoc(collection(db,"myposts"),{
          name:name,
          address:address,
          email:email,
          telNo:telNo,
          city:city,
          category:selected,
          exp_date:exp_date,
          post_description:post_description,
          request_state:'pending',
          needy_name:'pending',
          needy_address:'pending',
          needy_email:'pending',
          needy_telNo:'pending',
          needy_city:'pending',
          accept_status:'pending',
          first_user:'Donator',
        }).then(() => {
          console.log("Post successfully added.")
          navigation.navigate("Donator");
        }).catch(error=>alert(error.message));
  
  }
  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Create Post</Text>
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
                <Text style={styles.textInputTxt}>Telephone No</Text>
                <TextInput style={styles.input}
                  value={telNo}
                  onChangeText={telNo=>setTelNo(telNo)}
                  keyboardType="numeric"
                  maxLength={10}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Email Address</Text>
                <TextInput style={styles.input}
                  value={email}
                  onChangeText={email=>setEmail(email)}
                  keyboardType="email-address"
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>City</Text>
                <TextInput style={styles.input}
                  value={city}
                  onChangeText={city=>setCity(city)}
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
                <Text style={styles.textInputTxt}>Category</Text>
                <SelectList
                  data={category} 
                  setSelected={setSelected}
                  onChangeText={category=>setSelected(category)}
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
                <Text style={styles.textInputTxt}>Expire Date</Text>
                <TextInput style={styles.input}
                  value={exp_date}
                  onChangeText={exp_date=>setExpDate(exp_date)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Post</Text>
                <TextInput style={styles.inputPost}
                  value={post_description}
                  onChangeText={post_description=>setPostDescription(post_description)}
                  multiline={true}
                  numberOfLines={4}
                />
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity onPress={publishPost} style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144, textAlign:'center'}} >
                    <Text style={{color:'white', textAlign:'center', fontSize:16}}> Publish</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
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
  footer: {height: 120,flexDirection:'row',justifyContent:'space-around',marginBottom:10},
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
    padding: 10,
    marginTop:responsiveHeight(2),
    alignItems: "center",
    marginBottom:responsiveHeight(7),
  },
});
