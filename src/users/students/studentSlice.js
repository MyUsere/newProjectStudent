 
 import { createSlice } from "@reduxjs/toolkit";
 import { nanoid } from "@reduxjs/toolkit";
 function id(){
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
  reducers: {},
});

export default studentSlice.reducer;
