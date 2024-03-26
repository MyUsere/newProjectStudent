import { configureStore } from "@reduxjs/toolkit";
import studentReducer from '../users/students/studentSlice';

export default configureStore({
    reducer:{
    Student:studentReducer  
    }
})