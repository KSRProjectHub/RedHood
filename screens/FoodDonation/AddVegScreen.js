import SelectList from 'react-native-dropdown-select-list';
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
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function AddVegScreen() {

  const navigation = useNavigation()
  const [foodname, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [selected, setSelected] = useState('');

  const category = [
    {key:'1', value:'Vegetables'},
    {key:'2', value:'Fruit'},
    {key:'3', value:'Meat'},
    {key:'4', value:'Fish'},
    {key:'5', value:'Bakery'},
  ];

  function addItem(){
    addDoc(collection(db,"fooditems"),{
      foodname:foodname,
      quantity:quantity,
      price:price,
      category:selected,
      discount:discount,
      newPrice:newPrice,
    }).then(() => {
      console.log("Item successfully added.")
      navigation.navigate("Categories");
    }).catch(error=>alert(error.message));
  }
  

  return (
    <View style={styles.container}>
      
        <View style={styles.textWrapper2}>
          <View style={styles.textWrapper}>
              <Text style={styles.textWrpTxt}>Add Food Details</Text>
          </View>
          <ScrollView>
            <View>
                <Text style={styles.textInputTxt}>Food Name</Text>
                <TextInput style={styles.input}
                  value={foodname}
                  onChangeText={foodname=>setFoodName(foodname)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Category</Text>
                <SelectList
                  data={category} 
                  setSelected={setSelected}
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
                <Text style={styles.textInputTxt}>Quantity</Text>
                <TextInput style={styles.input}
                  value={quantity}
                  onChangeText={quantity=>setQuantity(quantity)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Price (Rs.)</Text>
                <TextInput style={styles.input}
                  value={price}
                  onChangeText={price=>setPrice(price)}
                />
            </View>
            <View>
                <Text style={styles.textInputTxt}>Discount</Text>
                <TextInput style={styles.input}
                  value={discount}
                  onChangeText={discount=>setDiscount(discount)}
                />
            </View>

            <View>
                <Text style={styles.textInputTxt}>Price After Discount(Rs.)</Text>
                <TextInput style={styles.input}
                  value={price-(price*(discount/100))}
                  onChangeText={newPrice=>setNewPrice(price-(price*(discount/100)))}
                />
            </View>
            <View style={styles.btnGroup}>
                <TouchableOpacity onPress={addItem} style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144, textAlign:'center'}} >
                    <Text style={{color:'white', textAlign:'center', fontSize:16}}> Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'black',borderRadius:5, margin: 10, padding: 10, width:144, textAlign:'center'}} >
                    <Text style={{color:'white', textAlign:'center', fontSize:16}}> Cancel</Text>
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
  imgWrapper: {
    alignItems:'center',
    flexDirection: 'column',
    marginTop: 10
  },
  btnGroup: {
    display:'flex',
    flexDirection: "row",
    padding: 5,
    justifyContent:'space-between',
    marginTop:responsiveHeight(2),
    alignItems: "center",
    marginBottom:responsiveHeight(5),
  },
});
