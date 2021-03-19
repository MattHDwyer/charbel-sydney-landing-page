import './App.css';
import NewsletterSignUp from './components/newsletterSignUp/NewsletterSignUp';
import SocialMediaIcons from './components/socialMediaIcons/SocialMediaIcons';

function App() {
	return (
		<div className="App">
			<div className="contentContainer">
				<div className="imageContainer">
					<img alt="informationImage" className="image" src="https://imgur.com/DI1zqQl.jpg" />
				</div>
				<div className="infoContainer">
					<img alt="shoplogo" className="infoLogo" src="https://i.imgur.com/PbbPTAR.jpg" />
					<h2 className="titleText">COMING SOON.....</h2>
					<p>We are currently working on creating something fantastic. We will be here soon.</p>
					<p>
						To book an appointment, please contact us:<br />
						<br />
						Phone: <a href="tel:0280844992">(02) 8084 4992</a><br />
						Email: <a href="mailto:info@charbelsydney.com">info@charbelsydney.com</a><br />
						<br />
						Address: <br />
						1A, 37 Alexandra Street, <br />
						Hunters Hill, 2110 <br />

					</p>
					<br />
					<SocialMediaIcons />
					<hr />
					<NewsletterSignUp />
					<p>We look forward to collaborating!</p>
				</div>
			</div>
		</div>
	);
}

export default App;
