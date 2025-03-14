import React, { FC } from 'react'
import tw from 'twrnc'
import Padding from '../../ui/Padding'
import Avatar from '../../ui/Avatar'

const Header:FC = () => {
  return (
    <Padding style={tw`flex-row items-center`}>
        <Avatar name='Bogdan'/>
    </Padding>
  )
}

export default Header