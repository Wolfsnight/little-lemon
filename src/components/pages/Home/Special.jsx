import ButtonLink from "../../common/ButtonLink.jsx";

function Card({title, price, description, image}) {
	return (
		<article className="lg:max-w-80 h-120 lg:h-140 bg-white/30 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden my-8 mx-auto">
			<img
				src={`/images/${image}`}
				alt={title}
				className="h-60 w-full object-cover object-center"
			/>
			<div className="flex flex-col p-4">
				<div className="flex justify-between pb-4">
					<h3 className="text-xl font-bold">
						{title}
					</h3>
					<p className="text-red-700">
						{price}
					</p >
				</div >
				<p className="pb-8">
					{description}
				</p >
				<ButtonLink
					label="Order a delivery"
					href="/order"
				/>
			</div >
		</article >
	);
}

const Special = () => {
	const specials = [
		{
			title: "Greek Salad",
			price: "$12.99",
			description:
				"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
			image: "greekSalad.jpg",
		},
		{
			title: "Bruschetta",
			price: "$5.99",
			description:
				"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
			image: "bruchetta.svg",
		},
		{
			title: "Lemon Dessert",
			price: "$5.00",
			description:
				"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
			image: "lemonDessert.jpg",
		},
	];

	return (
		<section className="bg-lemonGreen bordert-2 borderb-2 py-8 px-4">
			<div className="lg:w-6xl flex justify-between items-center mx-auto">
				<h2 className="text-4xl lg:text-5xl text-white font-bold">
					Specials
				</h2 >
				<ButtonLink
					label="Online Menu"
					href="/order">
				</ButtonLink >
			</div >

			<div className="lg:w-6xl lg:flex lg:flex-row lg:gap-12 px-4 lg:px-0 mx-auto">
				{specials.map((item, index) => (
					<Card key={index} {...item} />
				))}
			</div >
		</section >
	);
};

export default Special;
