import React, { FC, useContext } from 'react';  
import { Text, TouchableOpacity } from "react-native";  
import tw from "twrnc";  
import Padding from "../../ui/Padding";  
import Avatar from "../../ui/Avatar";  
import { useNavigation } from "@react-navigation/native";  
import { Entypo } from '@expo/vector-icons';  
import useProfile from '../profile/useProfile';  
import Loader from "../../ui/Loader";  
import { AuthContext } from '../../../providers/AuthProvider';

const Header: FC = () => {  
    const { navigate } = useNavigation();  
    const { isLoading: isProfileLoading, name } = useProfile(); // Данные из useProfile  
    const { isLoading: isAuthLoading } = useContext(AuthContext) || { isLoading: true }; // Защита от ошибок  

    // Объедините два состояния загрузки  
    if (isProfileLoading || isAuthLoading) {  
        return <Loader />;  
    }  

    return (  
        <Padding style={tw`flex-row items-center`}>  
            <Avatar name={name} />  
            <TouchableOpacity onPress={() => navigate('Profile')} style={tw`flex-row items-end`}>  
                <Text style={tw`text-2xl text-gray-800 font-bold`}>{name}</Text>  
                <Entypo name={'chevron-small-right'} size={28} style={tw`text-gray-800`} />  
            </TouchableOpacity>  
        </Padding>  
    );  
};  

export default Header;  