import React, { FC } from 'react'
import { View } from 'react-native';
import tw from 'twrnc'

interface Props {
    children?: React.ReactNode;
    style?: any
}

const Padding: FC<Props> = ({children, style = {}}) => {
    return <View style={{...tw`px-4`, ...style}}>{children}</View>

};

export default Padding;