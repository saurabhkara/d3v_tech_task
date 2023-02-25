import { View, Text } from 'react-native'
import React from 'react';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationParams } from '../App';

type TDetailsProps = NativeStackScreenProps<StackNavigationParams,'details'>

export default function Details({navigation}:TDetailsProps) {
    
  return (
    <View>
      <Text onPress={()=>navigation.replace('home')}>Details</Text>
    </View>
  )
}