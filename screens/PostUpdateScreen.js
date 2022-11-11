import SelectList from 'react-native-dropdown-select-list';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Image,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function PostUpdateScreen({ route }) {
  const { item } = route.params;
  const id = item.id;
  const [data, setData] = useState('');
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const categories = [
    {key:'1', value:'Cooked'},
    {key:'2', value:'Day Food'},
  ];

  const initialState = {
    name:"",
    address:"",
    email:"",
    telNo:"",
    city:selected,
    category:"",
    exp_date:"",
    post_description:"",
  };

  useEffect(() => {
    const updatemember = async ()=>{
      try {
        const docRef = await getDoc(doc(db, "myposts", id));
        setData({ ...docRef.data(), id: docRef.id });
        
      } catch (error) {
          console.error("Error adding document: ", error);
      }
    };
    updatemember();
  }, []);

  const handleChangeText = (name, value)=>{
    setData((prevState) => ({ ...prevState, [name] :value }));
  };
  
  const UpdatePost = async () => {
    try {
      await updateDoc(doc(db, "myposts",id), {
        name:data.name,
        address:data.address,
        email:data.email,
        telNo:data.telNo,
        city:data.city,
        category:data.category,
        exp_date:data.exp_date,
        post_description:data.post_description,
      });
      if(updateDoc){
        ToastAndroid.show("Updated Successfully", ToastAndroid.SHORT);
        navigation.navigate("MyPosts");
      }
    } catch (error) {
        console.error("Error adding document: ",error);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Update Post</Text>
          </View>
          <ScrollView>
            <View>
                <Text style={styles.textInputTxt}>Name</Text>
                <TextInput style={styles.input}
                  value={data.email}
                  onChangeText={(val) => handleChangeText("name", val)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Telephone No</Text>
                <TextInput style={styles.input}
                  value={data.email}
                  onChangeText={(val) => handleChangeText("telNo", val)}
                  keyboardType="numeric"
                  maxLength={10}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Email Address</Text>
                <TextInput style={styles.input}
                  value={data.email}
                  onChangeText={(val) => handleChangeText("email", val)}
                  keyboardType="email-address"
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>City</Text>
                <TextInput style={styles.input} 
                  value={data.city}
                  onChangeText={(val) => handleChangeText("city", val)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Address</Text>
                <TextInput style={styles.input} 
                  value={data.address}
                  onChangeText={(val) => handleChangeText("address", val)}
            />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Category</Text>
                <SelectList
                  data={categories}
                  value={data.category} 
                  setSelected={setSelected}
                  // defaultOption={{key:'1', value:'Dry Food'}}
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
                  value={data.exp_date}
                  onChangeText={(val) => handleChangeText("exp_date", val)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Post</Text>
                <TextInput style={styles.inputPost}
                  multiline={true}
                  value={data.post_description}
                  onChangeText={(val) => handleChangeText("post_description", val)}
                  numberOfLines={4}
                />
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity onPress={()=> UpdatePost()} style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144, textAlign:'center'}} >
                  <Text style={{color:'white', textAlign:'center', fontSize:16}}> Update</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
  footer: {height: 120,width:responsiveWidth(100), flexDirection:'row',justifyContent:'space-around',marginBottom:10, backgroundColor:'#31A05F'},
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
