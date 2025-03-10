import { User } from '@firebase/auth'
import React, { createContext, useMemo, useState } from 'react'
import { Alert } from 'react-native'
import { register } from '../firebase'

interface IContext{
    user: User | null
}

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = () => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const registerHandler = async (email:string, password: string) => {
        setIsLoading(true)
        try {
            const {user} = await register(email, password)
        } catch (error: any){
            Alert.alert('Error reg:', error)
        } finally {
            setIsLoading(false)
        }
    }
    const value = useMemo(() => ({

    }), [])

    return value
}