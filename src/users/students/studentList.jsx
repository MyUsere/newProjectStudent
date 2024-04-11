import { useSelector } from "react-redux";
import{NewStudentForm} from './NewStudentForm';

export const StudentList = () => {
  const user = useSelector((state) => state.Student);

  const userStudent = user.map((elem) => (
    <div key={elem.id}>
      <p>{elem.name}</p>
      <p>{elem.surname}</p>
      <p>{elem.age}</p>
      <p>{elem.speciality}</p>
      <hr/>
    </div>
    
  ));

  return (
    <div>
      <NewStudentForm/>
      <h2>student</h2>
      {userStudent}
    </div>
  );
};
