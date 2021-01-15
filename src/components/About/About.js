import './About.css';

function About() {
	return (
		<div className="about">
			<div className="about__about">
				<h2>About</h2>
				<p>
					Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose
					is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps
					glucose from food get into your cells to be used for energy. Sometimes your body doesn’t make enough—or
					any—insulin or doesn’t use insulin well. Glucose then stays in your blood and doesn’t reach your cells.
				</p>
				<p>
					Over time, having too much glucose in your blood can cause health problems. Although diabetes has no cure, you
					can take steps to manage your diabetes and stay healthy. Sometimes people call diabetes “a touch of sugar” or
					“borderline diabetes.” These terms suggest that someone doesn’t really have diabetes or has a less serious
					case, but every case of diabetes is serious.
				</p>
			</div>

			<div className="about__common">
				<h2>How common is diabetes?</h2>
				<p>
					As of 2015, 30.3 million people in the United States, or 9.4 percent of the population, had diabetes. More
					than 1 in 4 of them didn’t know they had the disease. Diabetes affects 1 in 4 people over the age of 65. About
					90-95 percent of cases in adults are type 2 diabetes.1
				</p>
			</div>

			<div className="about__healthProblems">
				<h2>What health problems can people with diabetes develop?</h2>
				<p>Over time, high blood glucose leads to problems such as</p>
				<div className="about__healthProblemsList">
					<p> • heart disease</p>
					<p> • stroke</p>
					<p> • kidney disease</p>
					<p> • eye problems</p>
					<p> • dental disease</p>
					<p> • nerve damage</p>
					<p> • foot problems</p>
				</div>
			</div>

			<div className="about__images">
				<img
					src="https://cdn.images.express.co.uk/img/dynamic/11/590x/Diabetes-complication-841047.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}

export default About;
