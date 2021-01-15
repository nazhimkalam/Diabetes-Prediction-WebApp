import { useState } from 'react';
import './PredictionSection.css';

function PredictionSection() {
	const [result, setResult] = useState('');
	const [age, setAge] = useState(0);
	const [pregnancies, setPregnancies] = useState(0);
	const [glucose, setGlucose] = useState(0);
	const [bloodPressure, setBloodPressure] = useState(0);
	const [skinThickness, setSkinThickness] = useState(0);
	const [insulin, setInsulin] = useState(0);
	const [bmi, setBmi] = useState(0);
	const [diabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState(0);

	const submitResponse = (e) => {
		e.preventDefault();

		const dataToSend = {
			Age: age,
			Pregnancies: pregnancies,
			Glucose: glucose,
			BloodPressure: bloodPressure,
			SkinThickness: skinThickness,
			Insulin: insulin,
			BMI: bmi,
			DiabetesPedigreeFunction: diabetesPedigreeFunction,
		};

		// POST request using fetch with React hooks
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataToSend),
		};
		fetch('http://127.0.0.1:1080/predict', requestOptions)
			.then((response) => response.json())
			.then((result) => setResult(result.Prediction));
	};

	return (
		<div className="predictionSection">
			<div className="predictionSection__range">
				<p>
					<span>Pregnancies</span> : Number of times pregnant
				</p>
				<p>
					<span>Glucose</span> : Plasma glucose concentration a 2 hours in an oral glucose tolerance test
				</p>
				<p>
					<span>Blood Pressure</span> : Diastolic blood pressure (mm Hg)
				</p>
				<p>
					<span>Skin Thickness</span> : Triceps skin fold thickness (mm)
				</p>
				<p>
					<span>Insulin</span> : 2-Hour serum insulin (mu U/ml)
				</p>
				<p>
					<span>BMI</span> : Body mass index (weight in kg/(height in m)^2)
				</p>
				<p>
					{' '}
					<span>Diabetes Pedigree Function</span> : Diabetes pedigree function
				</p>
				<p>
					<span>Age</span> : Age (years)
				</p>
			</div>

			{/* result */}
			{result && (
				<div className="predictionSection__result">
					<h3>prediction: {result}</h3>
				</div>
			)}
			<form>
				<div className="predictionSection__left">
					<p>
						Age: <input size="2" value={age} type="number" onChange={(e) => setAge(e.target.value)} />
					</p>
					<p>
						Pregnancies:{' '}
						<input
							name="pregnancies"
							value={pregnancies}
							onChange={(e) => setPregnancies(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Glucose: <input name="glucose" value={glucose} onChange={(e) => setGlucose(e.target.value)} type="number" />
					</p>
					<p>
						Blood Pressure:{' '}
						<input
							name="bloodPressure"
							value={bloodPressure}
							onChange={(e) => setBloodPressure(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Skin Thickness:{' '}
						<input
							name="skinThickness"
							value={skinThickness}
							onChange={(e) => setSkinThickness(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Insulin: <input name="insulin" value={insulin} onChange={(e) => setInsulin(e.target.value)} type="number" />
					</p>
					<p>
						BMI: <input name="bmi" value={bmi} onChange={(e) => setBmi(e.target.value)} type="number" />
					</p>
					<p>
						Diabetes Pedigree Function:{' '}
						<input
							name="chronicLungDisease"
							value={diabetesPedigreeFunction}
							onChange={(e) => setDiabetesPedigreeFunction(e.target.value)}
							type="number"
						/>
					</p>

					<button type="submit" className="predictionSection__predictBTN" onClick={submitResponse}>
						PREDICT
					</button>
				</div>
			</form>
		</div>
	);
}

export default PredictionSection;
