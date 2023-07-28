import './App.css';
import Entretien from './pages/Entretien';
import Futur from './pages/Futur';
import PasseCompose from './pages/PasseCompose';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Futur />} />
				<Route path='/Entretien' element={<Entretien />} />
				<Route path='/PasseCompose' element={<PasseCompose />} />
			</Routes>
		</Router>
	)
}

export default App;