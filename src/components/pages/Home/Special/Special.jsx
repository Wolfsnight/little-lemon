import styles from "./Special.module.css"

import ButtonLink from "../../../common/ButtonLink/ButtonLink.jsx";

function Card({title, price, description, image}) {
	return (
		<article className={styles.card}>
			<img src={`/images/${image}`} alt={title} />
			<div >
				<h3 >{title} <span >{price}</span ></h3 >
				<p >{description}</p >
				<a href="/order">Order a delivery</a >
			</div >
		</article >
	);
}

const Special = () => {
	return (
		<section className={styles.special}>
			<div className={styles.specialHeader}>
				<h2 >Specials</h2 >
				<ButtonLink label="Online Menu" href="/order"></ButtonLink>
			</div >

			<div className={styles.cardContainer}>
				<Card
					title="Greek Salad"
					price="$12.99"
					description=
						"The famous greek salad of crispy lettuce, peppers, olives and our
						Chicago style feta cheese, garnished with crunchy garlic and
						rosemary croutons."
					image="greekSalad.jpg"
				/>
        <Card
	        title="Bruschetta"
	        price="$5.99"
	        description=
		        "Our Bruschetta is made from grilled bread that has been
		        smeared with garlic and seasoned with salt and olive oil."
	        image="bruchetta.svg"
        />
        <Card
	        title="Lemon Dessert"
	        price="$5.00"
	        description=
		        "This comes straight from grandma’s
		        recipe book, every last ingredient has been
		        sourced and is as authentic as can be imagined."
	        image="lemonDessert.jpg"
        />

			</div>


		</section>
	)
}

export default Special
