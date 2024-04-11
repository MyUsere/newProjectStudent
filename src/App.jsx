
import { createBrowserRouter, RouterProvider 
} from 'react-router-dom' 
import Root from './Store/root.jsx'
import { StudentList } from './users/students/StudentList'

const router = createBrowserRouter([{ path: '/',
element:<Root/>,children:[
	{
		path: '/students',
		element:<StudentList/>
	}
]}])

function App(){
	return<RouterProvider router={router}/>
}
export default App