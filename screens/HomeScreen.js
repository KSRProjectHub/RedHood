import { useNavigation } from '@react-navigation/native';
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
import { auth } from '../firebaseConfig';
export default function HomeScreen( {navigation} ) {

  //const navigation = useNavigation();
 const handleSignOut=()=>{
    auth.signOut().then(()=>{
      navigation.replace("Login")
    }).catch(error =>alert(error.message))
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Image style={{alignSelf:'center', resizeMode: 'contain', alignItems:'center'}} source={require('../assets/main-image.png')}/>
      </View>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <View style={styles.textWrapper2}>
        <View style={styles.item}>
            <TouchableOpacity  activeOpacity={0.5} onPress={()=> navigation.navigate("Donator")}>
                <Image source={require('../assets/directFoodDonBtn.png')} style={styles.image}/>
            </TouchableOpacity>
            <Text style={styles.txt}>Direct Food Donations</Text>
        </View>
        <View style={styles.item}>
            <TouchableOpacity  activeOpacity={0.5} onPress={()=> navigation.navigate("EventList")}>
                <Image source={require('../assets/ChequeButton.png')} style={styles.image}/>
            </TouchableOpacity>
            <Text style={styles.txt}>Event Donations</Text>
        </View>
        <View style={styles.item}>
            <TouchableOpacity  activeOpacity={0.5} onPress={()=> navigation.navigate("OngoingEventList")}>
                <Image source={require('../assets/CalButton.png')} style={styles.image}/>
            </TouchableOpacity>
            <Text style={styles.txt}>Food Donation Event</Text>
        </View>
        <View style={styles.item}>
            <TouchableOpacity  activeOpacity={0.5} onPress={()=> navigation.navigate("Categories")}>
                <Image source={require('../assets/CalBtn.png')} style={styles.image}/>
            </TouchableOpacity>
            <Text style={styles.txt}>Sales & Promotions</Text>
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppings',
  },
  textWrapper2: {
    position : 'absolute',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    //flex: 4, // the number of columns you want to devide the screen into
    //marginHorizontal: "auto",
    //width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 5,
    paddingHorizontal: 10,
    paddingTop: 40,
    flexWrap: 'wrap',
    height : responsiveHeight(75),
    width: responsiveWidth(100),
    top: responsiveHeight(40),
    backgroundColor: '#FFFFFF'
  },
  item: {
    width: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    textAlign: "center",
    // my visual styles; not important for the grid
    padding: 5,
    backgroundColor: "#ffff",
    borderWidth: 5,
    borderColor: "#fff",
  },
  txt: {
    fontSize: 16,
  },
  image: {
    width: 120,
    height: 120,
  }
});