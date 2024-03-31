
import { StudentList } from "../users/students/studentList"
import { NewStudentForm } from "../users/students/NewStudentForm"
function Root() {
	return (
		<div id="main">
			<div id="menu">
				<nav>
					<a>Студенты</a>
					<a>успеваемость</a>
				</nav>
			</div>
			<div id="main_page">
				<h2>редукс-тоолкит</h2>
				<hr></hr>
			
				<StudentList/>
				<NewStudentForm/>
			</div>
		</div>
	)
}

export default Root