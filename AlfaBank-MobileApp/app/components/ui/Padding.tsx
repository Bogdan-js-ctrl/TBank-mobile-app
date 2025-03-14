import React, { FC } from 'react'
import tw from 'twrnc'

interface Props {
    children?: React.ReactNode;
    style?: any
}

const Padding: FC<Props> = ({children, style = {}}) => {
    return <Padding style={{...tw`px-4`, ...style}}>{children}</Padding>

};

export default Padding;