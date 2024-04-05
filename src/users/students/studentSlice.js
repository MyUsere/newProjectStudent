 
 import { createSlice } from "@reduxjs/toolkit";
 import { nanoid } from "@reduxjs/toolkit";
 export function id(){
  return nanoid(10)
 }
const initialState = [
  {
    id: id(),
    name: "Николай",
    surname: "Хренов",
    age:45,
    speciality:'токарь'
  },
  {
    id: id(),
    name: "Алексей",
    surname: "Баранов",
    age:40,
    speciality:'слесарь'
  },
];
const studentSlice = createSlice({
  name: "Student",
  initialState,
  reducers: {
  studentAdd(state,action){
    state.push(action.payload)
  }
  },
});

export const {studentAdd} = studentSlice.actions;
export default studentSlice.reducer;
