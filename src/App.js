import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import LungCancerPredTitle from './components/LungCancerPredTitle/LungCancerPredTitle';
import MainTitle from './components/MainTitle/MainTitle';
import PredictionSection from './components/PredictionSection/PredictionSection';

function App() {
	return (
		<div className="app">
			<MainTitle />
			<About />
			<LungCancerPredTitle />
			<PredictionSection />
			<Footer />
		</div>
	);
}

export default App;
