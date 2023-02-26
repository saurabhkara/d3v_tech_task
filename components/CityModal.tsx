import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import cityData from "../helper/cityName";
import COLORS from "../helper/colors";

interface IModalProp {
  isVisiable: boolean;
  onClose: () => void;
  onCity:(city:string)=>void;
}

export default function CityModal({ isVisiable, onClose,onCity }: IModalProp) {
  return (
    <Modal
      isVisible={isVisiable}
      style={{
        backgroundColor: COLORS.secondaryDark,
        borderRadius: 20,
        height: "100%",
      }}
      onBackButtonPress={() => onClose()}
    >
      <FlatList
        data={cityData}
        renderItem={({
          item,
        }: ListRenderItemInfo<{ country: string; city: string }>) => (
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.dark,
              marginTop: 10,
              borderRadius: 5,
              margin: 5,
            }}
            onPress={()=>onCity(item.city)}
          >
            <Text style={{textAlign:'center',color:'white'}}>{item.city}</Text>
          </TouchableOpacity>
        )}
      />
    </Modal>
  );
}
