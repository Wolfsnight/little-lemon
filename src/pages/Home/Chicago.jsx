import chef from "@/assets/restaurantChefB.jpg"

const Chicago = () => {
	return (
		<section>
			<img
				src={chef}
				alt=""
				className="w-full h-60 object-cover object-top lg:hidden"
			/>
			<h2 className="text-3xl font-bold text-center py-8 lg:text-4xl">
				About us
			</h2 >
			<div className="flex flex-col lg:flex-row lg:gap-12 justify-center items-start">
				<article className="text-center px-8 lg:w-120">
					<h3 className="text-xl font-bold pb-2">
						Little Lemon – A Chicago Neighborhood Gem
					</h3>
					<p className="italic pb-8">
						Located in the heart of Chicago, Little Lemon is a cozy bistro known
						for its simple, flavorful dishes and classic cocktails. With a locally
						sourced menu and daily specials, it offers a lively yet relaxed dining
						experience.
					</p>
					<h3 className="text-xl font-bold pb-2">
						A Taste of Home
					</h3>
					<p className="italic pb-8">
						Founded by brothers Marco and Adrian, Little Lemon brings the warmth
						of Mediterranean cooking to Chicago. Inspired by their childhood, they
						blend fresh, local ingredients with timeless flavors, creating a
						welcoming spot where food and community come together.
					</p>
				</article>
				<img
					src={chef}
					alt=""
					className="hidden lg:block w-120 object-cover object-top rounded-lg"
				/>
			</div >
		</section>
	)
}

export default Chicago;
