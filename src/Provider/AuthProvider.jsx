import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";


const auth = getAuth (app)
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
       setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
     }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth , currentUser =>{
            console.log('user in state' , currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()

        }
    } ,[])

    
  

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;