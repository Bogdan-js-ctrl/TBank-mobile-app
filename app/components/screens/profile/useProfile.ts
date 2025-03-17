import {useEffect, useMemo, useState} from 'react';
import {onSnapshot} from "firebase/firestore";
import {collection, limit, query, where} from "@firebase/firestore";

import {useAuth} from "../../../hooks/useAuth";
import {db} from '../../../firebase';

export interface IProfile {
    _id: string
    displayName: string
    docId: string
}

export const UseProfile = () => {  
    const { user } = useAuth(); // Убедитесь, что вы используете текущий контекст аутентификации  
    const [isLoading, setIsLoading] = useState(true);  
    const [profile, setProfile] = useState<IProfile>({} as IProfile);  
    const [name, setName] = useState('');  

    useEffect(() => {  
        if (!user) {  
            setIsLoading(false); // Если нет пользователя, завершите загрузку  
            return; // Прекратите выполнение  
        }  

        const unsubscribe = onSnapshot( // Ваш код для получения профиля  
            query(  
                collection(db, 'users'),  
                where('_id', '==', user.uid),  
                limit(1)  
            ), snapshot => {  
                if (!snapshot.empty) {  
                    const profile = snapshot.docs.map(d => ({  
                        ...(d.data() as Omit<IProfile, 'docId'>),  
                        docId: d.id  
                    }))[0];  
                    setProfile(profile);  
                    setName(profile.displayName);  
                } else {  
                    setProfile({} as IProfile);  
                    setName('');  
                }  
                setIsLoading(false);  
            }  
        );  

        return () => unsubscribe();  
    }, [user]);  

    return useMemo(() => ({ profile, isLoading, name, setName }), [profile, isLoading, name]);  
};  


export default UseProfile;