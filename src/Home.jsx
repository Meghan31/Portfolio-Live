import { About } from './about/About';
import './app.scss';
import { CareerPage } from './career/CareerPage';
import Details from './components/hero/Details';
import Navbar from './components/navbar/navbar';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import MobileView from './MobileView';
import Projects from './projects/Projects';
// import ProjectSection from './ProjectSection';
import RecentProjects from './recent-projects/RecentProjects';
// import ResponselessScreen from './ResponselessScreen';
import Skills from './skills/Skills';

const Home = () => {
	return (
		<>
			{/* Mobile version - shown/hidden via CSS */}
			<div className="mobile-only">
				{/* <ResponselessScreen /> */}
				<MobileView />
			</div>

			{/* Desktop version - shown/hidden via CSS */}
			<div className="desktop-only">
				<section id="home" style={{ height: '100vh' }}>
					<Navbar />
					<div id="profile">
						<Details />
					</div>
				</section>
				<section id="about" style={{ height: '100vh' }}>
					<About />
				</section>
				<section id="career" style={{}}>
					<CareerPage />
				</section>
				<section id="recents" style={{ marginBottom: '100px' }}>
					<RecentProjects />
				</section>
				{/* <section id="ProjectSection" style={{ height: '100vh' }}>
					<ProjectSection />
				</section> */}
				<section
					id="projects"
					style={{
						background:
							'linear-gradient(to bottom, white 0%, white 10%, #C4E7FF 10%, #C4E7FF 90%, #487DFF 90%, #487DFF 100%)',
					}}
				>
					<Projects />
				</section>

				<section id="skills" style={{}}>
					<Skills />
				</section>
				<section id="contact" style={{ height: '100vh' }}>
					<Contact />
					<Footer id="footer" />
				</section>
			</div>
		</>
	);
};

export default Home;
