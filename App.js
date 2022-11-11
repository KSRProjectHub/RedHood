import HomeScreen from "./screens/HomeScreen";
import DonatorScreen from "./screens/DonatorScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import MyPostsScreen from "./screens/MyPostsScreen";
import PostUpdateScreen from "./screens/PostUpdateScreen";
import ReceivedReqScreen from "./screens/ReceivedReqScreen";
import HungerReqScreen from "./screens/HungerReqScreen";
import HungerReqDetailScreen from "./screens/HungerReqDetailScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import CategoriesScreen from "./screens/FoodDonation/CategoriesScreen";
import VegScreen from "./screens/FoodDonation/VegScreen";
import ViewFoodScreen from "./screens/FoodDonation/ViewFoodScreen";
import AddVegScreen from "./screens/FoodDonation/AddVegScreen";
import UpdateVegScreen from "./screens/FoodDonation/UpdateVegScreen";
import EventListScreen from "./screens/EventDonations/EventListScreen";
import EventDetailsScreen from "./screens/EventDonations/EventDetailsScreen";
import DonateMethodsScreen from "./screens/EventDonations/DonateMethodsScreen";
import DonateFoodscreen from "./screens/EventDonations/donateMethods/DonateFoodsScreen";
import DonateFundsScreen from "./screens/EventDonations/donateMethods/DonateFundsScreen";
import OngoingEventListScreen from "./screens/Sales_Promotions/OngoingEventListScreen";
import EventUpdateScreen from "./screens/Sales_Promotions/EventUpdateScreen";
import OrLoginScreen from "./screens/Sales_Promotions/OrLoginScreen";
import HungerDetScreen from "./screens/Sales_Promotions/HungerDetScreen";
import OrgEventFormScreen from "./screens/Sales_Promotions/OrgEventFormScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Button} from 'react-native';
import { auth } from "./firebaseConfig";
import MyEventListScreen from "./screens/FoodDonation/MyEventListScreen";
import EDetailScreen from "./screens/FoodDonation/EDetailScreen";
// import { Tab } from "@rneui/base";
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options = {{headerShown:false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options = {({ navigation, route }) =>({
                        headerTitle:"RED HOOD",
                        headerStyle: { backgroundColor: '#31A05F'},
                        headerTintColor: 'black',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center',
                        headerLeft: null,
                        headerRight: () => (<Button title="Logout"  onPress={() => {navigation.navigate('Login')}}/>),
                        })}
        />
        {/* Direct Food Donation - Part 1 */}
        <Stack.Screen
          name="Donator"
          component={DonatorScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} , navigationBarColor:'black'}}
        />
        
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="MyPosts"
          component={MyPostsScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="PostUpdate"
          component={PostUpdateScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="ReceivedReq"
          component={ReceivedReqScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="HungerReq"
          component={HungerReqScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="HungerReqDetail"
          component={HungerReqDetailScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        {/* Food Donation Event  */}
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="Veg"
          component={VegScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="ViewFood"
          component={ViewFoodScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="AddVeg"
          component={AddVegScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="UpdateVeg"
          component={UpdateVegScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="EventList"
          component={EventListScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventDetailsScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="DonateMethods"
          component={DonateMethodsScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="DonateFoods"
          component={DonateFoodscreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="DonateFunds"
          component={DonateFundsScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        
        <Stack.Screen
          name="OngoingEventList"
          component={OngoingEventListScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="EventUpdate"
          component={EventUpdateScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="OrLogin"
          component={OrLoginScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="HungerDet"
          component={HungerDetScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="OrgEventForm"
          component={OrgEventFormScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="MyEventList"
          component={MyEventListScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
        <Stack.Screen
          name="EDetail"
          component={EDetailScreen}
          options = {{title:"RED HOOD",headerStyle: { backgroundColor: '#31A05F'} }}
        />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}