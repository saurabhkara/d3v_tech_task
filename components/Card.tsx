import { View, Text, StyleSheet} from "react-native";
import React from "react";
import COLORS from "../helper/colors";
import { List } from "../model/types";

interface IProp{
  list:List
}

export default function Card({list}:IProp) {
  const {dt_txt, main:{temp, temp_min, temp_max}, weather} =list;
  const [date, time] = dt_txt.split(' ');
  return (
    <View style={styles.cardContainer}>
        <Text style={{textAlign:'center',color:COLORS.secondary}}>{date}</Text>
      <View style={styles.card}>
        <Text style={{color:'grey', textAlign:'center'}}>{time.slice(0,5)}</Text>
        {/* <Image source={{uri:'https://res.cloudinary.com/dew3bffz3/image/upload/v1677377433/Pngtree_cloud_3554581_qgzzcr.png'}}  style={styles.img}/> */}

        <Text style={{textAlign:'center',color:'grey', marginVertical:15}}>{weather[0].description}</Text>
        <View style={{flexDirection:'row',justifyContent:'center', marginVertical:10}}>
        <Text style={styles.temp}>{temp.toFixed()}</Text>
        <Text style={styles.deg}>°</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{color:'grey'}}>Min{" "}<Text style={{color:'black'}}>{temp_min.toFixed()}</Text></Text>
        <Text style={{color:'grey'}}>Max{" "}<Text style={{color:'black'}}>{temp_max.toFixed()}</Text></Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height:'95%'
  },
  card: {
    height: 200,
    width: 135,
    backgroundColor: COLORS.lightPrimary,
    borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    margin: 5,
    elevation: 4,
    padding:6
  },
  temp:{
    fontSize:30,
    textAlign:'center',
    justifyContent:'center'
  },
  deg:{
    fontSize:20,
    lineHeight:30
  },img:{
    height:50,
    width:50,
  }
});
