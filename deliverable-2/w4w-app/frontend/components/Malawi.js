import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Malawi({route,  navigation }){
    const {moneyval,f1, f2, f3, f4, f5, f6, f7, f8, isNew} = route.params;

    return(
        <View style={styles.background}>
            <Image source={require('../assets/EWB.png')}  style={styles.ewblogo}/>

            <Pressable style = {{marginLeft : - Dimensions.get('window').width/ 1.2}} onPress={async () => {
                navigation.navigate("GameIns")
                }}>
                <Icon name='arrow-left' color='#03DAC5' size={25} />
            </Pressable>

            <Text style={styles.textCaption}>Malawi</Text>
            <Text style={styles.subtext} numberOfLines={9}>
                Languages: English, Chichewa, Chinyanja, Chiyao, and others {"\n"}
                Life Expectancy: 62.2 Years {"\n"}
                Median Income (CAD$): $1,200 {"\n"}
                Unimproved Drinking Water: 9.8% of population {"\n"}
                Literacy Rate: 62.1% of population age 15 and above {"\n"}
                Population: {"> "}20 million
            </Text>
            <Text style={styles.textCaption}>Instructions</Text>
            <Text style={styles.subtext} numberOfLines={36}>
                1. XXXXXX put a piece of XXXX XXXXX of the filter, then put X XXXXX of XXXX plug XXXXX that. {"\n"}
                2. Place XXX layers of fine XXXX over the XXX XXXX, followed by X layers of XXXXX sand, XXXXXXX by one XXXX each of fine XXXXX and XXXX gravel. {"\n"}
                3. If XXX don’t have enough XXXXX then try different XXXXXXXXXXX. {"\n"}
                4. Now, XXXX your water XXXXX to find out how well your XXXXXX works and XXXXX or not it’s XXXXX.
            </Text>
            <Text style={styles.subtext2}>
                Note: You will have difficulty reading this – this simulates the effect of the literacy rate in this country. {"\n"}
            </Text>
            <Pressable style={styles.button2} numberOfLines={1} onPress={() => navigation.navigate("Game", {moneyVal: moneyval, country: 'malawi', f1: f1, f2: f2, f3: f3, f4: f4, f5:f5, f6:f6, f7:f7, f8:f8, isNew:isNew})}>
                <Text style={styles.textButton}>
                    Play Simulation
                </Text>
                <View style={styles.arrow} >
                <FontAwesome5 name='angle-right' color='#03DAC5' size={15}/>
                </View>
            </Pressable>
            {/* <Image source={require('../assets/WFTW.png')}  style={{left: 0, top: 0, width: 110, height: 115, alignSelf: 'center'}}/>
        <Image source={require('../assets/EWB.png')}  style={{right: -150, bottom: 750, width: 100, height:50, alignSelf: 'center'}}/> */}
        <Image source={require('../assets/WFTW.png')} style={styles.w4twlogo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1E1E1E',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textCaption: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 120,
        height: Dimensions.get('window').height/12, 
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    subtext: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / -80,
        textAlign: 'left',
        fontSize: 15,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.25,
    },
    subtext2: {
        color: '#03DAC5',
        marginTop: Dimensions.get('window').height / 64,
        textAlign: 'left',
        fontSize: 13,
        flexDirection: 'column',
        width: Dimensions.get('window').width / 1.25,
    },
    button2: {
        width:  Dimensions.get('window').width / 2,
        flexDirection: 'row',
        padding: 12,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C',
        alignItems: 'center',
    },
    arrow:{
        flex: 1,
        marginTop: 2
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
        marginLeft: Dimensions.get('window').width / -1.7,
        marginTop: Dimensions.get('window').height / -200,
        borderColor: '#03DAC5',
        borderRadius: 999,
        borderWidth: 2,
        backgroundColor: '#2C2C2C'
      },
    ewblogo:{
        right: Dimensions.get('window').width / -3,
        bottom: Dimensions.get('window').height / -17.5,
        width: Dimensions.get('window').width / 5,
    	height: Dimensions.get('window').height / 17.5,
      },
    //   w4twlogo: {
    //     bottom: Dimensions.get('window').height / 100,
    //     alignItems: 'center',
    //     width: Dimensions.get('window').width / 4,
    // 	height: Dimensions.get('window').height / 15.5,
    //   },
    w4twlogo: {
        bottom: Dimensions.get('window').height / 180,
        alignItems: 'flex-start',
		width: Dimensions.get('window').width / 4,
    	height: Dimensions.get('window').height / 15.5,
		position: 'absolute',
        bottom: 20,
        left: 10,
      },
});