import { useState } from 'react';
import './PredictionSection.css';

function PredictionSection() {
	const [result, setResult] = useState('');
	const [age, setAge] = useState(0);
	const [gender, setGender] = useState(0);
	const [airPollution, setAirPollution] = useState(0);
	const [alcoholUse, setAlcoholUse] = useState(0);
	const [dustAllergy, setDustAllergy] = useState(0);
	const [occupationalHazards, setOccupationalHazards] = useState(0);
	const [geneticRisk, setGeneticRisk] = useState(0);
	const [chronicLungDisease, setChronicLungDisease] = useState(0);
	const [balancedDiet, setBalancedDiet] = useState(0);
	const [obesity, setObesity] = useState(0);
	const [smoking, setSmoking] = useState(0);
	const [passiveSmoker, setPassiveSmoker] = useState(0);
	const [chestPain, setChestPain] = useState(0);
	const [coughingOfBlood, setCoughingOfBlood] = useState(0);
	const [fatigue, setFatigue] = useState(0);
	const [weightLoss, setWeightLoss] = useState(0);
	const [shortnessOfBreath, setShortnessOfBreath] = useState(0);
	const [wheezing, setWheezing] = useState(0);
	const [swallowingDifficulty, setSwallowingDifficulty] = useState(0);
	const [clubbingOfFingerNails, setClubbingOfFingerNails] = useState(0);
	const [frequentCold, setFrequentCold] = useState(0);
	const [dryCough, setDryCough] = useState(0);
	const [snoring, setSnoring] = useState(0);

	const submitResponse = (e) => {
		e.preventDefault();

		const dataToSend = {
			Age: age,
			Gender: gender,
			AirPollution: airPollution,
			Alcoholuse: alcoholUse,
			DustAllergy: dustAllergy,
			OccuPationalHazards: occupationalHazards,
			GeneticRisk: geneticRisk,
			chronicLungDisease: chronicLungDisease,
			BalancedDiet: balancedDiet,
			Obesity: obesity,
			Smoking: smoking,
			PassiveSmoker: passiveSmoker,
			ChestPain: chestPain,
			CoughingofBlood: coughingOfBlood,
			Fatigue: fatigue,
			WeightLoss: weightLoss,
			ShortnessofBreath: shortnessOfBreath,
			Wheezing: wheezing,
			SwallowingDifficulty: swallowingDifficulty,
			ClubbingofFingerNails: clubbingOfFingerNails,
			FrequentCold: frequentCold,
			DryCough: dryCough,
			Snoring: snoring,
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
				<p>Value input Range (1-10)</p>
				<div className="predictionSection__rule">
					<p>1 - giving the least importance</p>
					<p>10 - giving the most importance</p>
				</div>

				<div className="predictionSection__rangeScores">
					<p>1 - Not at all</p>
					<p>2, 3 - Mild</p>
					<p>4, 5 - Moderate</p>
					<p>6 - Severe</p>
					<p>7, 8 - Very Severe</p>
					<p>9, 10 - Worst as Possible</p>
				</div>
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
						Gender: <input name="gender" value={gender} onChange={(e) => setGender(e.target.value)} type="number" />
					</p>
					<p>
						Air Pollution:{' '}
						<input
							name="airPollution"
							value={airPollution}
							onChange={(e) => setAirPollution(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Alcohol Use:{' '}
						<input name="alcoholUse" value={alcoholUse} onChange={(e) => setAlcoholUse(e.target.value)} type="number" />
					</p>
					<p>
						Dust Allergy:{' '}
						<input
							name="dustAllergy"
							value={dustAllergy}
							onChange={(e) => setDustAllergy(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Occupational Hazards:{' '}
						<input
							name="occupationalHazards"
							value={occupationalHazards}
							onChange={(e) => setOccupationalHazards(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Genetic Risk:{' '}
						<input
							name="geneticRisk"
							value={geneticRisk}
							onChange={(e) => setGeneticRisk(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Chronic Lung Disease:{' '}
						<input
							name="chronicLungDisease"
							value={chronicLungDisease}
							onChange={(e) => setChronicLungDisease(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Balanced Diet:{' '}
						<input
							name="balancedDiet"
							value={balancedDiet}
							onChange={(e) => setBalancedDiet(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Obesity: <input name="obesity" value={obesity} onChange={(e) => setObesity(e.target.value)} type="number" />
					</p>
					<p>
						Smoking: <input name="smoking" value={smoking} onChange={(e) => setSmoking(e.target.value)} type="number" />
					</p>
					<p>
						Chest Pain:{' '}
						<input name="chestPain" value={chestPain} onChange={(e) => setChestPain(e.target.value)} type="number" />
					</p>
				</div>
				<div className="predictionSection__right">
					<p>
						Coughing of Blood:{' '}
						<input
							name="coughingOfBlood"
							value={coughingOfBlood}
							onChange={(e) => setCoughingOfBlood(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Fatigue: <input name="fatigue" type="number" value={fatigue} onChange={(e) => setFatigue(e.target.value)} />
					</p>
					<p>
						Weight Loss:{' '}
						<input name="weightLoss" type="number" value={weightLoss} onChange={(e) => setWeightLoss(e.target.value)} />
					</p>
					<p>
						Shortness of Breath:{' '}
						<input
							name="shortnessOfBreath"
							type="number"
							value={shortnessOfBreath}
							onChange={(e) => setShortnessOfBreath(e.target.value)}
						/>
					</p>
					<p>
						Wheezing:{' '}
						<input name="wheezing" value={wheezing} onChange={(e) => setWheezing(e.target.value)} type="number" />
					</p>
					<p>
						Swallowing Difficulty:{' '}
						<input
							name="swallowingDifficulty"
							value={swallowingDifficulty}
							onChange={(e) => setSwallowingDifficulty(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Clubbing of Finger Nails:{' '}
						<input
							name="clubbingOfFingerNails"
							value={clubbingOfFingerNails}
							onChange={(e) => setClubbingOfFingerNails(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Frequent Cold:{' '}
						<input
							name="frequentCold"
							value={frequentCold}
							onChange={(e) => setFrequentCold(e.target.value)}
							type="number"
						/>
					</p>
					<p>
						Dry Cough:{' '}
						<input name="dryCough" value={dryCough} onChange={(e) => setDryCough(e.target.value)} type="number" />
					</p>
					<p>
						Snoring: <input name="snoring" type="number" value={snoring} onChange={(e) => setSnoring(e.target.value)} />
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
