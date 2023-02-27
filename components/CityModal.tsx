import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";
import React,{useState} from "react";
import Modal from "react-native-modal";
import COLORS from "../helper/colors";

interface IModalProp {
  isVisiable: boolean;
  onClose: () => void;
  onCity:(city:string)=>void;
}

export default function CityModal({ isVisiable, onClose, onCity }: IModalProp) {
  const [searchLoc, setSearchLoc] = useState('');
  function validate(){
    if(searchLoc){
      onCity(searchLoc)
    }else{
      Alert.alert('Please Search correct City');
    }
  }
  return (
    <Modal
      isVisible={isVisiable}
      style={{
        backgroundColor: COLORS.secondaryDark,
        borderRadius: 20,
        height: "50%",
      }}
      onBackButtonPress={() => onClose()}
    >
      <View style={{alignItems:'center',justifyContent:'center'}}>
          <View style={styles.input}>
            <TextInput placeholder="Please search location" onChangeText={(text:string)=>setSearchLoc(text)}/>
          </View>
          <TouchableOpacity onPress={validate} style={styles.button}>
              <Text style={{color:'blue'}}>Search Location</Text>
          </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles= StyleSheet.create({
  button:{
    backgroundColor:'white',
    padding:15,
    margin:5,
    borderRadius:15,
  }, 
  input:{
    backgroundColor:'white',
    width:'90%',
  padding:10,
  marginVertical:20,
  borderRadius:5
  }
})