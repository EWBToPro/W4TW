import React, { useEffect, useState, Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetTypeAPI from '../apis/GetTypeAPI';


  

export default function AlreadyLogged({ navigation }) {

    const [email, setEmail] = useState('');

useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      let user = await AsyncStorage.getItem('user');  
      let parsed = await JSON.parse(user);  
      var email = parsed.email;
      setEmail(email)
      }
      // call the function
    fetchData()
    // make sure to catch any error
    .catch(console.error);
      
    }, [])


  return (
    <View style={styles.background}>
      <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>
     {/* <View style={styles.backinputview}> */}
    <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
      navigation.navigate("Home page")
    }}>
      <Icon name='arrow-left' color='#03DAC5' size={25} />
    </Pressable>
  {/* </View> */}
      <Text  numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>You have already logged in to {email}</Text>
      
      <Text  numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>If you wish to Logout</Text>
      <Pressable style={styles.button2} onPress={async () => {
                    await AsyncStorage.removeItem("user"); 
                    navigation.navigate("Home page");
                }}>
        <Text style={styles.textButton}>
          Logout
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      <Text  numberOfLines={5} adjustsFontSizeToFit style= {styles.textUnder}>If you wish to continue logged in to {email}</Text>
      <Pressable style={styles.button2} numberOfLines={1} onPress={ async () => {
        var type = await GetTypeAPI(email);
                  if (type === "student"){
                    navigation.navigate("Student welcome");
                  } else if (type === "teacher"){
                    navigation.navigate("Teacher welcome");
                  } else if (type === null){
                    navigation.navigate("Pre questionnaire 1");
                  }}}>
        <Text style={styles.textButton}>
          Continue
        </Text>
        <View style={styles.arrow} >
          <Icon name='angle-right' color='#03DAC5' size={15}/>
        </View>
      </Pressable>
      {/* <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
      <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 700, width: 100, height:50, alignSelf: 'center'}}/> */}
     <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/12,
    textAlign:'center',
    fontSize:30,
    fontWeight: 'bold',
  },
  textUnder:{
    color: '#03DAC5',
    marginTop: Dimensions.get('window').height/12,
    textAlign:'center',
    fontSize:18,
    marginLeft: Dimensions.get('window').width/ 12,
    marginRight: Dimensions.get('window').width/ 12,
  },
  textButton:{
    color: '#03DAC5',
    textAlign:'center',
    fontSize:14,
    fontWeight: 'bold',
    flex: 5
  },
  button: {
    width:  Dimensions.get('window').width / 3,
    flexDirection: 'row',
    padding: 15,
    // marginLeft: Dimensions.get('window').width / 3,
    // marginTop: Dimensions.get('window').height / 12,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C',
    alignSelf: 'flex-start'
  },
  button2: {
    width:  Dimensions.get('window').width / 2,
    flexDirection: 'row',
    padding: 15,
    marginLeft: Dimensions.get('window').width / 4,
    marginTop: Dimensions.get('window').height / 18,
    borderColor: '#03DAC5',
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: '#2C2C2C'
  },
  arrow:{
    flex: 1,
    marginTop: 2
  },
  backinputview:{
    backgroundColor: '#1E1E1E',
    padding:0,
    top: 0,
    right: 120,
  },
  ewblogo:{
    // right: Dimensions.get('window').width / -1.55,
    // bottom: Dimensions.get('window').height / -20,
    marginTop: Dimensions.get('window').height / 20,
    marginBottom: Dimensions.get('window').height / -20,
    marginRight: Dimensions.get('window').width / 15,
    alignSelf: 'flex-end',
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').height / 17.5,
  },
  w4twlogo: {
    // marginTop: Dimensions.get('window').height / 25,
    // marginBottom: Dimensions.get('window').height/30,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 10,
    flex: 1,
  },
});
