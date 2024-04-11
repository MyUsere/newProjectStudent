
import {Outlet} from 'react-router-dom';
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
				<Outlet/>
				
			</div>
		</div>
	)
}

export default Root