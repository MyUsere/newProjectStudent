import { useState } from "react";



export const NewStudentForm = ()=>{
    const[name,setName] = useState('');
    const[surname,setSurname] = useState('');
    const[age,setAge] = useState(0);
    const[ speciality,setSpeciality] = useState('');

  const onNameChandle = (e) =>{
    setName(e.target.value)
  } 
  const onSurnameChandle = (e)=>{
    setSurname(e.target.value)
  }
  const onAgeChandle = (e)=>{
    setAge(e.target.value)
  }
  const onSpecialityChandle = (e)=>{
    setSpeciality(e.target.value)
  }

  

  return(
    <div>
        <h2>Add new Student</h2>
        <form>
          <p>
            <label htmlFor="studentName">name : </label>
            <input
            id="studentName"
            name="studentName"
            value={name}
            onChange={onNameChandle}/>
          </p>
          <p>
            <label htmlFor="studentSurname">surname : </label>
            <input
            id="studentSurname"
            name="studentSurname"
            value={surname}
            onChange={onSurnameChandle}
            />
          </p>
          <p>
            <label htmlFor="studentAge">age : </label>
            <input
            id="studentAge"
            name="studentAge"
            value={age}
            onChange={onAgeChandle}
            />
          </p>
          <p>
            <label htmlFor="studentSpeciality">speciality :</label>
            <input
           id="studentSpeciality"
           name="studentSpeciality" 
           value={speciality}
           onChange={onSpecialityChandle}
            />
          </p>
          <button >save</button>
        </form>
    </div>
  )
}
