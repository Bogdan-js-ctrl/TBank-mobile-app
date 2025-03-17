import React, { FC, useState } from 'react';  
import { View, Text, Pressable, Alert } from 'react-native';  
import { styleCenter } from '../../layout/Layout';  
import { useAuth } from '../../../hooks/useAuth';  
import Field from '../../ui/Field';  
import Loader from '../../ui/Loader';  
import Button from '../../ui/Button';  
import tw from "twrnc";  

interface IData {  
    email: string;  
    password: string;  
}  

const Auth: FC = () => {  
    const { isLoading, login, register } = useAuth();  
    const [data, setData] = useState<IData>({ email: '', password: '' });  
    const [isReg, setIsReg] = useState(false);  

    const authHandler = async () => {  
        const { email, password } = data;  
        try {  
            if (isReg) await register(email, password);  
            else await login(email, password);  
        } catch (error: any) {  
            Alert.alert('Ошибка', error.message);  
        } finally {  
            setData({ email: '', password: '' });  
        }  
    };  

    return (  
        <View style={styleCenter()}>  
            <View style={tw`flex-1 justify-center items-center`}>  
                <View style={tw`w-9/12`}>  
                    <Text style={tw`text-center text-gray-800 text-2xl font-bold mb-2`}>  
                        {isReg ? 'Зарегистрируйтесь' : 'Войдите'}  
                    </Text>  

                    {isLoading ? <Loader /> : (  
                        <>  
                            <Field  
                                val={data.email}  
                                placeholder='Введите email'  
                                onChange={val => setData({ ...data, email: val })}  
                            />  
                            <Field  
                                val={data.password}  
                                placeholder='Введите пароль'  
                                onChange={val => setData({ ...data, password: val })}  
                                isSecure={true}  
                            />  
                            <Button onPress={authHandler} title={`Подтвердить`} />  
                            <Pressable onPress={() => setIsReg(!isReg)}>  
                                <Text style={tw`text-gray-800 opacity-30 text-right text-sm`}>  
                                    {isReg ? 'Вход' : 'Регистрация'}  
                                </Text>  
                            </Pressable>  
                        </>  
                    )}  
                </View>  
            </View>  
        </View>  
    );  
}  

export default Auth;  