import React from 'react'
import { useState, useEffect} from 'react'
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Bar } from './appBar'
import  calendar  from '../calendar'
import { useNavigate, Link } from 'react-router-dom'
import {firestore } from "../firebase";
import { addDoc, collection, doc, setDoc, useCollectionData, getDocs} from "firebase/firestore";
import { useAuth } from '../context/UserAuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert2';
import '../App.css'



