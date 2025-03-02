import styles from "./Testimonials.module.css";

function Card({name, description, image}) {
	return (
		<article className={styles.card}>

			<div >
				<img src={`/images/${image}`} alt="" />
				<h3 >{name} </h3 >
			</div >

			<p >{description}</p >

		</article >
	);
}

const Testimonials = () => {
	return (
		<section >
			<h2 >Testimonials</h2 >

			<div className={styles.container}>

				<Card
					name="Sophia Martinez"
					description=
						"Little Lemon is my new favorite restaurant! The atmosphere
						is relaxed, the food is incredibly fresh, and the cocktails
						are just perfect. The homemade lemon pasta absolutely
						blew me away!"
					image="portrait01.png"
				/>

				<Card
					name="James O’Connor"
					description=
						"A true gem in the neighborhood!
						The ingredients are fresh and locally sourced,
						and you can taste the quality in every bite.
						I love the weekly special burger, but sometimes the service
						can be a bit slow."
					image="portrait02.png"
				/>

				<Card
					name="Emma Dubois"
					description=
						"Little Lemon has the perfect mix of elegance and coziness.
						I regularly come here with friends to enjoy the fantastic
						cocktails and the rotating daily specials.
						Always a delight!"
					image="portrait03.png"
				/>

			</div >
		</section >

	)
}

export default Testimonials
