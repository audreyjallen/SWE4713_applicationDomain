import React, { useContext, createContext, useEffect, useState } from "react"
import { confirmPasswordRest, AuthErrorCodes, createUserWithEmailAndPassword, createManagerWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification, signOut, sendPasswordResetEmail, updateProfile, getAdditionalUserInfo } from 'firebase/auth';
import { auth, firestore, authCreate, app } from "../firebase";
import { addDoc, collection, doc, setDoc, getFirestore, getDocs} from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom'


const userContext = createContext();
export const useAuth = () => { return useContext(userContext) }
const UserAuthContext = ({ children }) => {
  const [error, setError] = useState("")
  const [currentuser, setuser] = useState()
  useEffect(
    () => {
      onAuthStateChanged(auth, user => {
        console.log(user)
        if (user) {
          setuser(user)
          console.log("u are logging")
        }
        else {
          // alert("u are logging out")
        }
      })
    }, [currentuser]
  )
  const SignUp = async (firstName, lastName, password, email, address) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        console.log(result)
        try {
          const docRef = await addDoc(collection(firestore, "Admin"), {
          email, firstName, lastName, password, address,
             userID: `${result.user.uid}`
          });
         // const ref = doc(firestore, "Admin", result.user.uid)
          //const docRef = await setDoc(ref, { email, firstName, lastName, password, address })
          //console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    ).catch(err => {
      if (err.code === "auth/email-already-in-use") {
        setInterval(() => {
          setError("")
        }, 5000)
        setError("email already in use try another email")
      }
      else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {

        setInterval(() => {
          setError("")
        }, 5000)
        setError("Password Must be 6 charecter")
      }

      else {
        setError(err.message)
      }
    })
  }
  const SingUpManager = async (firstName, lastName, password, email, address) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        console.log(result)
        try {
          const docRef = await addDoc(collection(firestore, "Manager"), {
          email, firstName, lastName, password, address,
             userID: `${result.user.uid}`
          });
         // const ref = doc(firestore, "Admin", result.user.uid)
          //const docRef = await setDoc(ref, { email, firstName, lastName, password, address })
          //console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    ).catch(err => {
      if (err.code === "auth/email-already-in-use") {
        setInterval(() => {
          setError("")
        }, 5000)
        setError("email already in use try another email")
      }
      else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {

        setInterval(() => {
          setError("")
        }, 5000)
        setError("Password Must be 6 charecter")
      }

      else {
        setError(err.message)
      }
    })
  }
  const SignUpAccountant = async (firstName, lastName, password, email, address) => {
    setError("");
    createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        console.log(result)
        try {
          const docRef = await addDoc(collection(firestore, "Accountant"), {
          email, firstName, lastName, password, address,
             userID: `${result.user.uid}`
          });
         // const ref = doc(firestore, "Admin", result.user.uid)
          //const docRef = await setDoc(ref, { email, firstName, lastName, password, address })
          //console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    ).catch(err => {
      if (err.code === "auth/email-already-in-use") {
        setInterval(() => {
          setError("")
        }, 5000)
        setError("email already in use try another email")
      }
      else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {

        setInterval(() => {
          setError("")
        }, 5000)
        setError("Password Must be 6 charecter")
      }

      else {
        setError(err.message)
      }
    })
  }

  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const ManagerLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const AccountantLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const Verifyemail = (email) =>{
     return sendEmailVerification(auth, email)
  }


  const logout = () => {
    return signOut(auth)
  }

  

  const value = {
    SignUp,
    SingUpManager,
    SignUpAccountant,
    UserLogin,
    ManagerLogin,
    AccountantLogin,
    error,
    currentuser,
    logout
  }
  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}

export default UserAuthContext
