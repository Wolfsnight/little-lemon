import Hero from './Hero/Hero.jsx';
import Special from './Special/Special.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';

import styles from './Home.module.css';

const Home = () => {
	return (
		<main className={styles}>
			<Hero />
			<Special />
			<Testimonials />
		</main>
	)
}

export default Home;
