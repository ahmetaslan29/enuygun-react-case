import { useSelector } from 'react-redux';
import { EmployeeCard } from '../components';

const Home = () => {
	
	const employee = useSelector(state => state.employee);
	const sorted = [...employee].sort(( a,b) => b.vote - a.vote )
	
	return (
		<section>
			<div className="wrapper">
				<div className='wrapper__list'>
					{sorted.map( emp => (
						<EmployeeCard key={emp.id} employee={emp} detail="Home"/>
					) )}
				</div>	
				
			</div>
		</section>
	);
}

export default Home;