
import './App.css';
import About from './components/About/About';
import DiabetesPredTitle from './components/DiabetesPredTitle/DiabetesPredTitle';
import Footer from './components/Footer/Footer';
import MainTitle from './components/MainTitle/MainTitle';
import PredictionSection from './components/PredictionSection/PredictionSection';

function App() {
	return (
		<div className="app">
			<MainTitle />
			<About />
			<DiabetesPredTitle />
			<PredictionSection />
			<Footer />
		</div>
	);
}

export default App;
