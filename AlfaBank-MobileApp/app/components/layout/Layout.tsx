import { View, ScrollView } from 'react-native';  
import React, { FC, ReactNode } from 'react';  
import tw from "twrnc";  

interface ILayout {  
    isScrollView?: boolean;  
    children: ReactNode;  
}  

export const styleCenter = () => {  
    return tw` flex-1 justify-center items-center bg-white pt-16`;  
}   

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {  
    return (  
        <View style={styleCenter()}>  
            {isScrollView ? <ScrollView>{children}</ScrollView> : children}  
        </View>  
    );  
};  

export default Layout;  