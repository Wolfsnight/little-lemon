function Card({name, description, image}) {
	return (
		<article className="h-120 flex flex-col gap-12 border-4 border-lemonGreen rounded-lg p-4">
			<div className="flex flex-col items-center gap-4  py-4">
				<img
					src={`/images/${image}`}
					alt={name}
					className="max-w-40 rounded-full"
				/>
				<h3 className="font-bold text-xl">
					{name}
				</h3 >
			</div >
			<p className="text-center italic">
				{description}
			</p >
		</article >
	);
}

const Testimonials = () => {
	const testimonials = [
		{
			name: "Sophia Martinez",
			description:
				"Little Lemon is my new favorite restaurant! The atmosphere is relaxed, the food is incredibly fresh, and the cocktails are just perfect. The homemade lemon pasta absolutely blew me away!",
			image: "portrait01.png",
		},
		{
			name: "James O’Connor",
			description:
				"A true gem in the neighborhood! The ingredients are fresh and locally sourced, and you can taste the quality in every bite. I love the weekly special burger, but sometimes the service can be a bit slow.",
			image: "portrait02.png",
		},
		{
			name: "Emma Dubois",
			description:
				"Little Lemon has the perfect mix of elegance and coziness. I regularly come here with friends to enjoy the fantastic cocktails and the rotating daily specials. Always a delight!",
			image: "portrait03.png",
		},
	];

	return (
		<section className="py-12 px-8">
			<h2 className="text-4xl lg:text-5xl text-center font-bold pb-12">
				Testimonials
			</h2 >
			<div className="lg:max-w-5xl flex flex-col lg:flex-row gap-8 mx-auto">
				{testimonials.map((testimonial, index) => (
					<Card key={index} {...testimonial} />
				))}
			</div >
		</section >
	);
};

export default Testimonials;
