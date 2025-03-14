import {Text, TouchableHighlight } from 'react-native'
import React, { FC } from 'react'
import tw from "twrnc";

interface IButton {
    onPress: () => void
    title: string
    colors?: [string, string] 

}

const Button:FC<IButton> = ({onPress, title, colors = ['bg-red-600', '#EF3124']}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors[1]} style={tw`${colors[0]}  rounded-xl w-full my-4 py-3`}> 
      <Text style={tw`text-center`}>{title}</Text>
    </TouchableHighlight>
  )
}

export default Button

// изменить цвет кнопки и текста 