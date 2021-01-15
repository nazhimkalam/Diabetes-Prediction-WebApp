import './About.css';

function About() {
	return (
		<div className="about">
			<p>
				Lung cancer is the uncontrollable growth of abnormal cells in one or both of the lungs. Cigarette smoking causes
				most lung cancers when smoke gets in the lungs. Lung cancer kills 1.8 million people each year, more than any
				other cancer. It is currently the leading cause of cancer death in men, and the second leading cause of cancer
				death in women.
			</p>
			<p>
				The large majority of people who get lung cancer have smoked for many years. However, there are types of lung
				cancers that appear in otherwise healthy patients who have never smoked. There are two main types of lung
				cancer, small cell lung cancer and non-small cell lung cancer. Small cell lung cancer typically responds well to
				chemotherapy and radiotherapy, and non-small cell lung cancer is more commonly treated with surgical removal of
				the lung tumor.
			</p>
			<div className="about__images">
				<img src="https://clf1.medpagetoday.com/assets/images/resource-center/lung%20tumors.jpg" alt="" />
				<img
					src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2017/12/29/22/46/lung-cancer-tumor-8col.jpg"
					alt=""
				/>
				<img src="https://www.news-medical.net/image.axd?picture=2019%2F4%2FBy_Nerthuz.jpg" alt="" />
			</div>
		</div>
	);
}

export default About;
