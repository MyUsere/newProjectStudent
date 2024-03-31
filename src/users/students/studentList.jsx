import { useSelector } from "react-redux";

export const StudentList = () => {
  const user = useSelector((state) => state.Student);

  const userStudent = user.map((elem) => {
    return (
      <>
        <li key={elem.id}>{elem.id}</li>
        <li>{elem.name}</li>
        <li>{elem.surname}</li>
        <li>{elem.age}</li>
        <li>{elem.speciality}</li>
        <hr/>
      </>
    );
  });
  return (
    <div>
      <h2>student</h2>
      <ul> {userStudent} </ul>
    </div>
  );
};
