import { useContext, createContext, useEffect, useState } from "react"
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth'
import { auth, firestore } from "../firebase";
import { addDoc, collection, doc, setDoc, useCollectionData } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom'

const dummyAccounts = [

    {
        name: "Basic Assets Account",
        id: "12345"
    },
    {
        name: "Basic Liabilities Account",
        id: "54321"
    }

]


export const getAccounts = () => {

    const res = localStorage.getItem("accounts")
    if (!res) {
        localStorage.setItem("accounts", JSON.stringify(dummyAccounts))
        return dummyAccounts
    }
    return JSON.parse(res)
}