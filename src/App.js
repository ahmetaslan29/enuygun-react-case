import { useDispatch } from 'react-redux';
import { Home, HomeDetails } from './pages';
import { Header, Footer } from './components'
import { employee } from './redux/actions';

import { Route, Routes } from 'react-router-dom';


const App = () => {
	
	const dispatch = useDispatch();
	dispatch(employee());
	
	return (
		<>
			<Header/>	
			<Routes>
				<Route path="/" exact element={<Home />} />					
				<Route path="/:id" element={<HomeDetails />} />
			</Routes>
			<Footer/>
		</>
	);
}
export default App;